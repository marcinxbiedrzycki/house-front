<template>
  <div class="container" style="background-color: green">
    <h1>Register to access house share</h1>
    <div>
      <label for="name">
        <input v-model="name" id="name"/>
      </label>
      <label for="email">
        <input v-model="email" id="email"/>
      </label>
      <label for="password">
        <input v-model="password" id="password"/>
      </label>
      <button @click="postRegister">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>

export default {
  middleware: 'notAuthenticated',
  methods: {
    async postRegister ({ $axios }) {
      // eslint-disable-next-line no-undef
      return await this.$axios.$post('http://localhost:8000/api/users',
        {
          name: this.name,
          password: this.password
        }).then(this.$router.push('/login'))
    }
  }
}
</script>
