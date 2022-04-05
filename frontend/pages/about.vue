<!-- cd /mnt/c/users/maxwe/OneDrive/Documents/BetterShot-master/frontend -->
<!-- npm run dev -->

<template>
  <div class="Profile Settings">

    <style>
      body {
        background-image: url('https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png');
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
        margin-bottom: 10px; 
      }
      .box-background {
        background-color: #1f2330 ;
      }
    </style>

    <div class="box">
      <h1 class="title">About BetterShot</h1>
    </div>

    <div class="box">
      <figure class="image is-128x128">
        <img src="https://cdn.discordapp.com/attachments/930636851667140708/930637064666505256/unknown.png">
      </figure>
    </div>

    <div class="box">
      <p> 
        There are a lot of tools that allow users to seamlessly screenshot/record their screens and share that content with their peers such as Lightshot, Gyazo, and ShareX; 
        however, these tools can sometimes be complicated to set up with a custom domain (ShareX), the software simply can't record your screen (Lightshot), 
        or the snipping abilities are limited (Gyazo). Of course, there'll never be one single application that checks off all of the boxes, but because this project is FOSS, 
        users themselves can add their desired features at any point in time-- and even bring it up to the community so it's pushed to everyone's devices. 
        This project aims to be an open-source version of ShareX, Lightshot, Gyazo, Streamable, and NVIDIA's GeForce Experience screen capturing tool.
      </p>
    </div>

    <div class="box">
      <p>
        This project is led by RPI students Nishant Srivastava, along with members Vincent Chen and Maxwell Tang. BetterShot is an RCOS project.
      </p>
    </div>

  </div>

</template>

<script>
export default {
  
}
</script>