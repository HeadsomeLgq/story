<template>
  <div class="carousel">
    <mu-carousel transition="slide" style=" height:150px" interval="4000" hide-controls>
      <mu-carousel-item>
        <img :src="carouselImg1">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg2">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg3">
      </mu-carousel-item>
      <mu-carousel-item>
        <img :src="carouselImg4">
      </mu-carousel-item>
    </mu-carousel>
  </div>
</template>

<script>
  import carouselImg1 from '../../assets/images/a.jpg';
  import carouselImg2 from '../../assets/images/b.jpg';
  import carouselImg3 from '../../assets/images/c.jpg';
  import carouselImg4 from '../../assets/images/d.jpg';
    export default {
      name: 'Carousel',
      data () {
        return {
          carouselImg1,
          carouselImg2,
          carouselImg3,
          carouselImg4,
        }
      }
    }
</script>
<style scoped>
  .carousel {
    width: 100%;
    height: 150px;
  }
  img {
    width: 100%;
    height: 150px;
  }
</style>
