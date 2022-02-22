<template>
    <div class="site">
        <navbarHeader/>
        <Nuxt class="mainContent" />
        <bottomFooter/>
    </div>
</template>

<script>
import navbarHeader from '../components/Header.vue'
import bottomFooter from '../components/Footer.vue'

export default {
    name: 'Layout',
    components: {
        navbarHeader,
        bottomFooter,
    },
    data () {
        return {

        }
    }
}
</script>

<style>
    .site {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }

    .mainContent {
        flex: 1;
    }

</style>