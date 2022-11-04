<template>
  <form class="form" @submit.prevent="submitForm">
    <h1 class="title">Добро пожаловать<br>в <span class="span">We</span>Travel</h1>
    <div class="inputs-field">
      <BaseInput
        v-model="email"
        placeholder="Электронная почта/ Номер телефона"
        name="email"
        type="email"
      />
      <BaseInput v-model="password" placeholder="Пароль" name="password" type="password" />
    </div>
    <div class="checkbox-container">
      <input class="checkbox" type="checkbox" id="remember" name="remember" />
      <label for="remember">Запомнить меня</label>
      <router-link to="/" class="forgot-password-link">Забыли пароль?</router-link>
    </div>
    <BaseButton type="submit">Продолжить</BaseButton>
    <div class="description-container">
      <p class="description">Новый пользователь?</p>
      <router-link to="/signin" class="signup-link">Зарегистрироваться</router-link>
    </div>
    <AlternativeAuth />
    <p class="agreement">Авторизуясь, вы соглашаетесь с
      <router-link to="/" class="terms-link">Лицензионным соглашением</router-link> и
      <router-link to="/" class="terms-link">Политикой конфиденциальности</router-link>.</p>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseInput from '../base-components/BaseInput.vue';
import BaseButton from '../base-components/BaseButton.vue';
import AlternativeAuth from './AlternativeAuth.vue';

export default defineComponent({
  name: 'SignInForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repeatedPassword: '',
      birthDate: '',
      phoneNumber: '',
    };
  },
  components: {
    BaseInput,
    BaseButton,
    AlternativeAuth,
  },
  methods: {
    submitForm() {
      console.log('Форма отправлена');
    },
  },
});
</script>

<style lang="sass" scoped>

.form
  box-sizing: border-box
  padding: 50px 52px 70px
  background-color: white
  max-width: 500px
  width: 100%
  border-radius: 40px
  display: flex
  flex-direction: column
  align-items: center

.title
  margin: 0 0 67px
  font-size: 32px
  line-height: 38px
  font-weight: 600
  text-align: center

.span
  color: #F0953D
  font-style: italic
  font-weight: 400

.inputs-field
  margin-bottom: 25px
  width: 100%
  display: flex
  flex-direction: column
  gap: 10px

.description
  font-size: 15px
  line-height: 18px
  font-weight: 300
  margin: 0

.description-container
  margin: 20px 0
  display: flex
  align-items: center
  justify-content: center
  gap: 3px

.link
  margin-left: 2px
  text-decoration: none
  font-size: 15px
  line-height: 18px
  font-weight: 700

.signup-link
  @extend .link
  color: $secondaryColor

.forgot-password-link
  @extend .link
  color: $primaryColor

.agreement
  margin: 25px 0 0 0
  font-size: 9px
  line-height: 11px
  text-align: center

.terms-link
  color: $secondaryColor
  text-decoration: none
  font-weight: 600

.checkbox
  position: absolute
  z-index: -1
  opacity: 0

.checkbox+label
  display: inline-flex
  align-items: center
  user-select: none
  font-size: 15px
  line-height: 18px

.checkbox+label::before
  content: ''
  display: inline-block
  width: 1em
  height: 1em
  flex-shrink: 0
  flex-grow: 0
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 0.25em
  margin-right: 0.5em
  cursor: pointer

.checkbox:checked+label::before
  background-color: $primaryColor

.checkbox-container
  width: 100%
  display: flex
  margin-bottom: 24px
  justify-content: space-between

</style>
