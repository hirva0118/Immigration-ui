import About from "../Pages/About";
import Home from "../Pages/Home";
import Service from "../Pages/Service";

export const routes = [
  {
    path: "/",
    component: Home,
    isProtected: true,
  },
  {
    path: "/about",
    component: About,
    isProtected: true,
  },
  {
    path: "/service",
    component: Service,
    isProtected: true,
  },

];
