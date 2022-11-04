import { createApp } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.mixin({
  data() {
    return {
      componentId: uuidv4(),
    };
  },
});

app.use(store).use(router).mount('#app');
