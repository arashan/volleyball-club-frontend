<template>
  <div id="app">
    <Header></Header>
    <header-slider></header-slider>
    <content>
      <div class="container">
        <News id="news"></News>
        <Timetable id="timetable"></Timetable>
        <Payment id="payment"></Payment>
        <Gallery id="gallery"></Gallery>
        <Contacts id="contacts"></Contacts>
      </div>
      <Footer></Footer>
    </content>
      <login-form></login-form>
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

  import loginForm from './components/modal/LoginForm'

  export default {
    name: 'app',
    components: {
      Header, headerSlider, News, Timetable, Payment, Gallery, Contacts, Footer, loginForm
    },
    data: function() {
        return {

        }
    },
    methods: {

    }
  }
</script>

<style>

</style>
