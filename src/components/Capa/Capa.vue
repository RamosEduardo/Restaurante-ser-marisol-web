<template>
  <section class="section-video parallax100" :style="`background-image: url('${backgroundImage}')`">
    <div class="content-video t-center p-t-25 p-b-250">
      <Navbar />
      <h3 class="tit4 t-center p-l-15 p-r-15 p-t-200">
        {{ title }}
      </h3>
    </div>
  </section>
</template>

<script>

import Navbar from '@/Pages/Components/Navbar'

export default {
  name: 'Capa',
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundImage: {
      type: String,
      default: ''
    }
  },
  components: {
    Navbar,
  }
}
</script>

<style>
  .content-video {
    margin-top: -70px;
    position: initial;
  }
</style>