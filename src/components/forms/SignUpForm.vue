<template>
  <form class="form" @submit.prevent="submitForm">
    <h1 class="title">Создайте учетную<br> запись в <span class="span">We</span>Travel!</h1>
    <div class="inputs-field">
      <BaseInput v-model="username" placeholder="Имя пользователя" name="username" type="text" />
      <BaseInput v-model="email" placeholder="Электронная почта" name="email" type="email" />
      <BaseInput v-model="password" placeholder="Пароль" name="password" type="password" />
      <BaseInput v-model="repeatedPassword" placeholder="Подтвердите пароль" name="repeatedPassword"
        type="password"
      />
      <BaseInput v-model="birthDate" placeholder="Дата рождения" name="test" type="date" />
      <BaseInput v-model="phoneNumber" placeholder="Номер телефона" name="test" type="text" />
    </div>
    <BaseButton type="submit">Продолжить</BaseButton>
    <div class="description-container">
      <p class="description">У вас уже есть учетная запись?</p>
      <router-link to="/signin" class="link">Войти</router-link>
    </div>
    <AlternativeAuth />
    <p class="agreement">Нажимая «Создать учетную запись», я подтверждаю,
      что ознакомился с положениями, указанными в статьях
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
  name: 'SignUpForm',
  data() {
    return {
      username: '',
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
      this.$store.commit('')
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
  color: $secondaryColor
  font-size: 15px
  line-height: 18px
  font-weight: 700

.agreement
  margin: 34px 0 0 0
  font-size: 9px
  line-height: 11px
  text-align: center

.terms-link
  color: $secondaryColor
  text-decoration: none
  font-weight: 600

</style>
