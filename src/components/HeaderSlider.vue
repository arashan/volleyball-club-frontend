<template>
    <div class="header__slider">
        <slider animation="fade" autoplay="false">
            <slider-item
                    v-for="(item, index) in sliderItems"
                    :key="index"
            >
                <div class="carousel-item">
                    <div class="carousel-item">
                        <img class="d-block w-100 carousel-img" :src="item.img" alt="First slide">
                        <div class="carousel-caption carousel-text d-md-block">
                            <h5 class="carousel-text__title">Играй с нами в <br> <span class="logo">Iskre</span></h5>
                            <p class="carousel-text__descr">{{item.text}}</p>
                        </div>
                    </div>
                </div>
            </slider-item>
        </slider>
        <!--<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" v-for="item in sliderItems" :key="item.index" data-slide-to="item.index" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 carousel-img" src="images/content/slider_1.jpg" alt="First slide">
                    <div class="carousel-caption carousel-text d-none d-md-block">
                        <h5 class="carousel-text__title">Играй с нами в <br> <span class="logo">Iskre</span></h5>
                        <p class="carousel-text__descr">Волейбол моя жизнь, волейбол моя игра, с волейболом мы вместе, с волейболом навсегда</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-img" src="images/content/NatGeo06.jpg" alt="Second slide">
                    <div class="carousel-caption carousel-text d-none d-md-block">
                        <h5 class="carousel-text__title">Играй с нами в <br> <span class="logo">Iskre</span></h5>
                        <p class="carousel-text__descr">Нет ничего лучше, чем прожить жизнь в стремлении стать совершеннее</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-img" src="images/content/NaturePatterns02.jpg" alt="Second slide">
                    <div class="carousel-caption carousel-text d-none d-md-block">
                        <h5 class="carousel-text__title">Играй с нами в <br> <span class="logo">Iskre</span></h5>
                        <p class="carousel-text__descr">Каждая тренировка — это шаг вперед. Каждая пропущенная тренировка — это два шага назад</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-img" src="images/content/NatGeo17.jpg" alt="Third slide">
                    <div class="carousel-caption carousel-text d-none d-md-block">
                        <h5 class="carousel-text__title">Играй с нами в <br> <span class="logo">Iskre</span></h5>
                        <p class="carousel-text__descr">Нет ничего лучше, чем прожить жизнь в стремлении стать совершеннее</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>-->
    </div>
</template>

<script>
    /*import sliderItems from '../assets/data/slider.json';*/
    import { Slider, SliderItem } from 'vue-easy-slider'

    export default {
        name: 'HeaderSlider',
        components: {
            Slider, SliderItem
        },
        data: function () {
            return {
                sliderItems: [],
                list: [
                    { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
                    { backgroundColor: '#eee', width: '100%', height: '100%' },
                    { backgroundColor: '#f44336', width: '100%', height: '100%' },
                ]
            }
        },
        methods: {
            loadJSONData() {
                const data = require("../assets/data/slider.json");
                this.sliderItems = this.prepareDataForUse(data);
                console.log(this.sliderItems);
            },
            prepareDataForUse(data) {
                return data.map(item => {
                    let path = require(`../assets/images/content/${item.img}`);
                    item.img = path;

                    return item;
                });
            }
        },
        created() {
            this.loadJSONData();
        }
    }
</script>