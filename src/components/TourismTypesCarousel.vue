<template>
  <section class="tourism-types-container">
    <h2 class="tourism-types-title">Виды туризма</h2>
    <Carousel :items-to-show="3.7">
      <Slide v-for="slide in slidesData" :key="slide.name">
        <div class="carousel-item">
          <img
            class="carousel-item-link"
            :src="getImgUrl(slide.image)"
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
          image: 'Kayaking.png',
          name: 'Каякинг',
          link: '/test',
        },
        {
          image: 'Mountain.png',
          name: 'Горный',
          link: '/test',
        },
        {
          image: 'OnFoot.png',
          name: 'Пеший',
          link: '/test',
        },
        {
          image: 'Cycling.png',
          name: 'Велотуризм',
          link: '/test',
        },
      ],
    };
  },
  methods: {
    followLink(link: string) {
      this.$router.push(link);
    },
    getImgUrl(imageName: string) {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      return require(`../assets/tourism-types/${imageName}`);
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
