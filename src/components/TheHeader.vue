<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo" />
      <nav class="navigation">
        <ul class="navigation-list">
          <li class="navigation-item">
            <router-link to="/signin" class="signin-link">Вход</router-link>
          </li>
          <li class="navigation-item">
            <router-link to="/signup" class="signup-link">Регистрация</router-link>
          </li>
        </ul>
      </nav>
      <button class="lang-button">ru</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
});
</script>

<style lang="sass" scoped>

.header
  height: 80px
  width: 100%
  background: $primaryColor

.header-content
  margin: 0 auto
  max-width: 1140px
  width: 100%
  height: 100%
  display: flex
  align-items: center

.logo
  height: 62px
  width: 222px
  display: block
  background-image: url('../assets/WeTravel.svg')
  background-repeat: no-repeat
  background-size: contain
  background-position: center

.signin-link
  color: white
  text-decoration: none
  font-size: 16px
  line-height: 20px
  font-weight: 700

.signup-link
  color: $primaryColor
  background-color: white
  text-decoration: none
  padding: 17px 41px
  border-radius: 18px
  font-size: 16px
  line-height: 20px
  font-weight: 700

.navigation
  margin-left: auto
  margin-right: 40px

.navigation-list
  display: flex
  list-style-type: none
  gap: 48px

.lang-button
  border: none
  background: none
  font-size: 15px
  line-height: 18px
  font-weight: 400
  color: white
  text-transform: uppercase
  cursor: pointer

</style>
