<template>
<div id="register">
    <div id="register-form" class="columns is-mobile is-centered" margin-top>
        <div class="column is-half">
            <div class="container">
            <form class="box has-background-grey-light">
                <h1 class="title"> Register </h1>
                <div class="field">
                    <label class="label">First Name</label>
                    <div class="control">
                    <input v-model="firstName" class="input" type="text" placeholder="John">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Last Name</label>
                    <div class="control">
                    <input v-model="lastName" class="input" type="text" placeholder="Doe">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                    <input v-model="userData.email" class="input" type="email" placeholder="e.g. john@doe.com">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input v-model="userData.password"  class="input" type="password" placeholder="********">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input v-model="userData.password2"  class="input" type="password" placeholder="********">
                    </div>
                </div>
                <button class="button is-primary" v-on:click="signUp(userData)">Sign Up</button>
            </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Register',
        data: () => ({
            userData: {
                email: '', password: '', password2: ''
            }
        }),
        methods: {
            async signUp(registrationInformation) {
                await this.$axios
                    .post('accounts/users/', registrationInformation)
                    .then((response) => {
                        console.log('Successful')
                    })
                    .catch((error) => {
                        console.log('errors:', error.response)
                    })
                this.$auth.loginWith('local', {
                    data: registrationInformation
                })
            },
        },
    };
</script>

<style>
#register{
    background-color: rgb(10,196,131);
    height: 100vh;
}

#register-form{
    position: relative;
    top: 100px;
}
</style>