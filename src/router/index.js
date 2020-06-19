import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";


Vue.use(Router);
export default new Router({
  mode: "history",
  linkExactActiveClass: "vue-school-active-class",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: true
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
      path:"/details/:slug",
      name:"DestinationDetails",
      props: true,
      component:()=>import(/*webpackChunkname: "DestinationDetails"*/ "../views/DestinationDetails")
      
    }
  ]
});