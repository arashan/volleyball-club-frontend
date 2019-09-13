import Vue from 'vue';
import App from './App.vue';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'vue2-datepicker'
import VueGallery from 'vue-gallery';

const moment = require('moment');
require('moment/locale/ru');

Vue.use(require('vue-moment'), {
  moment
});
Vue.component('datetime-picker', DatePicker);
Vue.component('vue-gallery', VueGallery);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
