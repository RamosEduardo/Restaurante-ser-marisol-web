<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <div class="sidebar-container">
          <ul class="sidebar-panel-nav">
            <li>
              <router-link to="/">
                <span @click="closeSidebarPanel">INÍCIO</span>
              </router-link>
            </li>
            <li>
              <router-link to="/sobre">
                <span @click="closeSidebarPanel">SOBRE</span>
              </router-link>
            </li>
            <li>
              <router-link to="/cardapio">
                <span @click="closeSidebarPanel">CARDÁPIOS</span>
              </router-link>
            </li>
            <li>
              <router-link to="/fotos-casa">FOTOS DA CASA</router-link>
            </li>
            <li>
              <router-link to="/eventos">
                <span @click="closeSidebarPanel">EVENTOS</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contato">
                <span @click="closeSidebarPanel">CONTATO</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 50px">
          <a style="text-decoration: none" href="https://api.whatsapp.com/send?phone=5547984287818&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20ap%C3%B3s%20acessar%20seu%20site!" target="_blank">
            <v-btn style="border-color: green; color: green" class="ma-2" tile outlined color="green">
              <v-icon left>mdi-whatsapp</v-icon>Whatsapp
            </v-btn>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { store, mutations } from "../../store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
};
</script>
<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-container {
  margin-top: 5rem;
}

.sidebar-backdrop {
  background-color: rgba(44, 44, 44, 0.774);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.774);
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 5px 2rem 5px;
  width: 300px;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: rgb(14, 14, 14);
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  display: block;
  padding-bottom: 0.5em;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
}

ul.sidebar-panel-nav > li > a:hover {
  color: rgb(104, 16, 16);
  transform: translateX(-1%);
  transition: all 150ms ease-in 0s;
}
</style>
