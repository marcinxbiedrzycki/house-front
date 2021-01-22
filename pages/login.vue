<template>
  <div class="container" style="background-color: red">
    <h1>Sign in to access the secret page</h1>
<!--    <h2> {{ id }}</h2>-->
    <div>
      <label for="name">
        <input v-model="name" id="name" />
        <!--        <v-input id="name" v-model="name" />-->
<!--        <input id="password" type="password" value="test">-->
      </label>
      <label for="password">
        <input v-model="password" id="password" />
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  methods: {
    async postLogin ({ $axios }) {
      // eslint-disable-next-line no-undef
      const token = await this.$axios.$post('http://localhost:8000/authentication_token',
        {
          name: this.name,
          password: this.password
        }).then(res => res.token)
      this.$store.commit('setAuth', token) // mutating to store for client rendering
      Cookie.set('auth', token) // saving token in cookie for server rendering
      this.$router.push('/')
    }
  }
}
</script>


// eslint-disable-next-line require-await
// async asyncData () {
//   return { id: 'asdasd' }
// },
