import Vue from 'vue'
import App from '@/App'
const store = require("./store");
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Lightbox from 'vue-easy-lightbox'

import router from '@/router/index'

Vue.config.productionTip = false
Vue.use(Lightbox)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  Lightbox,
  router
}).$mount('#app')
