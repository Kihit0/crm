import Dashboard from "@pages/children/Dashboard.vue";
import Login from "@pages/Login.vue";
import Register from "@pages/Register.vue";
import Main from "@pages/Main.vue";
import News from "@pages/children/News.vue";

import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    name: "Login",
    path: "/login",
    component: Login,
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Main",
    path: "/",
    component: Main,
    redirect: "/dashboard",
    children: [
      {
        name: "Dashboard",
        path: "/dashboard",
        component: Dashboard,
      },
      {
        name: "News",
        path: "/news",
        component: News,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
