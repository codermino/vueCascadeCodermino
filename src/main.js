import Vue from 'vue'
import App from './App.vue'
import { Select, Option, Input, DatePicker } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(DatePicker)

new Vue({
  render: h => h(App),
}).$mount('#app')
