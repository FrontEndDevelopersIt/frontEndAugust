//Libraries
import Vue from 'vue'  //main
import VueRouter from 'vue-router'
import store from './store' //Vuex
import axios from 'axios' //For routes
import VueAxios from 'vue-axios' //For routes
import Vuelidate from 'vuelidate' //For favorites
import css from 'vue-material/dist/vue-material.css' //for flex
//Libraries activation
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
//Import all components
import resetPassword from './components/resetPassword.vue'
import changePassword from './components/changePassword.vue'
import myfooter from './components/footer.vue' //footer is not avaliable
import settings from './components/settings.vue'
import mainPage from './components/mainPage.vue'
import singIn from './components/singIn.vue'
import filtration from './components/filtration.vue'
import favorite from './components/favorite.vue'
import dropDown from './components/dropDown.vue'
import vacancyDetails from './components/vacancyDetails.vue'
import myheader from './components/myheader.vue'
import registration from './components/registration.vue'
//Activate Vue-Router
const router = new VueRouter({
    mode: 'history', //without hash
    hashbang: false,
    routes: [
    { path: '/changePassword', component: changePassword},
    { path: '/resetPassword', component: resetPassword},
    { path: '/settings', component: settings},
    { path: '/singIn', component: singIn },
    { path: '/registration', component: registration},
    { path: '/vacancy/:id', name: 'vacancy', component: vacancyDetails },
    { path: '/:page/', name: 'page', component: mainPage },
    { path: '/1', alias: '/', component: mainPage},
    ],
  scrollBehavior (to, from, savedPosition) { //scroll always top after reload
  return { x: 0, y: 0 }
}
})
//Main vue-builder
new Vue({
  el: '#app',
  router: router,
    store,
    components: {myheader, myfooter}
})
