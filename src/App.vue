<template>
  <div id="app">
    <Header></Header>
    <header-slider></header-slider>
  </div>
</template>

<script>
  import './assets/style.sass';
  import Header from './components/Header.vue'
  import headerSlider from './components/HeaderSlider.vue'

  export default {
    name: 'app',
    components: {
      Header, headerSlider
    }
  }
</script>

<style>

</style>
