<template>
  <section class="tourism-types-container">
    <h2 class="tourism-types-title">Виды туризма</h2>
    <Carousel :items-to-show="3.7">
      <Slide v-for="slide in slidesData" :key="slide.name">
        <div class="carousel-item">
          <img
            class="carousel-item-link"
            src="../assets/testImage.jpg"
            alt="image"
            @click="followLink(slide.link)"
            @keypress="followLink(slide.link)"
          />
          <p class="carousel-item-name">{{ slide.name }}</p>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide,
} from 'vue3-carousel';

export default defineComponent({
  name: 'TourismTypesCarousel',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slidesData: [
        {
          image: '../../public/WeTravel.svg',
          name: 'test1',
          link: '/test',
        },
        {
          image: '../assets/testImage.jpg',
          name: 'test2',
          link: '/test',
        },
        {
          image: '../assets/testImage.jpg',
          name: 'test3',
          link: '/test',
        },
        {
          image: '../assets/testImage.jpg',
          name: 'test4',
          link: '/test',
        },
        {
          image: '../assets/testImage.jpg',
          name: 'test5',
          link: '/test',
        },
        {
          image: '../assets/testImage.jpg',
          name: 'test6',
          link: '/test',
        },
      ],
    };
  },
  methods: {
    followLink(link: string) {
      this.$router.push(link);
    },
  },
});
</script>

<style lang="sass" scoped>

.tourism-types-title
  margin: 60px 0 30px 15px
  color: $primaryColor
  font-size: 50px
  line-height: 62px
  font-weight: 700

.tourism-types-container
  margin-bottom: 88px
  width: 100%

.carousel
  width: 100%

.carousel-item
  width: 100%
  border-radius: 20px

.carousel__slide
  width: 100%
  margin-right: 14px

.carousel__prev,
.carousel__next
  box-sizing: content-box
  border: 5px solid white

.carousel-item-link
  display: block
  height: 266px
  width: 100%
  background-color: grey
  background-size: cover
  background-position: center
  border-radius: 20px
  cursor: pointer
  object-fit: cover

.carousel-item-name
  text-align: start
  font-size: 18px
  line-height: 22px

</style>
