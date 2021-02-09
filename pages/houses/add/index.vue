<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Dodaj ogłoszenie</h1>
        <div v-for="error in errors">
          <v-alert :key="error" color="red" elevation="8" prominent type="error">
            {{ error }}
          </v-alert>
        </div>
        <v-form lazy-validation >
          <v-text-field v-model="name" label="Nazwa" />
          <v-text-field type="number" v-model="price" label="cena" />
          <v-text-field v-model="description" label="opis" />
          <v-text-field v-model="visible" label="aktywne" />

<!--          <v-btn type="submit" @click="postAdd" color="primary" nuxt to='/houses/add/success'>-->
<!--          Dodaj ogłoszenie-->
<!--          </v-btn>-->
          <v-btn type="submit" @click="postAdd">
            Dodaj ogłoszenie
          </v-btn>
          <NuxtLink to="/">Wróć do strony głównej</NuxtLink>

<!--                    <v-btn type="submit" @click="back">-->
<!--            Powrót do menu-->
<!--          </v-btn>-->
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  // import UploadImage from 'vue-upload-image';
  components: {
    // UploadImage,
  },
  // middleware: 'authenticated',
  data () {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async postAdd ({ $axios }) {
      // eslint-disable-next-line no-undef
      await this.$axios.$post('http://localhost:8000/api/houses',
        {
          name: this.name,
          price: parseFloat(this.price),
          description: this.description,
          visible: this.visible
        }).then(this.$router.push('/houses/add/success')
      ).catch(error => this.errors.push(error.response.data.message))
    },
    async back ({ $router }) {
      // eslint-disable-next-line no-undef
      return await $router.push('/')
    }
  }
}
</script>

<style>
.custom-file {
  padding: 1.2rem;
  border-radius: .8rem;
  display: inline-block;
  border: 2px dashed #a0a0a0;
}

.custom-file input {
  display: none;
}
</style>
