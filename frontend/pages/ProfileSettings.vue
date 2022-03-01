<template>
  <div class="Profile Settings">

    <style>
      body {
        background-image: url('https://wallpaperaccess.com/full/1567665.png');
        background-attachment: fixed;
      }
      .field-name {
        margin-top: 20px;
        font-size: 20px;
        color: #B5B5BC;
      }
      .field-value {
        margin-bottom: 7px;
        font-size: 20px;
        color: #4A4A4A;
      }
      .inner {
        display: inline-block;
      }
    </style>

    <div class="box">
      <h1 class="title">Settings</h1>
    </div>

    <div class="box">
        <figure class="image is-128x128">
          <img class="is-rounded" src="https://pbs.twimg.com/profile_images/1249432648684109824/J0k1DN1T_400x400.jpg">
        </figure>
        <br>
        <b-button type="normal"><u>Change Profile Picture</u></b-button>
        <br><br>
        <b-button type="is-danger" outlined><u>Delete Profile Picture</u></b-button>
    </div>
    
    <form class="box">
      <h2 class="title">Info</h2>
      <div class="contents">
        <div>
          <h2 class="field-name">Username</h2>
          <h2 class="field-value">ladiesman217</h2>
          <b-button size="is-small">Edit</b-button>
        </div>
        <div>
          <h2 class="field-name">Name</h2>
          <h2 class="field-value">Cranjis McBasketball</h2>
          <b-button size="is-small">Edit</b-button>
        </div>
        <div>
          <h2 class="field-name">Email</h2>
          <h2 class="field-value">cranjis.mcbasketball@aol.com</h2>
          <b-button size="is-small">Edit</b-button>
        </div>
        <div>
          <h2 class="field-name">Phone Number</h2>
          <h2 class="field-value">1-555-555-5555</h2>
          <b-button size="is-small">Edit</b-button>
        </div>
      </div>
    </form>

    <form class="box">
      <h2 class="title is-spaced">Options</h2>
      <div class="contents">
        <b-button type="normal"><u>Change Password</u></b-button>
        <br><br>
        <b-button type="normal"><u>Set Up Two-Factor Authorization</u></b-button>
        <br><br>
        <b-button type="is-danger" outlined><u>Delete Account</u></b-button>
      </div>
    </form>

  </div>

</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  }
}
</script>