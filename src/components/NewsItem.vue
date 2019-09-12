<template>
    <div>
        <div class="article-list__img"><img :src="article.image"></div>
        <div class="article-list__info">
            <h3 class="article-list__title mb-2">
                <a :href="article.link">{{article.title}}</a>
            </h3>
            <h4 class="article-list__subtitle mb-2">
                <a :href="article.link">{{article.subtitle}}</a>
            </h4>
            <div class="article-list__details">
                            <span class="article-list__date">
                                {{new Date(article.date) | moment("DD MMMM YYYY")}}
                            </span>
                <span class="article-list__tag" v-for="(tag, index) in article.tags" :key="index">
                   {{tag}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewsItem",
        props: {
            article: Object
        }
    }
</script>

<style scoped>

</style>