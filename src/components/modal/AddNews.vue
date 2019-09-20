<template>
    <modal v-if="showAddNewsModal" :sizeClass="'lg'">
        <h3 slot="header" class="form-group">Добавить новость</h3>
        <div  slot="body">
            <div class="form-group row">
                <label for="news_url" class="col-form-label col-md-2">URL адрес</label>
                <div class="col-md-10">
                    <input type="text" id="news_url" class="form-control" placeholder="url" v-model="url"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="news_title" class="col-form-label col-md-2">Заголовок</label>
                <div class="col-md-10">
                    <textarea name="news_title" id="news_title" class="form-control news-title" v-model="title"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label for="news_subtitle" class="col-form-label col-md-2">Подзаголовок</label>
                <div class="col-md-10">
                    <textarea name="news_title" id="news_subtitle" class="form-control news-subtitle" v-model="subtitle"></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-form-label col-md-2">Картина</label>
                <div class="input-group col-md-10">
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="news_img">
                        <label class="custom-file-label" for="news_img">Выберите картину</label>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label for="news_tag" class="col-form-label col-md-2">Тег</label>
                <div class="input-group col-md-10">
                    <input type="text" class="form-control" id="news_tag" ref="news_tag" v-model="tag" @keyup.13="addTag" @keyup.esc="clearTagInput">
                    <div class="input-group-append" @click="addTag">
                        <span class="input-group-text input-group-text-ic enter"></span>
                    </div>
                </div>
            </div>
            <div class="form-group row" v-show="tags.length > 0">
                <div class="col-md-2"></div>
                <div class="col-md-10">
                    <ul class="tag-list form-control">
                        <li class="tag-list-li" v-for="(tag, index) in tags" :key="index"><span class="tag-list-item">{{tag}}</span><span class="close" @click="deleteTag(index)"></span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div slot="footer">
            <div class="form-group">
                <button type="button" class="btn" @click="addNews()">Применить</button>
            </div>
        </div>
    </modal>
</template>

<script>
    import modal from '../Modal';
    export default {
        name: "AddNews",
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
            showAddNewsModal() {
                return this.$store.state.root.showAddNewsModal
            }
        },
        methods: {
            closeAddNewsModal() {
                this.$store.dispatch('root/toggleAddNewsModal', false);
            },
            addNews() {
                this.closeAddNewsModal();
            },
            addTag() {
                if (this.tag === '') return;
                if (this.tags.indexOf(this.tag) !== -1) {
                    this.tag = '';
                    return;
                }
                this.tags.push(this.tag);
                this.tag = '';
                this.$refs.news_tag.focus();
            },
            deleteTag(index) {
                this.tags.splice(index, 1);
            },
            clearTagInput() {
                this.tag = '';
            }
        }
    }
</script>