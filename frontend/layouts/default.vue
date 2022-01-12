<template>
    <div>
        <b-navbar class="is-dark">
            <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="https://media.discordapp.net/attachments/930636851667140708/930637024573141074/unknown.png?width=2303&height=416"
                        alt="BetterShot"
                    >
                </b-navbar-item>
            </template>
            <!-- <template #start>
                <b-navbar-item href="#">
                    Home
                </b-navbar-item>
                <b-navbar-item href="#">
                    Documentation
                </b-navbar-item>
            </template> -->

            <template #end>
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-danger" href="/register">
                            <strong>Register</strong>
                        </a>
                        <a class="button is-light" href="/login">
                            Log in
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <Nuxt />
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    }
}
</script>
