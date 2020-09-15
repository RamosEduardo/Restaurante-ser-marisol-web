<template>
  <div>
    <section class="section-video parallax100 space-bg">
      <div class="wrap-slick1 content-video">
        <div class="slick1">
          <div class="item-slick1 item1-slick1 m-t-60">
            <Navbar />
            <div class="container">
              <div class="row">
                <h3
                  class="tit4 t-center m-t-100"
                  style="margin-top:250px; margin-left:-55px"
                >Restaurante e Espaço para Eventos</h3>
              </div>
              <div class="row" style="justify-content:center; align-items:center; display:flex">
                <v-btn
                  style="border-color: white; color: white; margin-top: 15px"
                  tile
                  outlined
                  color="white"
                  @click="$router.push('/fotos-casa')"
                >
                  <v-icon left>mdi-camera-image</v-icon>Fotos da Casa
                </v-btn>
              </div>
            </div>
          </div>
        </div>

        <div class="wrap-slick1-dots"></div>
      </div>
    </section>
    <!-- Estrutura - video youtube -->
    <div id="estrutura" style="width:100%;padding:0px;background-color:#efefef">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 p-t-50">
            <div class="row" style="justify-content:center">
              <h3
                class="tit4 t-center mt-10 p-l-15 p-r-15 p-t-3"
                style="color:#262424;margin-top:40px"
              >Nossa Estrutura</h3>
            </div>
            <div class="row p-t-90 p-b-90" style="justify-content:center">
              <div style="display:flex">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Cdhi9syFhYE"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Serviços -->
    <section class="section-intro parallax100 servicos-bg">
      <div class="content-intro p-t-77 p-b-133" style="padding-top: 77px">
        <div class="container">
          <div class="row" style="justify-content:center">
            <h3
              class="tit4 t-center mt-10 p-t-3"
              style="color:white; margin-top:40px"
            >Nossos Serviços</h3>
          </div>
          <div class="row" style="margin-top: 40px">
            <div
              class="col-md-3 p-t-30"
              v-for="(servico, index) in state.servicos"
              :key="`Servico-${index}`"
            >
              <div class="blo1">
                <div class="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                  <a href="#">
                    <img :src="servico.imagem" alt="IMG-INTRO" />
                  </a>
                </div>
                <div class="wrap-text-blo1 p-t-35">
                  <a href="#" style="text-decoration: none">
                    <h4
                      class="txt5 color0-hov trans-0-4 m-b-13"
                      style="color:#fff;"
                    >{{ servico.titulo }}</h4>
                  </a>
                  <p class="m-b-20" style="color: white">{{ servico.descricao }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <previa-eventos
      :size-col="4"
      :description-view="true"
      :date-event-view="true"
      :title-view="true"
    />
  </div>
</template>

<script>
import PreviaEventos from "@/Pages/Components/PreviaEventos";
import api from "@/api/api";
import Navbar from "@/Pages/Components/Navbar";

export default {
  data() {
    return {
      state: {
        servicos: [],
      },
    };
  },
  mounted() {
    this.listServices();
  },
  methods: {
    async listServices() {
      const { data } = await api.get("/servicos");
      this.state.servicos = data;
    },
  },
  components: {
    PreviaEventos,
    Navbar,
  },
};
</script>

<style>
.space-bg {
  background-image: url("https://storage.alboom.ninja/sites/9079/albuns/438105/bsb_0258.jpg?t=1557779041");
}
.content-video {
  margin-top: -60px;
  position: initial;
}
.servicos-bg {
  background-image: url("https://www.wallpaperup.com/uploads/wallpapers/2012/08/06/9495/7bed6d1e532dd78cbe40c3443b4f8770.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>