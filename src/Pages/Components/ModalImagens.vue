<template>
  <div>
    <cool-Light-box 
      :items="itens" 
      :index="indexImagem"
      loop
      @close="indexImagem = null"
    />
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'

export default {
  components: {
    CoolLightBox
  },
  props: {
    itens: {
      type: Array,
      default: () => []
    },
    indexImagem: {
      type: Number,
      default: null
    }
  }
};
</script>