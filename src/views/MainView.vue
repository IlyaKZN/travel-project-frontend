<template>
  <main class="page">
    <section class="find-group-preview">
      <h1 class="find-group-title">Новые люди - новые места</h1>
      <p class="find-group-description">легкий способ путешествовать и<br>
        заводить новые знакомства</p>
      <FindGroupWidget />
      <router-link class="reference-link" to="/">Как это работает?</router-link>
    </section>
    <div class="page-layout">
      <section class="tourism-types-container">
        <h2 class="tourism-types-title">Виды туризма</h2>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FindGroupWidget from '@/components/FindGroupWidget.vue';

export default defineComponent({
  name: 'MainView',
  components: {
    FindGroupWidget,
  },
});
</script>

<style lang="sass" scoped>

.find-group-preview
  height: calc( 100vh - 80px )
  background-image: url('../assets/MainPageGradient.svg')
  background-size: cover
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

.find-group-title
  margin: 0 0 20px
  color: white
  text-transform: uppercase
  font-weight: 700
  font-size: 55px
  line-height: 68px

.find-group-description
  color: white
  font-size: 20px
  line-height: 24px
  font-weight: 400
  text-align: center
  margin-bottom: 80px

.reference-link
  margin-top: 23px
  color: white
  font-weight: 400
  font-size: 18px
  line-height: 22px

.tourism-types-title
  color: $primaryColor
  font-size: 50px
  line-height: 62px
  font-weight: 700

.page-layout
  display: flex
  flex-direction: column
  align-items: center

</style>
