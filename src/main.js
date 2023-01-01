import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './assets/css/index.styl'
import './plugins/element.js'
import store from './lib/store/index'

Vue.config.productionTip = false;
//

const log = console.log
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
