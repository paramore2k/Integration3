import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import router from './router'
import Vuelidate from 'vuelidate'
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
