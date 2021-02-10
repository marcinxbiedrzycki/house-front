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

          <div class="large-12 medium-12 small-12 cell">
            <label>Files
              <input id="files" ref="files" type="file" multiple @change="handleFilesUpload()">
            </label>
          </div>
          <div class="large-12 medium-12 small-12 cell">
            <div v-for="(file, key) in files" class="file-listing">
              {{ file.name }} <span class="remove-file" @click="removeFile( key )">Remove</span>
            </div>
          </div>
          <br>
          <div class="large-12 medium-12 small-12 cell">
            <button @click="addFiles()">
              Add Files
            </button>
          </div>
          <br>
          <div class="large-12 medium-12 small-12 cell">
            <button @click="submitFiles()">
              Submit
            </button>
          </div>

          <v-btn type="submit" @click="postAdd">
            Dodaj ogłoszenie
          </v-btn>
          <NuxtLink to="/">
            Wróć do strony głównej
          </NuxtLink>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  data () {
    return {
      username: '',
      password: '',
      msg: 'Cargar Imagen de Perfil',
      image: null,
      errors: [],
      files: []
    }
  },
  methods: {
    addFiles () {
      this.$refs.files.click()
    },
    submitFiles () {
      const formData = new FormData()
      for (let i = 0; i < this.files.length; i++) {
        const file = this.files[i]
        formData.append('files[' + i + ']', file)
      }
      console.info(formData)
      console.log(formData)
      // this.$axios.post('http://localhost:8000/upload',
      //   formData,
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   }
      // ).then(function () {
      //   console.log('SUCCESS!!')
      // })
      //   .catch(function () {
      //     console.log('FAILURE!!')
      //   })
    },
    handleFilesUpload () {
      const uploadedFiles = this.$refs.files.files
      for (let i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i])
      }
    },
    removeFile (key) {
      this.files.splice(key, 1)
    }
  },
  async postAdd ({ $auth }) {
    // eslint-disable-next-line no-undef
    await this.$axios.$post('http://localhost:8000/api/houses', {
      name: this.name,
      price: Number(this.price),
      description: this.description,
      visible: Boolean(this.visible),
      ownerId: Number($auth.user.id)
    })
      .then(this.$router.push('/houses/add/success'))
      .catch(error => this.errors.push(error.response.data.message))
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
