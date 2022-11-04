import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainView from '../views/MainView.vue';
import SignUpView from '../views/SignUpView.vue';
import SignInView from '../views/SignInView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: MainView },
  { path: '/signup', component: SignUpView },
  { path: '/signin', component: SignInView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
