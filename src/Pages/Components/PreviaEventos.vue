<template>
  <div>
    <section class="section-intro">
      <div class="content-intro bg-white p-t-10 p-b-20">
        <div class="container">
          <div class="row" style="justify-content:center">
            <h3
              class="tit4 t-center mt-10 p-l-15 p-r-15 p-t-3"
              style="color:#262424;margin-top:40px"
              v-if="state.view === 'geral'"
            >Eventos Recentes</h3>
          </div>
          <div class="row" style="margin-top: 40px" v-if="state.view === 'geral' && state.listEventos">
            <div
              v-for="(evento, index) in state.listEventos"
              :key="evento.data + '||' + index"
              :class="`p-t-30 col-md-3`"
              @click="openDetails(evento)"
            >
              <div class="blo1">
                <div class="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                  <img
                    :src="evento.fotos ? evento.fotos[0] : 'https://triunfo.pe.gov.br/pm_tr430/wp-content/uploads/2018/03/sem-foto.jpg'"
                    alt="IMG-INTRO"
                  />
                </div>
                <div class="wrap-text-blo1 p-t-10">
                  <p>{{ getDate(evento.data) }}</p>
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
            <eventos-detalhes :evento-id="state.eventoSelecionado._id" />
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
    console.log(this.state.listEventos);
  },
  methods: {
    async getDetalheEvento(eventoId) {
      const { data } = await api.get(`/evento/${eventoId}`);
      const { fotos } = data;
      return fotos.map(foto => foto.imagem);
    },
    async listEventos() {
      const { data } = await api.get("/all-eventos");

      data.map(async (evento) => {
        if (evento) {
          evento.fotos = await this.getDetalheEvento(evento.id)
        }
      })

      this.state.listEventos = data;
    },
    getDate(date) {
      if (!date)
            return '';
        const newDate = new Date(date);
        const day = newDate.getDate().toString().length > 1 ? newDate.getDate() : `0${newDate.getDate()}`;
        const month = newDate.getUTCMonth().toString().length > 1 ? newDate.getUTCMonth() : `0${newDate.getUTCMonth()}`;
        const dateFormat = `${day}/${month}/${newDate.getFullYear()}`;
        return dateFormat;
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