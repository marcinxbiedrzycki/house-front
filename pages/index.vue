<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <div class="card" style="width: 20rem;">
            <div class="card-block">
              <h4 class="card-title">Domki</h4>
              <p class="card-text">Zobacz listę domków</p>
<!--              <a href="/house" class="btn btn-primary">Zobacz liste domków</a>-->
              <v-btn color="primary" nuxt to="/house">
                Zobacz liste domków
              </v-btn>
            </div>
          </div>

          <div class="card" style="width: 20rem;">
            <div class="card-block">
              <h4 class="card-title">Dodaj ofertę</h4>
              <p class="card-text">Dodaj nowy domek do oferty.</p>
<!--              <a href="/house/add" class="btn btn-primary">Dodaj swoje ogłoszenie</a>-->
              <v-btn color="primary" nuxt to="/user/add">
                Dodaj swoje ogłoszenie
              </v-btn>
            </div>
          </div>

          <div class="card" style="width: 20rem;">
            <div class="card-block">
              <h4 class="card-title">Profil</h4>
              <p class="card-text">Zobacz swój profil.</p>
              <!--              <a href="/house/add" class="btn btn-primary">Dodaj swoje ogłoszenie</a>-->
              <v-btn color="primary" nuxt to="/users/">
                Przejdź do swojego profilu.
              </v-btn>
            </div>
          </div>

          <hr class="my-3">
          <br>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  layout: 'default',
  // middleware: 'authenticated'
}
</script>
