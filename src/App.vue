<template>
  <TheHeader />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/TheHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
  },
});

</script>

<style lang="sass">
@import url(./vendor/fonts/index.css)
body
  margin: 0
  font-family: 'Inter'

</style>
