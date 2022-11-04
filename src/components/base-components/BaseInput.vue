<template>
  <label class="label" :for="id">{{ placeholder }}</label>
  <input
    class="input"
    :type="type"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseInput',
  data() {
    return {
      id: '',
    };
  },
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<'text' | 'password' | 'email' | 'date'>,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  emits: ['update:modelValue'],
  mounted() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.id = this.componentId;
  },
  methods: {
    updateInput(e: Event) {
      if (e.target) {
        this.$emit('update:modelValue', (e.target as HTMLInputElement).value);
      }
    },
  },
});
</script>

<style lang="sass" scoped>

.label
  display: none

.input
  padding: 10px 20px
  box-sizing: border-box
  width: 100%
  height: 56px
  border-radius: 18px
  border: 1px solid rgba(0, 0, 0, 0.1)
  outline: none
  font-size: 18px
  font-family: 'Inter'

</style>
