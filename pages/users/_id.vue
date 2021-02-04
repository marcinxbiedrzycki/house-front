<template>
  <div>
    <h1>Hello {{ id }}</h1>
    <h1>Hello </h1>
    <h2> {{ user['name'] }}</h2>
<!--    <h2> {{ users['name'] }}</h2>-->
<!--    <h2> {{ users['name'] }}</h2>-->
  </div>
</template>

<script>
export default {
  layout: 'admin',
  async asyncData ({ $axios, params, $router }) {
    // return await $axios.$get(`http://localhost:8000/api/users/${params.id}`)
    //   .then(r => (console.log(r)))
    // .catch(r => console.log(r))
    // .catch( () => $router.push('/login') )
    return await $axios.$get(`http://localhost:8000/api/users/${params.id}`)
      .then(r => ({ user: r }))
  }
}
</script>
