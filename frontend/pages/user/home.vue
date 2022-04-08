<template>
  <div class="homeView">
    <div class="tile is-ancestor">
      <div class="tile is-vertical p-6 is-12">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-success">
              <p class="title is-size-1 has-text-weight-bold">Premium User</p>
              <p class="subtitle is-size-5">
                Thank you so much for subscribing to BetterShot's premium plan!
              </p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-info">
              <p class="title is-size-1 has-text-weight-bold">Image(s)</p>
              <p class="subtitle is-size-5">10</p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning">
              <p class="title is-size-1 has-text-weight-bold">Video(s)</p>
              <p class="subtitle is-size-5">15</p>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title is-size-1 has-text-weight-bold">Miscellaneous</p>
              <p class="subtitle is-size-5">40</p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title is-size-1 has-text-weight-bold">User Activity</p>
            <p class="subtitle">Theoretically, there would be a graph here, but because we're utilizing Vue 3, Nuxt hasn't come out with the capability of integrating some of the older plugins into their <i>optimized</i> framework</p>
            <div class="content"></div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Bar from "vue-chartjs"
export default {
  components: {
    // Bar,
  },
  layout: 'dashboard',
  data() {
    return {
      isActive: true,
    }
  },
}
</script>

<style>
body {
  background-color: #ecf0f5;
}
#userSettings {
  height: 100vh;
}
</style>