<template>
<!--  <div>-->
<!--    <h1>User list!</h1>-->
<!--    <ul>-->
<!--      <li v-for="user in users" :key="user['id']" @click="clicked(user)"> {{ user['username'] }} {{ user['id'] }}</li>-->
<!--    </ul>-->
<!--  </div>-->



  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list of items with v-for</h3>
    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in users" :key="user['id']" @click="clicked(user)">
        <td>{{ user['username'] }} </td>
        <td>{{ user['id'] }}</td>
<!--        <td>{{user.role}}</td>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import VueTableDynamic from 'vue-table-dynamic'

export default {
  // eslint-disable-next-line no-undef,vue/no-unused-components
  // components: { VueTableDynamic },
  layout: 'admin',
  middleware: 'notAuthenticated',
  methods: {
    clicked (user) {
      this.$router.push('/admin/users/edit/' + user.id)
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
