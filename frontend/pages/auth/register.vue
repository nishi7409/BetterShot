<template>
<div id="login">

            <div id="login-form" class="columns is-mobile is-centered" margin-top>
                <div class="column is-half">
                    <div class="container">
                    <form class="box has-background-grey-light">
                        <h1 class="title"> Register </h1>
                        <div class="field">
                            <label class="label">First Name</label>
                            <div class="control">
                            <input class="input" type="text" placeholder="John">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control">
                            <input class="input" type="text" placeholder="Doe">
                            </div>
                        </div>
                        <div class="field">
                            <label class="label">Email</label>
                            <div class="control">
                            <input class="input" type="email" placeholder="e.g. vincent@example.com">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                            <input class="input" type="password" placeholder="********">
                            </div>
                        </div>

                        <button class="button is-primary">Sign Up</button>
                    </form>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
export default {
   name: 'Login',
   data: function() {
      return {
      }
   },
   methods: {
      // dispatches login handler with username & password parameters
      login() {
         store.dispatch(type.login, {"username": this.username, "password": this.password})
      }
   },
   computed: {
      // token key for local storage
      ...mapState({
         sessionKey: 'token',
      })
   }
};
</script>

<style>
#login{
    background-color: rgb(10,196,131);
    height: 100vh;
}

#login-form{
    position: relative;
    top: 100px;
}
</style>