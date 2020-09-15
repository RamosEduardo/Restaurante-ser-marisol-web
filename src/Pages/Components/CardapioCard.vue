<template>
  <div>
    <v-card :loading="loading" class="mx-auto my-12" min-width="400">
      <!-- <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img> -->
      <v-card-title>
        <h4 class="txt5 color0-hov trans-0-4 m-b-13">{{ title }}</h4>
      </v-card-title>

      <v-card-text>
        <v-list subheader three-line v-if="produtosCardapio && produtosCardapio.length > 0">
          <div v-for="(produto, index) in produtosCardapio" :key="`produto||${index}||title`" style="margin-top: 0px">
              <h4 class="txt4 color0-hov trans-0-4 m-b-13">{{ produto.nome }}</h4>
          </div>

        </v-list>
        <div v-else>
          Nenhum Produto Cadastrado no Cardápio
        </div>
      </v-card-text>

      <!-- <v-divider class="mx-4"></v-divider> -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardapioCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    produtosCardapio: {
      type: Array,
    }
  },
  data() {
    return {
      loading: false
    }
  },
};
</script>