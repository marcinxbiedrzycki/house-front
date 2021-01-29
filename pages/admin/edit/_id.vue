<template>
  <div>
    <h1>Edot {{ user['name'] }}</h1>
    <h1>Hello </h1>
    <h2> {{ user['name'] }}</h2>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData({ $axios, params }) {
    const id = params.id
    // const z = await $axios.$get('http://localhost:8000/api/users/1')
    //   .then(r => (console.log(r)))
    return await $axios.$get('http://localhost:8000/api/users/1')
      .then(r => ({ id, user: r }))
  }
}
</script>
