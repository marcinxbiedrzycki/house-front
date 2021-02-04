<template>
  <div>
    <h1>User list!</h1>
    <ul>
      <li v-for="user in users" :key="user['id']"> {{ user['username'] }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'default',
  middleware: 'notAuthenticated',
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('http://localhost:8000/api/users')
      .then(r => ({ id, users: r['hydra:member'] }))
  }
}
</script>
