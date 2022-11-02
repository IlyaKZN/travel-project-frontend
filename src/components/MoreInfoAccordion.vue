<template>
  <section class="container">
    <h2 class="title">Узнайте больше</h2>
    <div class="accordion-container">
      <button class="accordion-button" @click="toggleStatePanel">О проекте</button>
      <div class="panel">
        <p class="panel-text">Я в своем познании настолько преисполнился, что я как будто бы уже
        сто триллионов миллиардов лет проживаю на триллионах и
        триллионах таких же планет, как эта Земля, мне этот мир абсолютно
        понятен, и я здесь ищу только одного - покоя, умиротворения и
        вот этой гармонии, от слияния с бесконечно вечным, от созерцания
        великого фрактального подобия и от вот этого замечательного всеединства
        существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно
        малое, хоть ввысь - бесконечное большое, понимаешь?</p>
      </div>
    </div>
    <div class="accordion-container">
      <button class="accordion-button" @click="toggleStatePanel">Как найти группу?</button>
      <div class="panel">
        <p class="panel-text">Хочу, бля, сказать этому ёбаному Обэме нахуй, блять:
          ебомбаный... Ёбаный ты козёл нахуй, черножопый, блять,
          был бы ты человек нахуй. Твою дочку ебут нахуй, где-нибудь, нахуй, блять, она, наверно,
           учится хуй знает где нахуй, бля,
          а дети гибнут на Украине нахуй, почему так нахуй?
          Почему дети должны... Они даже дети... Вечные дети нахуй,
           это наше будущее нахуй, и хули ты пиздишь ц-сука
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoreInfoAccordion',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleStatePanel(e: MouseEvent) {
      const targetNode: Node = e.target as Node;
      const panel: HTMLElement = targetNode.nextSibling as HTMLElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = '';
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    },
  },
});
</script>

<style lang="sass" scoped>

.container
  width: 100%
  margin-bottom: 80px

.title
  margin: 0 0 35px 0
  color: $primaryColor
  font-size: 50px
  line-height: 62px
  font-weight: 700

.accordion-button
  padding: 31px 0
  box-sizing: border-box
  width: 100%
  background-color: $primaryColor
  border: none
  cursor: pointer
  font-size: 25px
  line-height: 30px
  font-weight: 700
  color: white
  border-radius: 18px
  outline: none

.panel
  margin-top: -20px
  background-color: white
  max-height: 0
  overflow: hidden
  transition: max-height 0.2s ease-out
  border-bottom-left-radius: 18px
  border-bottom-right-radius: 18px

.panel-text
  margin: 100px 120px 75px
  font-size: 20px
  line-height: 24px
  font-weight: 300

.accordion-container
  margin-bottom: 47px
  filter: drop-shadow(0 1px 20px rgba(0, 0, 0, 0.1))

  &:last-of-type
    margin-bottom: 0

</style>
