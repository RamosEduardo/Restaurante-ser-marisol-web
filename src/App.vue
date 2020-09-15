<template>
  <div id="app">
    <!-- <Navbar /> -->
    <Sidebar />
    <router-view />
    <!-- <Home /> -->
    <!-- <Sobre /> -->
    <!-- <Contato /> -->
    <!-- <Cardapio /> -->
    <!-- <Eventos /> -->
    <!-- <fotos-casa /> -->
    <Footer />
  </div>
</template>

<script>

  import Sidebar from "./components/Menu/Sidebar.vue";
  import Footer from '@/components/Footer'
  // import FotosCasa from '@/Pages/FotosCasa'
  // import Home from '@/Pages/Home'
  // import Sobre from '@/Pages/Sobre'
  // import Contato from '@/Pages/Contato'
  // import Cardapio from '@/Pages/Cardapio'
  // import Eventos from '@/Pages/Eventos'

  export default {
    name: 'App',
    components: {
      Sidebar,
      // Home,
      Footer,
      // Sobre,
      // Navbar,
      // Contato
      // Cardapio,
      // Eventos,
      // FotosCasa
    }
  }
</script>

<style>
@import './css/main.css';
@import './css/util.css';
@import './fonts/themify/themify-icons.css';
/* @import '../vendor/bootstrap/css/bootstrap.min.css';
@import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
/* @import '../vendor/animate/animate.css';
@import "../vendor/css-hamburgers/hamburgers.min.css";
@import "../vendor/select2/select2.min.css";
@import "../vendor/daterangepicker/daterangepicker.css";
@import "../vendor/slick/slick.css";
@import "../vendor/lightbox2/css/lightbox.min.css"; */ */

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: "Lato";
  height: 100%;
  background: rgb(247, 232, 244);
}

</style>
