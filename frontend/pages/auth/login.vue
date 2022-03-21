<template>
<div id="login">
    <div id="login-form" class="columns is-mobile is-centered" margin-top>
        <div class="column is-half">
            <div class="container">
            <form class="box has-background-grey-light">
                <h1 class="title"> Login </h1>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                    <input class="input" type="email" placeholder="john@doe.com" v-model="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                    <input class="input" type="password" placeholder="********" v-model="password">
                    </div>
                </div>
                <button class="button is-primary" v-on:click="login()">Sign in</button>
            </form>
            </div>
        </div>
    </div>
</div>
</template>

<style>
    #login{
        background-color: rgb(10,196,131);
        height: 100vh;
    }

    #login-form{
        position: relative;
        top: 20vh;
    }
</style>


<script>

    export default {
        name: 'Login',
        data: function() {
            return {

            }
        },
        methods: {
            login() {
                console.log(this.email)
                console.log(this.password)
            }
        }
    }

</script>