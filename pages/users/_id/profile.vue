<template>
  <div class="container bootstrap snippets bootdey">
    <div class="panel-body inf-content">
      <div class="row">
        <div class="col-md-4">
          <img
            alt=""
            style="width:600px;"
            title=""
            class="img-circle img-thumbnail isTooltip"
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            data-original-title="Usuario"
          >
        </div>
        <div class="col-md-6">
          <strong>Information</strong><br>
          <div class="table-responsive">
            <table class="table table-user-information">
              <tbody>
                <tr>
                  <td>
                    <strong>
                      <span class="glyphicon glyphicon-asterisk text-primary" />
                      Identificacion
                    </strong>
                  </td>
                  <td class="text-primary">
                    {{ user.id }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <span class="glyphicon glyphicon-user  text-primary" />
                      Name
                    </strong>
                  </td>
                  <td class="text-primary">
                    {{ user.name }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <span class="glyphicon glyphicon-bookmark text-primary" />
                      Username
                    </strong>
                  </td>
                  <td class="text-primary">
                    {{ user.username }}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      <span class="glyphicon glyphicon-eye-open text-primary" />
                      Roles
                    </strong>
                  </td>
                  <td class="text-primary">
                    <ul v-for="role in user.roles" :key="role">
                      <li>{{ role }}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  // middleware: 'authenticated',
  async asyncData ({ $axios, params }) {
    return await $axios.$get(`http://localhost:8000/api/users/${params.id}`)
      .then(r => ({ user: r }))
  },
  methods: {
    async returnAction ({ $router }) {
      return await this.$router.push('/')
    }
  }
}
</script>

<style>
.inf-content{
  border:1px solid #DDD;
  -webkit-border-radius:10px;
  -moz-border-radius:10px;
  border-radius:10px;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.3);
}
</style>
