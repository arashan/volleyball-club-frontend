<template>
    <div class="page">
        <h2 class="page__title">Новости</h2>
        <div class="page__inner">
            <!-- article list ****************************************************************************************************** -->
            <div class="article-list" v-for="article in articleList" :key="article.id">
                <news-item :article="article"></news-item>
            </div>
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
            }
        },
        created() {
            this.loadData();
        }
    }
</script>

<style scoped>

</style>