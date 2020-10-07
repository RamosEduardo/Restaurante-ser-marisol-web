<template>
  <div>
    <Capa
      title="Nossos Cardápios"
      background-image="https://storage.alboom.ninja/sites/9079/albuns/438105/bsb_0257.jpg?t=1557778188"
    />
    <div class="p-t-70 bg1-pattern">
      <div class="cardapio-bg">
        <div class="row" style="display: flex;">
          <div
            style="margin-left: 10px; margin-bottom: 10px"
            v-for="(cardapio, index) in state.cardapios"
            :key="`Cardapio||${index}`"
          >
            <CardapioCard
              :title="cardapio.titulo"
              v-if="cardapio.produtosCardapio && cardapio.produtosCardapio.length > 0"
              :produtos-cardapio="cardapio.produtosCardapio"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import Capa from "@/components/Capa/Capa";
import CardapioCard from "@/Pages/Components/CardapioCard";

export default {
  name: "Cardapio",
  data() {
    return {
      state: {
        cardapios: [],
        produtos: [
          {
            produto: "arroz",
          },
          {
            produto: "Feijão",
          },
        ],
      },
    };
  },
  components: {
    Capa,
    CardapioCard,
  },
  mounted() {
    this.getCardapiosList();
  },
  methods: {
    async getCardapiosList() {
      const { data } = await api.get("/cardapios");
      console.log("DATA ", data);
      this.state.cardapios = data;
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