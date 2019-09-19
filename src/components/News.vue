<template>
    <div class="page">
        <h2 class="page__title">Новости</h2>
        <div class="form-group page__add">
            <button type="button" class="btn"  @click="openAddNewsModal">Добавить новость</button>
        </div>
        <div class="page__inner">
            <news-item v-for="article in articleList" :key="article.id" :article="article"></news-item>
        </div>
    </div>
</template>

<script>
    import newsItem from "./NewsItem"
    export default {
        name: "News",
        components: {
            newsItem
        },
        data: function () {
            return {
                articleList : []
            }
        },
        methods: {
            loadData() {
                let data = require("../assets/data/news.json");
                this.articleList = this.prepareDataForUse(data);
            },
            prepareDataForUse(data) {
                return data.map(function (item) {
                    let path = require(`../assets/images/content/${item.image}`);
                    item.image = path;

                    return item;
                });
            },
            openAddNewsModal() {
                console.log(this.$store.state.root.showAddNewsModal);
                this.$store.dispatch('root/toggleAddNewsModal', true);
            }
        },
        created() {
            this.loadData();
        }
    }
</script>
