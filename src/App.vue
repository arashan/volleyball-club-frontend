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
        <reg-page></reg-page>
      </div>
      <Footer></Footer>
    </content>
    <login-form></login-form>
    <remind-pass></remind-pass>
    <add-news></add-news>
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
  import regPage from './components/RegPage'
  import Footer from './components/Footer.vue'

  import loginForm from './components/modal/LoginForm'
  import remindPass from './components/modal/RemindPassword'
  import addNews from './components/modal/AddNews'

  export default {
    name: 'app',
    components: {
      Header, headerSlider, News, Timetable, Payment, Gallery, Contacts, Footer, loginForm,
      regPage, remindPass, addNews
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
