<template>
  <div>
    <section class="section-intro">
      <!-- Fazer modal para abrir as imagens -->
      <div class="content-intro bg-white p-t-10 p-b-20">
        <div class="container">
          <div class="row"></div>
          <div class="row">
            <vue-easy-lightbox
              :visible="isOpenModal"
              :imgs="imagens"
              :index="index"
              @hide="setModal(false)"
            />
            <div
              v-for="(imagem, index) in imagens"
              :key="`ImagemEvento||${index}`"
              class="p-t-30 col-md-3"
              data-toggle="modal"
              data-target="#modal-video-01"
              aria-hidden="true"
            >
              <div class="blo1">
                <div class="wrap-pic-blo1 bo-rad-10 hov-img-zoom" style="max-height: 220px">
                  <img @click="setIndex(index)" :src="imagem" alt="IMG-INTRO" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>

export default {
  data() {
    return {
      isOpenModal: false,
      index: null,
      itensFotoModal: [],
    };
  },
  components: {
  },
  methods: {
    setModal(value) {
      this.isOpenModal = value;
    },
    setIndex(value) {
      this.index = value;
      this.itensFotoModal = this.imagens.map((item) => {
        return {
          src: item,
        };
      });
      this.setModal(true);
    },
  },
  props: {
    imagens: {
      type: Array,
      default: () => [],
    },
  },
};
</script>