<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Zaloguj się</h1>
        <div v-for="error in errors">
          <v-alert :key="error" color="red" elevation="8" prominent type="error">
            {{ error }}
          </v-alert>
        </div>
        <v-form lazy-validation @submit="postLogin">
          <v-text-field v-model="username" label="Nazwa użytkownika" />
          <v-text-field v-model="password" label="Hasło" type="password" />
          <v-btn type="submit" @click="postLogin">
            Zaloguj
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  data () {
    return {
      username: '',
      password: '',
      errors: []
    }
  },
  methods: {
    async postLogin (e) {
      e.preventDefault()
      this.errors = []
      await this.$axios.$post('http://localhost:8000/authentication_token', {
        name: this.username,
        password: this.password
      }).then(({ token }) => {
        this.$store.commit('setAuth', token)
        Cookie.set('auth', token)
        this.$router.push('/')
      }).catch(error => this.errors.push(error.response.data.message))
    }
  }
}
</script>
