export default {
    namespaced: true,
    state: {
        showModal: false
    },
    mutations: {
        // мутации, меняющие состояния этого модуля, не вызывать снаружи
        toggleModal(state, isShow) { state.showModal = isShow; }
    },
    actions: {
        // действия, которые следует вызывать извне для изменения состояний
        toggleModal(context, isShow) { this.commit('root/toggleModal', isShow); }
    },
    getters: {}
};
