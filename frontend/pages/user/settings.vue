<template>
  <div class="userSettings">
    <div class="box" id="userSettings">
      <h1 class="title">Settings</h1>
      <figure class="image is-128x128">
        <img
          class="is-rounded"
          src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg"
        />
      </figure>
      <br />
      <b-button type="normal"><u>Change Profile Picture</u></b-button>
      <br /><br />
      <b-button type="is-danger" outlined
        ><u>Delete Profile Picture</u></b-button
      >
      <br />
      <br />

      <form class="box">
        <h2 class="title">User Information</h2>
        <div class="contents">
          <div>
            <h2 class="field-name has-text-weight-bold">Username</h2>
            <h2 class="field-value">ladiesman217</h2>
          </div>
          <br />
          <div>
            <h2 class="field-name has-text-weight-bold">Email</h2>
            <h2 class="field-value">cranjis.mcbasketball@aol.com</h2>
            <b-button size="is-small">Edit</b-button>
          </div>
          <br />
          <div>
            <h2 class="field-name has-text-weight-bold">Phone Number</h2>
            <h2 class="field-value">1-555-555-5555</h2>
            <b-button size="is-small">Edit</b-button>
          </div>
        </div>
      </form>

      <form class="box">
        <h2 class="title is-spaced">Options</h2>
        <div class="contents">
          <b-button type="normal"><u>Change Password</u></b-button>
          <br /><br />
          <b-button type="normal"
            ><u>Set Up Two-Factor Authorization</u></b-button
          >
          <br /><br />
          <b-button type="is-danger" outlined><u>Delete Account</u></b-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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