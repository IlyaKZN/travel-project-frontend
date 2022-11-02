<template>
  <div class="card">
    <h3 class="name">{{ cardData.name }}</h3>
    <p class="description">{{ cardData.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ICard } from '../types/components';

export default defineComponent({
  name: 'TravelDestinationCard',
  props: {
    cardData: {
      type: Object as PropType<ICard>,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>

.card
  display: flex
  flex-direction: column
  justify-content: flex-end
  padding: 30px 40px
  background-image: url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80)
  background-size: cover
  border-radius: 35px
  cursor: pointer
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25)

.name
  margin: 0 0 8px 0
  font-size: 35px
  line-height: 43px
  color: white
  font-weight: 600

.description
  margin: 0
  font-size: 15px
  font-family: 18px
  color: white
  font-weight: 400

</style>
