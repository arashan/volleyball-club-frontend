import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'vue2-datepicker'
import VueGallery from 'vue-gallery';

import Vue from 'vue';
import store from './store/store';
import App from './App.vue';

const moment = require('moment');
require('moment/locale/ru');

Vue.use(require('vue-moment'), {
  moment
});
Vue.component('datetime-picker', DatePicker);
Vue.component('vue-gallery', VueGallery);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
