<template>
  <div>
    <Capa
      :title="'Sobre Nós'"
      :background-image="'https://storage.alboom.ninja/sites/9079/albuns/438105/bsb_0257.jpg?t=1557778188'"
    />
    <div class="bg2-pattern p-t-116 p-b-50 t-center p-l-15 p-r-15">
      <span class="tit2 t-center">Restaurante Ser Marisol</span>

      <h3 class="tit3 t-center m-b-35 m-t-5">Conheça Nossa História</h3>
      <p class="t-center size32 m-l-r-auto">{{ state.informacoes.nossaIdentidade }}</p>
    </div>
    <section class="bg1-pattern p-t-120 p-b-105">
      <div class="container">
        <div class="row">
          <div class="col-md-6 p-t-45">
            <div class="wrap-text-delicious t-center">
              <span class="tit2 t-center">Conheça nossa</span>

              <h3 class="tit3 t-center m-b-35 m-t-5">Visão</h3>

              <p class="t-center m-b-22 size3 m-l-r-auto">{{ state.informacoes.visao }}</p>
            </div>
          </div>

          <div class="col-md-6 p-t-60">
            <div class="wrap-pic-delicious size2 bo-rad-10 hov-img-zoom m-l-r-auto">
              <img
                src="https://www.hoffmann.com/blog/wp-content/uploads/2019/07/evento-corporativo-1024x683.jpg"
                alt="IMG-OUR"
              />
            </div>
          </div>
        </div>

        <div class="row p-t-20">
          <div class="col-md-6 p-t-20">
            <div class="wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto">
              <img
                src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000015z7OQEAY/5cfe9bcee4b0868fb2f4d58b.jpg"
                alt="IMG-OUR"
              />
            </div>
          </div>

          <div class="col-md-6 p-t-20">
            <div class="wrap-text-romantic t-center">
              <span class="tit2 t-center">Conheça nossa</span>

              <h3 class="tit3 t-center m-b-35 m-t-5">Missão</h3>

              <p class="t-center m-b-22 size3 m-l-r-auto">
                {{ state.informacoes.missao }}
              </p>
            </div>
          </div>

          <div class="col-md-6 p-t-60">
            <div class="wrap-text-romantic t-center">
              <span class="tit2 t-center">Conheça nossos</span>

              <h3 class="tit3 t-center m-b-35 m-t-5">Valores</h3>

              <p class="t-center m-b-22 size3 m-l-r-auto">
                {{ state.informacoes.valores }}
              </p>
            </div>
          </div>

          <div class="col-md-6 p-t-60">
            <div class="wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto">
              <img
                src="https://cdn0.casamentos.com.br/articles/images/real-wedding/6/2/9/1756247.jpg"
                alt="IMG-OUR"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Capa from "@/components/Capa/Capa";
import api from "@/api/api";

export default {
  data() {
    return {
      state: {
        informacoes: {},
      },
    };
  },
  components: {
    Capa,
  },
  mounted() {
    this.getAboutInfos();
  },
  methods: {
    async getAboutInfos() {
      const { data } = await api.get("/infos");
      this.state.informacoes = data;
    },
  },
};
</script>

<style>
  .content-video {
    margin-top: -70px;
    position: initial;
  }
</style>