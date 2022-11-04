<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
  },
});
</script>

<style lang="sass" scoped>

.button
  padding: 15px 20px
  box-sizing: border-box
  background-color: $primaryColor
  width: 100%
  font-size: 20px
  line-height: 24px
  border: none
  color: white
  border-radius: 18px
  cursor: pointer
  font-weight: 600
  outline: none
  font-family: 'Inter'

</style>
