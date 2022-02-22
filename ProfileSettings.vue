<template>
  <html>
    <head>
      <body style="background-color:#008B8B;">
      <style>
        #settings-title-box {
          background-color: #FBFBFB;
          height: 60px;
          width: 300px;
          text-align: left;
          border: 1px black;

          position: absolute;
          left: 200px;
          top: 10px;

          padding: 10px;
          font-family: "Roboto";
          font-weight: 400;
        }
        #user-profile-pic {
          position: relative; 
          left: 5px;
          top: 70px;
        }
        #settings-box1 {
          background-color: #FBFBFB;
          height: 260px;
          width: 300px;
          text-align: left;
          border: 1px black;

          position: absolute;
          left: 200px;
          top: 110px;

          padding: 10px;
          font-family: "Roboto";
          font-weight: 400;
        }
        #box-title {
          font-size: 30px;
          opacity: 0.72;
        }
        #box-title2 {
          font-size: 20px;
          opacity: 0.28;
        }
        img {
          border-radius: 50%;
        }
        #settings-box2 {
          background-color: #FBFBFB;
          height: 230px;
          width: 300px;
          text-align: left;
          border: 1px black;

          position: absolute;
          left: 200px;
          top: 410px;

          padding: 10px;
          font-family: "Roboto";
          font-weight: 400;
        }
      </style>
    </head>

      <div id="settings-title-box">
        <h1>Settings</h1>
      </div>

      <div id="user-profile-pic">
        <picture>
          <img src="random person.jpg" 
            alt="example-pfp" 
            width="175" 
            height="175">
        </picture>
      </div>

      <div id="settings-box1">
        <div id="box-title">
          <p>Info</p>
        </div>
        <div id="#box-title2">
          <p>Username</p>
          <p>Name</p>
          <p>Email</p>
          <p>Phone Number</p>
        </div>
      </div>

      <div id="settings-box2">
        <div id="box-title">
          <p>Options</p>
        </div>
        <div id="#box-title2">
          <p><u>Change Password</u></p>
          <p><u><u>Set up Two-Factor Authorization</u></p>
          <p style="color:red;"><u>Delete Account</u></p>
        </div>
      </div>

  </html>
</template>

<script>
  export default {
    name: 'Home',
    data: function () (
      return {
          count: 0
      }
    ),
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
}
</script>