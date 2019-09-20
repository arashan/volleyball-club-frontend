export default {
    namespaced: true,
    state: {
        showModal: false,
        showRemindPassModal:false,
        showAddNewsModal: false
    },
    mutations: {
        // мутации, меняющие состояния этого модуля, не вызывать снаружи
        toggleModal(state, isShow) { state.showModal = isShow; },
        toggleRemindPassModal(state, isShow) { state.showRemindPassModal = isShow; },
        toggleAddNewsModal(state, isShow) { state.showAddNewsModal = isShow; }
    },
    actions: {
        // действия, которые следует вызывать извне для изменения состояний
        toggleModal(context, isShow) { this.commit('root/toggleModal', isShow); },
        toggleRemindPassModal(context, isShow) { this.commit('root/toggleRemindPassModal', isShow); },
        toggleAddNewsModal(context, isShow) { this.commit('root/toggleAddNewsModal', isShow); }
    },
    getters: {}
};
