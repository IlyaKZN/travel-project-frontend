<template>
  <div class="container">
    <p class="transition-text">или</p>
    <a href="/" class="link-vk" aria-label="link to vk authorization" />
    <a href="/" class="link-google" aria-label="link to google authorization">
      <img
        class="google-logo"
        :src="`${require(`../../assets/google-logo.png`)}`"
        alt="Логотип Google"
      />
      Продолжить с Google
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlternativeAuth',
});
</script>

<style lang="sass" scoped>

.container
  width: 100%
  line-height: 0
  gap: 10px
  display: flex
  flex-direction: column
  gap: 10px

.transition-text
  margin-bottom: 10px
  font-size: 15px
  line-height: 18px
  text-transform: uppercase
  display: flex
  align-items: center
  gap: 42px
  &::before, &::after
    display: block
    content: ''
    border-top: 1px solid rgba(0, 0, 0, 0.25)
    width: 100%

.link
  text-decoration: none
  color: black
  padding: 0
  width: 100%
  height: 56px
  border: 1px solid rgba(0, 0, 0, 0.1)
  outline: none
  border-radius: 18px
  cursor: pointer

.link-vk
  @extend .link
  background-color: #376FFF
  background-image: url('../../assets/vk-logo-white.png')
  background-size: 40px
  background-repeat: no-repeat
  background-position: center

.link-google
  @extend .link
  box-sizing: border-box
  background-color: white
  display: flex
  align-items: center
  justify-content: center
  gap: 14px
  font-size: 15px
  line-height: 18px
  font-weight: 600
  font-family: 'Inter'

.google-logo
  height: 29px

</style>
