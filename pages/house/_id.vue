<template>
  <div>
    <h1>Hello {{ id }}</h1>
    <ul>
      <li v-for="rate in rates" :key="rate.currency">{{ rate.currency }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('http://localhost:8000/api/houses/id')
      .then(r => ({ id, houses: console.log(r[id]) }))
  }
}
</script>
