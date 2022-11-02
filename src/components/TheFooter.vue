<template>
  <footer class="footer">
    <div class="social-networks-links-container">
      <a href="https://vk.com" class="social-network-link" aria-label="link to vk.com"/>
      <a href="https://web.telegram.org/" class="social-network-link" aria-label="link to web.telegram.org"/>
    </div>
    <div class="info-container">
      <router-link class="info-link" to="/">о нас</router-link>
      <router-link class="info-link" to="/">конфеденциальность</router-link>
      <router-link class="info-link" to="/">поддержка</router-link>
      <router-link class="info-link" to="/">правила</router-link>
    </div>
    <p class="signature">© 2022 WeTravel — путешествуем вместе </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheFooter',
});
</script>

<style lang="sass">

.footer
  margin-bottom: 80px
  width: 100%
  display: flex
  flex-direction: column
  align-items: center

.social-networks-links-container
  display: flex
  gap: 55px
  margin-bottom: 46px

.social-network-link
  display: block
  height: 55px
  width: 55px
  background-image: url('../assets/vk-logo.svg')

.info-container
  margin-bottom: 42px
  display: flex
  gap: 70px

.info-link
  text-decoration: none
  color: black
  font-size: 18px
  line-height: 22px
  font-weight: 400

.signature
  font-weight: 300
  font-size: 10px
  line-height: 12px

</style>
