<template>
  <v-form lazy-validation @submit="editUser">
    <h1>Edytujesz dane użytkownika: {{ user['name'] }}</h1>
    <v-text-field v-model="username" :placeholder="user['name']" :label="user['name'] " />
<!--    <v-text-field v-model="email" :placeholder="user['mail']" :label="user['mail'] " />-->
    <v-text-field v-model="email" label="Email" type="mail"/>
    <v-btn type="submit">
      Zmień
    </v-btn>
  </v-form>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData ({ $axios, params }) {
    return await $axios.$get(`http://localhost:8000/api/users/${params.id}`)
      .then(r => ({ user: r }))
  },
  methods: {
    async editUser ({ $axios, params }) {
      return await $axios.$post(`http://localhost:8000/api/users/${params.id}`,
        {
          name: this.name,
          password: this.password
        }).then(this.$router.push('/admin/users/'))
    }
  }
}
</script>
