<template>
  <div class="site">
    <div id="header">
      <navbarHeader />
    </div>
    <div id="content">
      <leftSideBar id="sideBar" />
      <Nuxt id="mainContent" />
    </div>
  </div>
</template>

<script>
import navbarHeader from '../components/Header.vue'
import leftSideBar from '../components/LeftSideBar.vue'

export default {
  name: 'Layout',
  components: {
    navbarHeader,
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
#header,
#footer,
#content {
  float: left;
  width: 100vw;
  min-height: 20px;
}

#sideBar {
  float: left;
  width: 7.6vw;
}

#mainContent {
  float: left;
  width: 92vw;
  background-color: #ecf0f5;
  height: 100vh;
}

</style>

