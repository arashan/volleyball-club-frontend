import Vue from 'vue';
import Vuex from 'vuex';
// объявляем модули от vuex-store
import root from './modules/root';

Vue.use(Vuex);
export default new Vuex.Store({
    // подключаем модули от vuex-store
    modules: {
        root
    }
});