<template>
  <div class="site">
    <navbarHeader />
    <leftSideBar id="sideBar" />
    <Nuxt id="mainContent" />
    <bottomFooter id="footer" />
  </div>
</template>

<script>
import navbarHeader from '../components/Header.vue'
import bottomFooter from '../components/Footer.vue'
import leftSideBar from '../components/LeftSideBar.vue'

export default {
  name: 'Layout',
  components: {
    navbarHeader,
    bottomFooter,
    leftSideBar,
  },
  data() {
    return {
      open: true,
      fullheight: true,
    }
  },
}
</script>

<style>
.site {
    position: relative;
  display: flex;
  height: 100vh;
  flex-direction: column;
}

#sideBar {
}

#mainContent {
  flex: 1;
  position: absolute;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>

