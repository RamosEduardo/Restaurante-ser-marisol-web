<template>
  <div>
    <footer class="bg1">
      <div class="container p-t-40 p-b-70">
        <div class="row">
          <div class="col-sm-6 col-md-6 p-t-50">
            <h4 class="txt13 m-b-33">Contato</h4>

            <ul class="m-b-70">
              <li class="txt14 m-b-14" style="margin-bottom: 14px">
                <v-icon style="color: white" right>mdi-map-marker</v-icon>
                Rua Professora Adélia Ficher, Vila Baependi
              </li>
              <br />
              <li class="txt14 m-b-14" style="margin-bottom: 14px">
                <v-icon style="color: white" right>mdi-phone</v-icon>
                (47) 9 8428-7818
              </li>
              <br />
              <li class="txt14 m-b-14" style="margin-bottom: 14px">
                <v-icon style="color: white" right>mdi-mail</v-icon>
                buffetsermarisol@hotmail.com
              </li>
            </ul>
    
            <h4 class="txt13 m-b-32">Horário de Atendimento</h4>

            <ul>
              <v-icon style="color: white" right>mdi-clock</v-icon>
              <li class="txt14">10:30 – 14:30</li>

              <li class="txt14">Dom - Sex</li>
            </ul>
          </div>

          <div class="col-sm-6 col-md-6 p-t-50">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frestaurantesermarisol%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
      </div>

      <div class="end-footer bg2">
        <div class="container">
          <div class="flex-sb-m flex-w p-t-22 p-b-22">
            <div class="p-t-5 p-b-5">
              <v-icon style="color: white" right>mdi-whatsapp</v-icon>
              <v-icon style="color: white" right>mdi-facebook</v-icon>
              <v-icon style="color: white" class="color-white" right>mdi-instagram</v-icon>
            </div>

            <div
              class="txt17 p-r-20 p-t-5 p-b-5"
            >Copyright &copy; 2020 Todos Direitos Reservados | Cleiton Ramos</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.color-white {
  color: white
}
</style>
