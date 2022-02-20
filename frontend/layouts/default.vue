<template>
    <div>
        <navbarHeader/>
        <Nuxt />
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
