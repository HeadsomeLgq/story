// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Muse from './muse-ui.config' //引入muse-ui插件
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(Muse)
Vue.use(VueAxios,axios)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
