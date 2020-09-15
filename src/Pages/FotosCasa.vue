<template>
  <div>
    <!-- Transição para trocar -->
    <Capa
      :title="'Fotos da Casa'"
      :background-image="'https://storage.alboom.ninja/sites/9079/albuns/438105/bsb_0257.jpg?t=1557778188'"
    />
    <galeria-imagens
      v-if="evento"
      :imagens="fotos"
    />
  </div>
</template>

<script>

import Capa from '@/components/Capa/Capa'
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
    this.getFotosCasa()
  },
  beforeDestroy() {
    this.fotos = []
  },
  components: {
		GaleriaImagens,
		Capa
  },
  methods: {
    async getFotosCasa() {
      const { data } = await api.get(`/fotos-casa`);
			
			this.fotos = data.map(foto => foto.imagem)
			console.log(this.fotos);
    },
  },
}
</script>