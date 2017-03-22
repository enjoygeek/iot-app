import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import { routes } from './routes'

Vue.prototype.$http = axios
Vue.use(Router)

const router = new Router({
  routes
});

export const deviceBus = new Vue()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
