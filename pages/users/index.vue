<template>
  <div>
    <h1>User list!</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/users/${user.id}/profile`" prefetch>
          <strong>
            {{ user.id }}
          </strong>
          =&gt; {{ user.username }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $axios }) {
    return await $axios.$get('http://localhost:8000/api/users')
      .then(r => ({ users: r['hydra:member'] }))
  }
}
</script>
