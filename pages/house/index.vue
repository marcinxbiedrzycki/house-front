<template>
  <div>
    <h1>Hosue list</h1>
    <ul>
      <li v-for="house in houses" :key="house[id]">{{ house['name'] }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'house',
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('http://localhost:8000/api/houses')
      .then(r => ({ id, houses: r['hydra:member'] }))
  }
}
</script>
