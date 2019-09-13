<template>
  <div id="app">
    <Header></Header>
    <header-slider></header-slider>
    <content>
      <div class="container">
        <News></News>
        <Timetable></Timetable>
        <Payment></Payment>
        <Gallery></Gallery>
        <Contacts></Contacts>
        <Footer></Footer>
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
  import Payment from './components/Payment.vue'
  import Gallery from './components/Gallery.vue'
  import Contacts from './components/Contacts.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      Header, headerSlider, News, Timetable, Payment, Gallery, Contacts, Footer
    }
  }
</script>

<style>

</style>
