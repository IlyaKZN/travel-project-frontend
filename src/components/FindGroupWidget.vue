<template>
  <form class="form">
    <label for="#starting-point-input" class="label">Откуда</label>
    <input id="#starting-point-input" class="input" placeholder="Откуда" type="text" />
    <label for="#finishing-point-input" class="label">Куда</label>
    <input id="#finishing-point-input" class="input" placeholder="Куда" type="text" />
    <label for="#date-input" class="label">Когда</label>
    <input id="#date-input" class="input" placeholder="Когда" type="text" />
    <button class="button" type="submit">Найти группу</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FindGroupWidget',
});
</script>

<style lang="sass" scoped>

.form
  min-height: 187px
  background-color: rgba(0, 0, 0, 0.7)
  padding: 0 14px
  border-radius: 35px
  display: flex
  align-items: center
  justify-content: center
  gap: 3px
  font-family: "Inter"

.label
  display: none

.input
  padding: 20px 0 20px 15px
  box-sizing: border-box
  width: 300px
  font-size: 18px
  line-height: 22px
  color: green
  border: none
  outline: none
  font-family: "Inter"
  &:first-of-type
    border-radius: 20px 0px 0px 20px
  &:last-of-type
    border-radius: 0px 20px 20px 0px

.button
  margin-left: 20px
  background-color: $primaryColor
  color: white
  font-weight: 800
  font-size: 20px
  line-height: 24px
  padding: 20px 35px
  border: none
  border-radius: 20px
  cursor: pointer
  font-family: "Inter"
  letter-spacing: 0.8px

</style>
