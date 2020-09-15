<template>
  <div>
    <Capa
      title="Nossos Cardápios"
      background-image="https://storage.alboom.ninja/sites/9079/albuns/438105/bsb_0257.jpg?t=1557778188"
    />
    <div class="row" style="padding: 100px; display: 'flex'; justifyContent: 'center'">
      <v-select
        v-model="state.selectedMonth"
        flat solo-inverted hide-details
        :items="state.options"
        label="Sort by"
      />
    </div>
  </div>
</template>

<script>
import api from "@/api/api";
import Capa from "@/components/Capa/Capa";

export default {
  data() {
    return {
      state: {
        eventos: [],
        options: [
          { value: "01", label: "Janeiro" },
          { value: "02", label: "Fevereiro" },
          { value: "03", label: "Março" },
          { value: "04", label: "Abril" },
          { value: "05", label: "Maio" },
          { value: "06", label: "Junho" },
          { value: "07", label: "Julho" },
          { value: "08", label: "Agosto" },
          { value: "09", label: "Setembro" },
          { value: "10", label: "Outubro" },
          { value: "11", label: "Novembro" },
          { value: "12", label: "Dezembro" },
        ],
        selectedMonth: null,
      },
    };
  },
  components: {
    Capa,
  },
  methods: {
    async getEvents() {
      await api
        .get("eventos-mes/" + this.state.selectedOption.value)
        .then((response) => {
          const { eventosFilt } = response.data;
          this.state.eventos = eventosFilt;
        });
    },

    getMonth() {
      const date = new Date();
      const month = this.state.options.find(
        (i) => i.value === "0" + date.getMonth().toString()
      );
      console.log(`esse mes ,`, month);
      this.state.selectedOption = month
    },

    getEventoByMonth() {
      console.log("Procurar");
    },
  },
  mounted() {
    this.getMonth();
    this.getEvents();
  },
};
</script>