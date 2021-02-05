<template>
  <div>
    <h1>Dostępne oferty</h1>
<!--    <ul>-->
<!--      <li v-for="house in houses" :key="house[id]">{{ house['name'] }}</li>-->
<!--    </ul>-->

    <table class="table table-striped table-bordered">
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="house in houses" :key="house['id']" @click="clicked(house)">
        <td>{{ house['id'] }} </td>
        <td>{{ house['id'] }}</td>
        <!--        <td>{{user.role}}</td>-->
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('http://localhost:8000/api/houses')
      .then(r => ({ id, houses: r['hydra:member'] }))
  }
}
</script>
