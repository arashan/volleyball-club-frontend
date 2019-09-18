<template>
    <modal v-if="showModal">
        <h3 slot="header" class="login-form-title logo form-group"><span class="logo__firstLetter">И</span>скра</h3>
        <div slot="body">
            <div class="form-group">
                <input type="text" id="login" class="form-control" placeholder="Логин" />
            </div>
            <div class="form-group">
                <input type="password" id="password" class="form-control" placeholder="Пароль" />
            </div>
        </div>
        <div slot="footer">
            <div class="form-group">
                <button type="button" class="btn" @click="sendToAuth">Ввойти</button>
            </div>
            <div class="form-group">
                <a href="#" class="link" @click="remindPassword">Забыли пароль</a>
                <a href="#" class="link ml-3" @click="sendToRegistration">Регистрация</a>
            </div>
        </div>
    </modal>
</template>

<script>
    import modal from '../Modal';
    export default {
        name: "LoginForm",
        components: {
            modal
        },
        computed: {
            showModal() {
                return this.$store.state.root.showModal
            }
        },
        methods: {
            closeModal() {
                this.$store.dispatch('root/toggleModal', false);
            },
            sendToAuth() {
                this.closeModal();
            },
            remindPassword() {
                this.closeModal();
                this.$store.dispatch('root/toggleRemindPassModal', true);
            },
            sendToRegistration() {
                this.closeModal();
            }
        }
    }
</script>

<style scoped>

</style>