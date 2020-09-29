<template>
  <div id="app" style="
    height: 100%;
    overflow-x: hidden;
    margin-top: 0;
    overflow-y: scroll;
  ">
    <Sidebar />
    <router-view />
    <Footer />
  </div>
</template>

<script>

  import Sidebar from "./components/Menu/Sidebar.vue";
  import Footer from '@/components/Footer'
  import Cookies from 'js-cookie'

  // document.cookie = "AC-C=ac-c;expires=Fri, 31 Dec 9999 23:59:59 GMT;path=/;SameSite=Lax";

  export default {
    name: 'App',
    components: {
      Sidebar,
      // Home,
      Footer,
    },
    created() {
  
    Cookies.set('SameSite', 'None')
      // console.log(this.$cookie)
      // this.$cookie.set("SameSite", 'Lax', "31 Dec 9999 23:59:59 GMT")
    }
  }
</script>

<style>
@import './css/main.css';
@import './css/util.css';
@import './fonts/themify/themify-icons.css';

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
