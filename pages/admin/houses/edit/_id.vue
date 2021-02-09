<template>
  <div>
    <!--    <h1>Edot {{ users['name'] }}</h1>-->
    <h1>Hello </h1>
        <h2> {{ user['id'] }}</h2>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'authenticated',
  async asyncData ({ $axios, params }) {
    // const z = await $axios.$get(`http://localhost:8000/api/houses/{{params.id}}`, {
    //   index: params.id
    // })
    //   .then(r => (console.log(r, params)))
    return await $axios.$get(`http://localhost:8000/api/houses/{params.id}`)
      .then(r => ({ id, user: r }))
  }
}
</script>
