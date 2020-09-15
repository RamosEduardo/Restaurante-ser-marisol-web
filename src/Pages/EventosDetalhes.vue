<template>
  <div>
    <!-- Transição para trocar -->
    <header style="padding-left: 10px">
      <h4 class="txt7 color0-hov trans-0-4 m-b-2">{{ evento.titulo }}</h4>
      <h4 class="txt5 color0-hov trans-0-4 m-b-13">{{ getDate(evento.data) }}</h4>
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

export default {
  data() {
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
        const newDate = new Date(date);
        const day = newDate.getDate().toString().length > 1 ? newDate.getDate() : `0${newDate.getDate()}`;
        const month = newDate.getUTCMonth().toString().length > 1 ? newDate.getUTCMonth() : `0${newDate.getUTCMonth()}`;
        const dateFormat = `${day}/${month}/${newDate.getFullYear()}`;
        return dateFormat;
    }
  },
}
</script>