<template>
  <div id="app">
    <Header></Header>
    <header-slider></header-slider>
    <content>
      <div class="container">
        <News></News>
        <Timetable></Timetable>
      </div>
    </content>
  </div>
</template>

<script>
  import './assets/style.sass';
  import Header from './components/Header.vue'
  import headerSlider from './components/HeaderSlider.vue'
  import News from './components/News.vue'
  import Timetable from './components/Timetable.vue'

  export default {
    name: 'app',
    components: {
      Header, headerSlider, News, Timetable
    }
  }
</script>

<style>

</style>
