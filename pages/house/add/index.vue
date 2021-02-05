<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Dodaj ogłoszenie</h1>
        <v-form lazy-validation @submit="postAdd">
          <v-text-field v-model="username" label="Nazwa" />
          <v-text-field v-model="username" label="cena" />
          <v-text-field v-model="username" label="opis" />
          <v-text-field v-model="username" label="data" />

          <label class="custom-file" for="file">
            <!--              {{files.length ? `(${files.length}) files are selected` : "Choose files"}}-->
            <input
              id="file"
              ref="fileInput"
              multiple
              name="file"
              type="file"
              @change="handleSelectedFiles"
            >
          </label>

          <!--Show Selected Files-->
          <div class="large-12 medium-12 small-12 cell">
            <div v-for="(file, key) in files" class="file-listing">
              {{ file.name }}
              <v-btn class="remove-file" @click="removeFile( key )">Remove </v-btn>
            </div>
          </div>

          <!--Submit Button && Progress Bar-->
          <div>
            <v-btn color="blue" @click="upload">
              Start Upload
            </v-btn>
            - Upload progress : {{ this.progress }}
          </div>
          <!--            <v-text-field v-model="password" label="Hasło" type="password" />-->
          <v-btn type="submit">
            Dodaj ogłoszenie
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>

<!--  <v-card>-->
<!--    <v-card-title class="headline">-->
<!--      <h1>Dodaj nową oferte</h1>-->
<!--        <label for="name">-->
<!--          <br>-->
<!--          <input v-model="name" placeholder="edit me" id="name">-->
<!--        </label>-->
<!--        <label for="password">-->
<!--          <input v-model="password" id="password" />-->
<!--        </label>-->
<!--        <br>-->
<!--    </v-card-title>-->
<!--    <button class="btn-primary" @click="postAdd">-->
<!--      Dodaj-->
<!--    </button>-->
<!--    <button class="btn-danger" @click="back">-->
<!--      Anuluj-->
<!--    </button>-->
<!--  </v-card>-->

<!--  <div class="container" style="background-color: cyan">-->

<!--  </div>-->
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  // import UploadImage from 'vue-upload-image';
  components: {
    // UploadImage,
  },
  middleware: 'notAuthenticated',
  data () {
    return {
      files: [],
      progress: 0
    }
  },
  computed: {
    /* The FormData : Here We Make A Form With Images Data To Submit. */
    form () {
      const form = new FormData()

      this.files.forEach((file, index) => {
        form.append('files[' + index + ']', file)
      })

      return form
    }
  },
  methods: {
    async postAdd ({ $axios }) {
      // eslint-disable-next-line no-undef
      return await this.$axios.$post('http://localhost:8000/api/users',
        {
          name: this.name,
          pole: wartość,
          pole2: wartość,
          password: this.password
        }).then(this.$router.push('/house/add/success'))
    },
    async back () {
      return await this.$router.push('/')
    },
    handleSelectedFiles () {
      const selectedFiles = this.$refs.fileInput.files

      for (let i = 0; i < selectedFiles.length; i++) {
        /* Check Already Has Been Selected Or Not ... */
        const isFileExists = this.files.find(file => file.type === selectedFiles[i].type && file.name === selectedFiles[i].name && file.size === selectedFiles[i].size && file.lastModified === selectedFiles[i].lastModified)

        if (!isFileExists) { this.files.push(selectedFiles[i]) }
      }
    },
    removeFile (key) {
      this.files.splice(key, 1)
    },
    upload () {
      const config = {
        onUploadProgress: progressEvent => this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      }

      this.$axios.post('host-url/upload-image', this.form, config)
        .then((res) => {
          this.progress = 0
          this.files = []

          console.log(res)
        })
        .catch(err => console.log(err))
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
