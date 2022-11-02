<template>
  <section class="container">
    <h2 class="title">Лента событий</h2>
    <p class="description">Собрали для Вас самые интересные истории за последнее время </p>
    <Carousel :items-to-show="3">
      <Slide v-for="(slide, index) in slidesData" :key="index">
        <div class="carousel-item">
          <img
            class="carousel-item-link"
            src="../assets/testImage.jpg"
            alt="image"
            @click="followLink(slide.link)"
            @keypress="followLink(slide.link)"
          />
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
  name: 'NewsFeed',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slidesData: [
        {
          image: 'test',
          link: '/test',
        },
        {
          image: 'test',
          link: '/test',
        },
        {
          image: 'test',
          link: '/test',
        },
        {
          image: 'test',
          link: '/test',
        },
        {
          image: 'test',
          link: '/test',
        },
        {
          image: 'test',
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
.container
  margin-bottom: 102px
  width: 100%

.title
  margin: 0 0 8px 0
  color: $primaryColor
  font-size: 50px
  line-height: 62px
  font-weight: 700

.description
  margin: 0 0 47px 0
  font-size: 20px
  line-height: 24px
  font-weight: 300

.carousel
  width: 100%

.carousel-item
  width: 100%
  border-radius: 20px
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)

.carousel__slide
  width: 100%
  margin-right: 14px

.carousel__prev,
.carousel__next
  box-sizing: content-box
  border: 5px solid white

.carousel-item-link
  display: block
  height: 428px
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
