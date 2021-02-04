<template>
  <div>
    <h1>User list!</h1>
    <ul>
      <li v-for="user in users" :key="user['id']" @click="clicked(user)"> {{ user['username'] }} {{ user['id'] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'notAuthenticated',
  methods: {
    clicked (user) {
      this.$router.push('/admin/users/edit' + user.id)
      // console.log('clickList fired with ' + users.id)
    }
  },
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('http://localhost:8000/api/users')
      .then(r => ({ id, users: r['hydra:member'] }))
  }
}
</script>
