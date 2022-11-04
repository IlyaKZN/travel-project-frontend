import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainView from '../views/MainView.vue';
import SignUpView from '../views/SignUpView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: MainView },
  { path: '/signup', component: SignUpView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
