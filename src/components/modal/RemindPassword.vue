<template>
    <modal v-if="showRemindPassModal">
        <h3 slot="header" class="login-form-title logo form-group"><span class="logo__firstLetter">I</span>skra</h3>
        <div  slot="body" class="modal-content login-form">
            <div class="form-group">
                <input type="text" id="login" class="form-control" placeholder="Электронная почта" />
            </div>
            <div class="form-group">Я не робот</div>
            <div class="form-group">
                <button type="button" class="btn" @click="remindPassword()">Применить</button>
            </div>
        </div>
        <div slot="footer"></div>
    </modal>

</template>

<script>
    import modal from '../Modal';
    export default {
        name: "RemindPassword",
        components: {
            modal
        },
        computed: {
            showRemindPassModal() {
                return this.$store.state.root.showRemindPassModal
            }
        },
        methods: {
            closeRemindPassModal() {
                this.$store.dispatch('root/toggleRemindPassModal', false);
            },
            remindPassword() {
                this.closeRemindPassModal();
            }
        }
    }
</script>

<style scoped>

</style>