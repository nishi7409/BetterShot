<template>
  <div id="sideBar" class="sidebar-page">
    <b-sidebar
      position="static"
      type="is-light"
      :fullheight="fullheight"
      v-model="open"
    >
      <div class="p-1" id="sideBar">
        <b-menu id="sideBarContent">
          <b-menu-list label="">
            <b-menu-item icon="information-outline" label="Home" href="/user/home"></b-menu-item>
            <b-menu-item expanded icon="trending-up" label="Trending">
              <b-menu-item icon="image" label="Images" href="/user/trending/images"></b-menu-item>
              <b-menu-item icon="video" label="Videos" href="/user/trending/videos"></b-menu-item>
              <b-menu-item
                icon="help-circle"
                label="Miscellaneous"
                disabled
              ></b-menu-item>
            </b-menu-item>
            <b-menu-item icon="account" label="Personal Data" expanded>
              <b-menu-item icon="image" label="Images" href="/user/personal/images"></b-menu-item>
              <b-menu-item icon="video" label="Videos" href="/user/personal/videos"></b-menu-item>
              <b-menu-item
                icon="help-circle"
                label="Miscellaneous"
                disabled
              ></b-menu-item>
            </b-menu-item>
          </b-menu-list>
          <b-menu-list>
            <b-menu-item label="Upload" icon="upload" href="/user/upload"></b-menu-item>
          </b-menu-list>
          <b-menu-list label="Account">
            <b-menu-item icon="account-cog" label="Settings" href="/user/settings"></b-menu-item>
            <b-menu-item icon="logout" label="Logout" href="/logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      fullheight: true,
    }
  },
}
</script>

<style>
#sideBar {
  height: 100vh;
  width: 6.8vw;
}

#sideBarContent {
  position: absolute;
  top: 5vh;
}

</style>