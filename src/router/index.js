import { createRouter, createWebHistory } from 'vue-router';
import HomeMain from '@/components/HomeMain.vue';
import RecipesHome from '@/components/recipes/RecipesHome.vue';
import HblHome from '@/components/hbl/HblHome.vue';
import RecipesMain from '@/components/recipes/RecipesMain.vue';
import HblMain from '@/components/hbl/HblMain.vue';
import HblLogin from '@/components/hbl/HblLogin.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeMain,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: RecipesMain,
      children: [
        {
          path: '',
          component: RecipesHome,
        },
      ],
    },
    {
      path: '/hbl',
      name: 'hbl',
      component: HblMain,
      children: [
        {
          path: '',
          component: HblHome,
        },
        {
          path: 'login',
          component: HblLogin,
        },
      ],
    },
  ],
});

export default router;
