<template>
  <div>
    <Capa title="Contato" backgroundImage="https://cdn1.casamentos.com.br/home-pics/9/9/fotoHome_399.jpg"/>
    <section class="section-contact bg1-pattern p-t-90 p-b-113">

      <div class="container">
        <h3 class="tit7 t-center p-b-62 p-t-62">
          Entre em Contato Via
        </h3>

        <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3 p-l-50 p-b-60">
            <a style="text-decoration: none" href="https://www.facebook.com/restaurantesermarisol">
              <div class="row p-t-30 p-b-30" style="display:flex;justify-content:center;background-color: #3b5998">
                <div class="col-md-2 tit4" style="display:flex;justify-content:center; align-items:center">
                  <i class="fa fa-facebook" aria-hidden="true" />
                  <v-icon left style="color: white">mdi-facebook</v-icon>
                </div>
              </div>
            </a>
                        
            <a style="text-decoration: none" href="https://www.instagram.com/restaurantesermarisol" target="_blank">
              <div class="row p-t-30 p-b-30 instagram" style="display:flex;justify-content:center">
                <div class="col-md-2 tit4" style="display:flex;justify-content:center; align-items:center">
                  <i class="fa fa-instagram" aria-hidden="true" />
                  <v-icon left style="color: white">mdi-instagram</v-icon>
                </div>
              </div>
            </a>

            <a style="text-decoration: none" href="https://api.whatsapp.com/send?phone=5547984287818&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20ap%C3%B3s%20acessar%20seu%20site!" target="_blank">
              <div class="row p-t-30 p-b-30" style="display:flex;justify-content:center; background-color:#25d366">
                <div class="col-md-2 tit4" style="display:flex;justify-content:center; align-items:center">
                  <i class="fa fa-whatsapp" aria-hidden="true" />
                  <v-icon left style="color: white">mdi-whatsapp</v-icon>
                </div>
              </div>
            </a>

            <a style="text-decoration: none" href="https://www.facebook.com/restaurantesermarisol" target="_blank">
              <div class="row p-t-30 p-b-30" style="display:flex;justify-content:center;background-color: #c62421">
                <div class="col-md-2 tit4" style="display:flex;justify-content:center; align-items:center">
                  <i class="fa fa-envelope" aria-hidden="true" />
                  <v-icon left style="color: white">mdi-email</v-icon>
                </div>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md-8 col-lg-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14285.201900388622!2d-49.0739557!3d-26.4782686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadc6f231c058922!2sRestaurante%20Ser%20Marisol!5e0!3m2!1spt-BR!2sbr!4v1586311205874!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              frameborder="0"
              style="border:0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import Capa from '@/components/Capa/Capa'

export default {
  name: 'Contato',
  components: {
    Capa,
  }
}
</script>

<style>
  .instagram{
    background: #f09433; 
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }
</style>