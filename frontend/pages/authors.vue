<!-- cd /mnt/c/users/maxwe/OneDrive/Documents/BetterShot-master/frontend -->
<!-- npm run dev -->

<template>
  <div class="Profile Settings">

    <style>
      body {
        background-image: url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700320670.jpg');
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
      .tab { 
        margin-bottom: 20px; 
      }
      .box-background {
        background-color: #1f2330 ;
      }
    </style>

    <div class="box">
      <h1 class="title">About Us</h1>
    </div>

    <div class="box">
      <figure class="image is-128x128">
        <img src="https://cdn.discordapp.com/avatars/114081086065213443/43fe6155b0cbb00ee4bd89323a668d2c.webp?size=128">
      </figure>
      <div class="tab"></div>
      <h1 class="title"> 
        Nishant Srivastava - Project Lead
      </h1>
      <p>
        Nishant is an RPI junior currently majoring in computer science. He loves Chow Chows.
      </p>
      <p>
        Email: srivan@rpi.edu
      </p>
      <p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/-nishants/">You can check his LinkedIn out here!</a>
      </p>
    </div>

    <div class="box">
      <figure class="image is-128x128">
        <img src="https://cdn.discordapp.com/avatars/172475977450913792/09a67be3396579a98a20a59b6eabd3e9.webp?size=240">
      </figure>
      <div class="tab"></div>
      <h1 class = "title"> 
        Vincent Chen - Software Developer
      </h1>
      <p>
        Vincent is an RPI junior currently majoring in computer science. He is a cool guy.
      </p>
      <p>
        Email: chenv3@rpi.edu
      </p>
    </div>

    <div class="box">
      <figure class="image is-128x128">
        <img src="https://cdn.discordapp.com/avatars/249997994831773706/9ba2c597ae46aec72c1f810e373597a9.webp?size=128">
      </figure>
      <div class="tab"></div>
      <h1 class = "title"> 
        Maxwell Tang - Software Developer
      </h1>
      <p>
        Maxwell is an RPI junior currently majoring in computer science. He is the captain of the RPI Breakdance Club and juggles.
      </p>
      <p>
        Email: tangm2@rpi.edu
      </p>
    </div>

  </div>

</template>

<script>
export default {
  
}
</script>