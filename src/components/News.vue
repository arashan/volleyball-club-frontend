<template>
    <div class="page">
        <h2 class="page__title">Новости</h2>
        <div class="form-group page__add">
            <button type="button" class="btn"  @click="openAddNewsModal">Добавить новость</button>
        </div>
        <div class="page__inner">
            <news-item v-for="article in articles" :key="article.id" :article="article"></news-item>
        </div>
        <pagination
                :current="currentPage"
                :total="totalNews"
                :perPage="perPage"
                @page-changed="getArticlesToCurrentPage">
        </pagination>
    </div>
</template>

<script>
    import newsItem from "./NewsItem"
    import pagination from './Pagination'
    export default {
        name: "News",
        components: {
            newsItem, pagination
        },
        data: function () {
            return {
                articleList : [],
                articles:[],
                totalNews: 0,
                perPage: 3,
                currentPage: 1
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
            },
            getArticlesToCurrentPage(page) {
                let start = (page - 1) * this.perPage,
                    end = start + this.perPage;

                this.articles = this.articleList.slice(start, end);
                this.currentPage = page;
            }
        },
        created() {
            this.loadData();
        },
        mounted() {
            this.totalNews = this.articleList.length;
            this.getArticlesToCurrentPage(this.currentPage);
        }
    }
</script>
