<template>
  <div>
    <Capa
      :title="'Eventos'"
      :background-image="'https://storage.alboom.ninja/sites/9079/albuns/438105/bsb_0257.jpg?t=1557778188'"
    />

    <section class="section-intro">
      <div class="content-intro bg-white p-t-10 p-b-20">
        <div class="container">
          <div v-if="state.view !== 'geral'">
            <v-btn
              style="border: none; color: #222222"
              class="ma-2"
              tile
              outlined
              @click="resetDetails()"
            >
              <v-icon left>mdi-arrow-left</v-icon>
              Voltar
            </v-btn>
          </div>
          <div v-if="state.view === 'geral'" class="row" style="margin-top: 40px">
            <div
              v-for="(evento, index) in state.listEventos"
              :key="evento.data + '||' + index"
              :class="`p-t-30 col-md-3`"
            >
              <div class="blo1">
                <div class="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                  <a href="#">
                    <img
                      :src="'https://blog.wmjoias.com.br/wp-content/uploads/2019/01/9.jpg'"
                      alt="IMG-INTRO"
                    />
                  </a>
                </div>
                <div class="wrap-text-blo1 p-t-10">
                  <h4 class="txt5 color0-hov trans-0-4 m-b-13">{{ evento.titulo }}</h4>
                  <v-btn
                    style="border: none; color: #222222"
                    class="ma-2"
                    tile
                    outlined
                    @click="openDetails(evento)"
                  >
                    Veja Mais
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <!-- se for detalhe -->

          <div v-if="state.view === 'detalhes'" class="row" style="margin-top: 40px">
            <eventos-detalhes :evento-id="state.eventoSelecionado.id" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Capa from "@/components/Capa/Capa";
import api from "@/api/api";
import EventosDetalhes from "@/Pages/EventosDetalhes";

export default {
  data() {
    return {
      state: {
        view: "geral",
        listEventos: [],
        eventoSelecionado: {},
      },
      page: 1,
    };
  },
  components: {
    Capa,
    EventosDetalhes,
  },
  mounted() {
    this.getEventos();
  },
  destroyed() {
    this.state.eventoSelecionado = {};
  },
  methods: {
    async getEventos() {
      const { data } = await api.get("/all-eventos");
      this.state.listEventos = data;
    },
    getDate() {
      return "10/10/10";
    },
    openDetails(evento) {
      (this.state.view = "detalhes"), (this.state.eventoSelecionado = evento);
    },
    resetDetails() {
      this.state.view = 'geral'
    }
  },
};
</script>

<style>
.content-video {
  margin-top: -70px;
  position: initial;
}
</style>