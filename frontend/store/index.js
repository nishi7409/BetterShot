import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    // state used for statuses
    state: {
        loggedIn: false,
        token: localStorage.getItem('token') || '',
        email: localStorage.getItem('email') || ''
    },
    getters: {

    },
    actions: {
        // login start
        login(context, payload) {
            context.commit('login', payload)
        },
        // register start
        register(context, payload) {
            context.commit('register', payload)
        },
        // logout start
        logout(context) {
            context.commit('logout')
        },
    },
    mutations: {
        // login mutation
        login(state, payload) {
            // checkers to see if data is valid
            if (String(payload.email).length == 0) {
                Vue.notify({
                    position: "top center",
                    group: "login",
                    text: "The email can't be blank 😔",
                    type: "error",
                })
                return(undefined);
            } else if (String(payload.password).length == 0) {
                Vue.notify({
                    position: "top center",
                    group: "login",
                    text: "The password can't be blank 😔",
                    type: "error",
                })
                return(undefined);
            }
            // POST request to /rest-author/login/
            axios.post("http://127.0.0.1:8000/rest-auth/login/", {
                email: payload.email,
                password: payload.password
            }, {
                headers: {'Content-Type': 'application/json',}
            }).then(function (response) {
                // if good response, user is logged in!
                if (response.status == 200) {
                    state.loggedIn = true;
                    state.token = response.data.key;
                    state.email = payload.email;
                    localStorage.setItem("token", response.data.key);
                    localStorage.setItem("loggedIn", true);
                    localStorage.setItem("email", payload.email);
                    Vue.notify({
                        position: "top center",
                        group: "login",
                        text: "Successfully logged into your account! 🙂",
                        type: "success",
                    })
                    // redirect user
                    window.setTimeout(function () {
                        window.location.href = "/home";
                    }, 1000)
                }
                // uh oh, there's a problem
            }).catch(function (error) {
                if (error.response) {
                    Vue.notify({    
                        position: "top center",
                        group: "login",
                        text: `${error.response.data.non_field_errors[0]}` + " 😔",
                        type: "error",
                    });
                } else {
                    Vue.notify({
                        position: "top center",
                        group: "login",
                        text: `${error.response.data.password[0]}` + " 😔",
                        type: "error",
                    });
                }
                // set data
                state.loggedIn = false;
                state.token = "NONE";
                state.email = "";
                localStorage.setItem("token", "NONE");
                localStorage.setItem("loggedIn", false);
                localStorage.setItem("email", "");
            })
            return(undefined);
        },
        // register user for account
        register(state, payload) {
            // data validation
            if (String(payload.email).length == 0) {
                Vue.notify({
                    position: "top center",
                    group: "login",
                    text: "The email can't be blank 😔",
                    type: "error",
                })
                return(undefined);
            } else if (String(payload.password).length == 0) {
                Vue.notify({
                    position: "top center",
                    group: "login",
                    text: "The password can't be blank 😔",
                    type: "error",
                })
                return(undefined);
            } else if (String(payload.email).length == 0) {
                Vue.notify({
                    position: "top center",
                    group: "login",
                    text: "The email can't be blank 😔",
                    type: "error",
                })
                return(undefined);
            }
            // POST request to /rest-auth/registration/
            axios.post("http://127.0.0.1:8000/rest-auth/registration/", {
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                password: payload.password,
            }, {headers: {'Content-Type': 'application/json'}}).then(function (response) {
                // success response
                if (response.status == 201) {
                    state.loggedIn = true;
                    state.token = response.data.key;
                    state.email = payload.email;
                    localStorage.setItem("token", response.data.key);
                    localStorage.setItem("loggedIn", true);
                    localStorage.setItem("email", payload.email);
                    // redirect user
                    window.setTimeout(function () {
                        window.location.href = "/home";
                    }, 1000)
                }
                // uh oh error!
            }).catch(function (error) {
                if (error.response) {
                    for (const key in error.response.data) {
                        Vue.notify({    
                            position: "top center",
                            group: "login",
                            text: `${key} - ${error.response.data[key]}` + " 😔",
                            type: "error",
                        });
                    }
                } else {
                    for (const key in error.response.data) {
                        Vue.notify({    
                            position: "top center",
                            group: "login",
                            text: `${key} - ${error.response.data[key]}` + " 😔",
                            type: "error",
                        });
                    }
                }
                // set state & localstorage data
                state.loggedIn = false;
                state.token = "NONE";
                state.email = "";
                localStorage.setItem("token", "NONE");
                localStorage.setItem("loggedIn", false);
                localStorage.setItem("email", "");
            })
            return(undefined);
        },
        // log out user
        logout(state) {
            axios.post("http://127.0.0.1:8000/rest-auth/logout/").then(
                Vue.notify({
                    position: "top center",
                    group: "login",
                    text: `Successfully logged out` + " 👋",
                    type: "error"
                })
            )
            // set state & localstorage
            localStorage.setItem("loggedIn", false)
            localStorage.setItem("token", "NONE")
            localStorage.setItem("email", "");
            state.loggedIn = false;
            state.token = "NONE";
            state.email = "";
            window.setTimeout(function() {
                window.location.href = "/";
            }, 1000);
            return(undefined);
        }
    },
});
