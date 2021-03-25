<template>
  <div>
    <!-- Transição para trocar -->
    <header style="padding-left: 10px;">
      <div style="display: flex">
        <h4 class="txt7 color0-hov trans-0-4 m-b-2">{{ evento.titulo }}</h4>
      </div>
      <div style="display: flex">
        <h4 class="txt5 color0-hov trans-0-4 m-b-13">{{ getDate(evento.data) }}</h4>
      </div>
    </header>
    <galeria-imagens
      v-if="evento"
      :imagens="fotos"
    />
  </div>
</template>

<script>

import GaleriaImagens from '@/Pages/Components/GaleriaImagens'
import api from '@/api/api'
import moment from 'moment'

export default {
  data() {
    console.log('EVENTO ', this.eventoId);
    return {
      evento: {},
      fotos: []
    }
  },
  mounted() {
    this.getDetalheEvento()
  },
  beforeDestroy() {
    this.evento = {};
    this.fotos = []
  },
  props: {
    eventoId: {
      type: Number,
      default: null
    }
  },
  components: {
    GaleriaImagens,
  },
  methods: {
    async getDetalheEvento() {
      const { data } = await api.get(`/evento/${this.eventoId}`);
      this.evento = data
      const { fotos } = data;
      const listaFotos = fotos.map(foto => foto.imagem);
      this.fotos = listaFotos
    },
    getDate(date) {
      if (!date)
            return '';
      return moment(date).format('DD/MM/YYYY')
    },
  },
}
</script>