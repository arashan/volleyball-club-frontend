<template>
    <div class="page gallery">
        <h2 class="page__title">Галерея</h2>
        <div class="page__inner">
            <pagination
                    :current="currentPage"
                    :total="totalPhotos"
                    :perPage="perPage"
                    @page-changed="getPhotoToCurrentPage">
            </pagination>
            <vue-gallery :images="photos" :index="index" @close="index = null"></vue-gallery>
            <div class="gallery-wrap">
                <div
                class="image"
                v-for="(image, imageIndex) in photos"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')' }"
                ></div>
            </div>

        </div>
    </div>
</template>

<script>
    import pagination from './Pagination'
    export default {
        name: "Gallery",
        components: {
            pagination
        },
        data: function () {
            return {
                images: [
                    'https://dummyimage.com/600x400/000/fff.jpg&text=1',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=2',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=3',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=4',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=5',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=6',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=7',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=8',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=9',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=10',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=11',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=12',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=13',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=14',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=15',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=16',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=17',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=18',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=19',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=20',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=21',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=22',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=23',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=24',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=25',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=26',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=27',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=28',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=29',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=31',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=32',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=33',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=34',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=35',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=36',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=37',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=38',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=39',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=40',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=41',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=42',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=43',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=44',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=45',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=46',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=47',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=48',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=49',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=50',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=51',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=52',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=53',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=54',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=55',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=56',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=57',
                    'https://dummyimage.com/600x400/000/fff.jpg&text=58'


                ],
                index: null,
                photos:[],
                totalPhotos: 0,
                perPage: 6,
                currentPage: 1
            };
        },
        computed: {

        },
        methods: {
            getPhotoToCurrentPage(page) {
                let start = (page - 1) * this.perPage,
                    end = start + this.perPage;

                this.photos = this.images.slice(start, end);
                this.currentPage = page;
            },
            nextPage() {
                return this.currentPage++;
            },
            prevPage() {
                return this.currentPage--;
            }
        },
        mounted() {
            this.totalPhotos = this.images.length;
            this.getPhotoToCurrentPage(this.currentPage);
        }
    }
</script>