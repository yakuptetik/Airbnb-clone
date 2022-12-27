
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/advert/:id',
      name: 'Advert',
      component: () => import('../views/AdvertView.vue'),
    },
    {
      path: '/trips',
      name: 'Trips',
      component: () => import('../views/TripsView.vue'),
    },
    {
      path: '/wishlists',
      name: 'Wishlists',
      component: () => import('../views/WishlistsView.vue'),
    },
    {
      path: '/collections',
      name: 'Collections',
      component: () => import('../views/CollectionsView.vue'),
    },

       
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  export default router;