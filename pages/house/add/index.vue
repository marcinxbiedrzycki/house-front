<template>
  <v-card>
    <v-card-title class="headline">
      <h1>Dodaj nową oferte</h1>
        <label for="name">
          <br>
          <input v-model="name" placeholder="edit me" id="name">
        </label>
        <label for="password">
          <input v-model="password" id="password" />
        </label>
        <br>
    </v-card-title>
    <button class="btn-primary" @click="postAdd">
      Dodaj
    </button>
    <button class="btn-danger" @click="back">
      Anuluj
    </button>
  </v-card>

<!--  <div class="container" style="background-color: cyan">-->

<!--  </div>-->
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  middleware: 'notAuthenticated',
  methods: {
    async postAdd ({ $axios }) {
      // eslint-disable-next-line no-undef
      return await this.$axios.$post('http://localhost:8000/api/users',
        {
          name: this.name,
          pole : wartość,
          pole2 : wartość,
          password: this.password
        }).then(this.$router.push('/house/add/success'))
    },
    async back () {
      return await this.$router.push('/')
    }
  }
}
</script>
