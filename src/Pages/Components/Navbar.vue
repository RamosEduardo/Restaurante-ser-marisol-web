<template>
  <nav class="main-nav">
    <div class="logo">
      <router-link to="/">
        <img src="../../assets/logo.png" />
      </router-link>
    </div>
    <div class="burger-content">
      <a style="text-decoration: none" href="https://api.whatsapp.com/send?phone=5547984287818&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20ap%C3%B3s%20acessar%20seu%20site!" target="_blank">
        <v-icon style="color: white; position: relative; z-index: 10" left>
          mdi-whatsapp
        </v-icon>
      </a>
      <a style="text-decoration: none" href="https://www.facebook.com/restaurantesermarisol" target="_blank">
        <v-icon style="color: white; position: relative; z-index: 10" left>mdi-facebook</v-icon>
      </a>
      <a style="text-decoration: none" href="https://www.instagram.com/restaurantesermarisol" target="_blank">
        <v-icon style="color: white; position: relative; z-index: 10" left>mdi-instagram</v-icon>
      </a>
      <Burger class="burguer-buttom" />
    </div>
  </nav>
</template>

<script>

import Burger from '@/components/Menu/Burger'

export default {
  name: 'Navbar',
  components: {
    Burger
  }
};
</script>

<style>
.logo {
  align-self: center;
  color: #fff;
  height: auto;
  font-weight: bold;
  font-family: "Lato";
  z-index: 10
}

.burger-content {
  display: flex;
  align-items: center;
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
  /* background: rgba(0, 0, 5, 0.918); */
}
</style>