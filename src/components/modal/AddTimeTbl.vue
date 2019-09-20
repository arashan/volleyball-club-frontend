<template>
    <modal v-if="showAddTimeTblModal" :sizeClass="'lg'">
        <h3 slot="header" class="form-group">Добавить расписание</h3>
        <div  slot="body">
            <div class="form-group row">
                <label for="timeT" class="col-form-label col-md-2">Время</label>
                <div class="col-md-10">
                    <input type="text" id="timeT" class="form-control"/>
                </div>
            </div>
        </div>
        <div slot="footer">
            <div class="form-group">
                <button type="button" class="btn" @click="AddTimeTbl()">Применить</button>
            </div>
        </div>
    </modal>
</template>

<script>
    import modal from '../Modal';
    export default {
        name: "AddTimeTbl",
        data: function() {
            return {
                url: '',
                title: '',
                subtitle: '',
                image: '',
                tag: '',
                tags: []
            }
        },
        components: {
            modal
        },
        computed: {
            showAddTimeTblModal() {
                return this.$store.state.root.showAddTimeTblModal
            }
        },
        methods: {
            closeAddTimeTblModal() {
                this.$store.dispatch('root/toggleAddTimeTblModal', false);
            },
            AddTimeTbl() {
                this.closeAddTimeTblModal();
            }
        }
    }
</script>