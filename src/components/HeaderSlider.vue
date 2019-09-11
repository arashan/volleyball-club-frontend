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