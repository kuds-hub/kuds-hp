<template>
  <div class="msg">
    <h1>Welcome to KUDs!!</h1>
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls
        indicators
        img-width="1024"
        img-height="480"
        :interval="5000"
      >
        <b-carousel-slide
          caption="First slide"
          img-alt="failed file leading."
          :img-src="require('../../assets/topPagePhotos/test.jpg')"
        ></b-carousel-slide>
        <!-- TODO: webpackを利用し、vue-loaderの設定を変更することができれば、上記のような書き方をすせずとも相対パスから読み込むことができるらしい-->
        <b-carousel-slide
          caption="Second Slide"
          img-alt="failed file leading."
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-alt="failed file leading."
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
        <!-- <b-carousel-slide
          caption="Fourth Slide"
          img-alt="failed file leading."
          :img-src="require('../../assets/topPagePhotos/shinya.jpg')">
        </b-carousel-slide> -->
      </b-carousel>
    </div>
  </div>
</template>

<script lang="ts" src="./TopPage.ts"></script>
<style scoped src="./TopPage.css"></style>
