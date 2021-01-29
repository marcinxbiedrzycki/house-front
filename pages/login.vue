<template>
  <!-- Default form login -->
  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <label for="name" class="grey-text">Your email</label>
    <input type="text" id="name" class="form-control"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
    <div class="text-center mt-4">
      <button class="btn btn-indigo" type="submit">Login</button>
      <button class="btn btn-primary" @click="postLogin">
        login
      </button>
    </div>
  </form>
  <!-- Default form login -->
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
