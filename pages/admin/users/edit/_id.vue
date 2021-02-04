<template>
  <div>
    <!--    <h1>Edot {{ users['name'] }}</h1>-->
    <h1>Hello </h1>
    <!--    <h2> {{ users['id'] }}</h2>-->
  </div>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData ({ $axios, params }) {
    // const id = params.id
    // const z = await $axios.$get('http://localhost:8000/api/users/index', {
    //   index: params.id
    // })
    //   .then(r => (console.log(r, params)))
    return await $axios.$get(`http://localhost:8000/api/users/${params.id}`)
      .then(r => ({ user: r}))
  }
}
</script>
