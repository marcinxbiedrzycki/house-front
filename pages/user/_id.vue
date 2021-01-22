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
  layout: 'admin',
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('https://api.nbp.pl/api/exchangerates/tables/a/')
      .then(r => ({ id, rates: r[0].rates }))
  }
}
</script>
