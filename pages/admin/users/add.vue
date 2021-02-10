<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Dodaj nowego użytkownika</h1>
        <v-form lazy-validation @submit="postAdd">
          <v-text-field v-model="name" label="imie" />
          <v-text-field v-model="username" label="nazwa użytkownika" />
          <v-text-field v-model="email" label="email" />
          <v-text-field v-model="password" label="hasło" />
          <v-btn type="submit">
            Dodaj użytkownika
          </v-btn>
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
  middleware: 'isAdmin',
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
          username: this.username,
          email: this.email,
          password: this.password
        }).then(this.$router.push('/users/add/success'))
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
