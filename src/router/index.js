import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import HeaderCv from '../components/HeaderCv.vue';
// import Experiences from '../views/Experiences.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/a-propos',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: () => import(/* webpackChunkName: "experiences" */ '../views/Experiences.vue')
  },
  {
    path: '/competences',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "competences" */ '../views/Skills.vue')
  },
  {
    path: '/formations',
    name: 'Trainings',
    component: () => import(/* webpackChunkName: "formations" */ '../views/Trainings.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
