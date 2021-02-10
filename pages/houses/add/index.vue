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
        <v-form lazy-validation>
          <v-text-field v-model="name" label="Nazwa" />
          <v-text-field v-model="price" type="number" label="cena" />
          <v-text-field v-model="description" label="opis" />
          <v-text-field v-model="visible" label="aktywne" />

          <v-file-input label="File input" :value="current" />

          <!--          <v-file-input-->
          <!--            :label="image"-->
          <!--            accept="image/*"-->
          <!--            prepend-icon="mdi-camera"-->
          <!--            @change="updateAvatar"-->
          <!--            hide-details-->
          <!--            outlined-->
          <!--            truncate-length="15"-->
          <!--          ></v-file-input>-->

          <!--          <input type="file" name="image" accept="image/*" @change="getImage($event)">-->
          <!--          <button @click="updateAvatar">-->
          <!--            Dodaj zdjęcie-->
          <!--          </button>-->

          <v-btn type="submit" @click="postAdd">
            Dodaj ogłoszenie
          </v-btn>
          <NuxtLink to="/">
            Wróć do strony głównej
          </NuxtLink>

          <!--                    <v-btn type="submit" @click="back">-->
          <!--            Powrót do menu-->
          <!--          </v-btn>-->
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

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
      msg: 'Cargar Imagen de Perfil',
      image: null,
      errors: []
    }
  },
  methods: {
    data () {
      console.log(123123)
      return {
        current: new File(['foo'], 'foo.txt', {
          type: 'text/plain'
        })
      }
    },
    async postAdd () {
      // eslint-disable-next-line no-undef
      await this.$axios.$post('http://localhost:8000/api/houses', {
        name: this.name,
        price: Number(this.price),
        description: this.description,
        visible: Boolean(this.visible)
      })
        .then(this.$router.push('/houses/add/success'))
        .catch(error => this.errors.push(error.response.data.message))
    },
    async back ({ $router }) {
      // eslint-disable-next-line no-undef
      return await $router.push('/')
    },
    getImage (event) {
      // Asignamos la imagen a  nuestra data
      this.image = event.target.files[0]
    },
    updateAvatar () {
      // Creamos el formData
      // const data = new FormData()
      // data.append('avatar', this.image)
      // data.append('_method', 'POST')
      // Enviamos la petición
      axios.post('http://localhost:8000/upload', {
        image: event.target.files[0]
      })
        .then((response) => {
          console.log(response)
        })
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
