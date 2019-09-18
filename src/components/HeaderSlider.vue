<template>
    <div class="header__slider">
        <slider  :autoplay="false">
            <slider-item
                    v-for="(item, index) in sliderItems"
                    :key="index"
            >
                <img class="slider-img" :src="item.img" alt="First slide">
                <div class="slider-text-wrap">
                    <div class="slider-text">
                        <h5 class="slider-text__title">Играй с нами в <br> <span class="logo">Искре</span></h5>
                        <p class="slider-text__descr">{{item.text}}</p>
                    </div>
                </div>
                    <!--<div class="slider-item1">
                        <img class="d-block w-100 slider-img" :src="item.img" alt="First slide">
                        &lt;!&ndash;&ndash;&gt;
                    </div>-->
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
                sliderItems: []
            }
        },
        methods: {
            loadJSONData() {
                const data = require("../assets/data/slider.json");
                this.sliderItems = this.prepareDataForUse(data);
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