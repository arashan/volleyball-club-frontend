import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'vue2-datepicker'
import VueGallery from 'vue-gallery';
import PhoneMaskInput from  "vue-phone-mask-input";

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
Vue.component('phone-mask-input', PhoneMaskInput);

Vue.config.productionTip = false;

Vue.directive("filter", {
  bind: function(el, binding) {
    function inputHandler (e) {
      var ch = String.fromCharCode(e.which);
      var re = new RegExp(binding.value);
      if (!ch.match(re)) {
        e.preventDefault();
      }
    }
    el.addEventListener("keypress", inputHandler);
  },
  unbind: function(el) {
    el.removeEventListener("keypress", this.inputHandler);
  },
  inputHandler: null
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
