import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueParticlesBg from "particles-bg-vue";


Vue.config.productionTip = false
Vue.use(VueParticlesBg);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({  
  router,   
  render: h => h(App),
}).$mount('#app')
