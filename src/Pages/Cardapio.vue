<template>
  <div>
    <Capa
      title="Nossos Cardápios"
      background-image="https://storage.alboom.ninja/sites/9079/albuns/438105/bsb_0257.jpg?t=1557778188"
    />
    <div>
      <galeria-imagens
        v-if="state.cardapios"
        :imagens="state.cardapios"
        :mostrarTitulo="true"
        :md="4"
      />
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import Capa from "@/components/Capa/Capa";
import GaleriaImagens from '@/Pages/Components/GaleriaImagens'

export default {
  name: "Cardapio",
  data() {
    return {
      state: {
        cardapios: [],
      },
    };
  },
  components: {
    Capa,
    GaleriaImagens
  },
  mounted() {
    this.getCardapiosList();
  },
  methods: {
    async getCardapiosList() {
      const { data } = await api.get("/pratos");
      
      const test = data.map((cardapio) => cardapio.imagem);

      this.state.cardapios = test
    },
  },
};
</script>

<style>
.cardapio-bg {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-left: 70px;
  padding-bottom: 50px
}

@media (min-width: 100%) {
  .container {
    max-width: 100%;
  }
}
</style>