<template>
  <div>
    <section class="section-intro">
      <div class="content-intro bg-white p-t-10 p-b-20">
        <div class="container">
          <div class="row" style="justify-content:center">
            <h3
              class="tit4 t-center mt-10 p-l-15 p-r-15 p-t-3"
              style="color:#262424;margin-top:40px"
            >Eventos Recentes</h3>
          </div>
          <div class="row" style="margin-top: 40px" v-if="state.view === 'geral'">
            <div
              v-for="(evento, index) in state.listEventos"
              :key="evento.data + '||' + index"
              :class="`p-t-30 col-md-3`"
              @click="openDetails(evento)"
            >
              <div class="blo1">
                <div class="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                  <img
                    :src="'https://blog.wmjoias.com.br/wp-content/uploads/2019/01/9.jpg'"
                    alt="IMG-INTRO"
                  />
                </div>
                <div class="wrap-text-blo1 p-t-10">
                  <p>{{ getDate() }}</p>
                  <h4 class="txt5 color0-hov trans-0-4 m-b-13">{{ evento.titulo }}</h4>
                </div>
              </div>
            </div>
          </div>
          <div v-if="state.view !== 'geral'">
            <v-btn
              style="border: none; color: #222222"
              class="ma-2"
              tile
              outlined
              @click="resetDetails()"
            >
              <v-icon left>mdi-arrow-left</v-icon>Voltar
            </v-btn>
          </div>
          <div v-if="state.view === 'detalhes'" class="row" style="margin-top: 40px">
            <eventos-detalhes :evento-id="state.eventoSelecionado.id" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import api from "@/api/api";
import EventosDetalhes from "@/Pages/EventosDetalhes";

export default {
  data() {
    return {
      state: {
        listEventos: [],
        view: "geral",
      },
      props: {
        descriptionView: {
          type: "boolean",
          default: true,
        },
        titleView: {
          type: "boolean",
          default: true,
        },
        dateEventView: {
          type: "boolean",
          default: true,
        },
        sizeCol: {
          type: "string",
          default: "3",
        },
      },
    };
  },
  components: {
    EventosDetalhes,
  },
  async mounted() {
    console.log("Montou");
    await this.listEventos();
  },
  methods: {
    async listEventos() {
      const { data } = await api.get("/eventos");
      this.state.listEventos = data;
    },
    getDate() {
      return "10/10/10";
    },
    openDetails(evento) {
      this.state.view = "detalhes";
      this.state.eventoSelecionado = evento;
    },
    resetDetails() {
      this.state.view = "geral";
    },
  },
};
</script>

<style>
</style>