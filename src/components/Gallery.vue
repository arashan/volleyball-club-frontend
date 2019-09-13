<template>
    <div class="page gallery">
        <h2 class="page__title">Галерея</h2>
        <div class="page__inner">
            <vue-gallery :images="images" :index="index" @close="index = null"></vue-gallery>
            <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')' }"
            ></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        data: function () {
            return {
                images: [
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff',
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000'
                ],
                index: null
            };
        }
    }
</script>

<style scoped>
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px;
    }
</style>