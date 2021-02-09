<template>
  <div class="container bootstrap snippets bootdey">
    <div class="panel-body inf-content">
      <div class="row">
        <div class="col-md-4">
          <img alt="" style="width:600px;" title="" class="img-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario">
          <ul title="Ratings" class="list-inline ratings text-center">
            <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
            <li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
          </ul>
        </div>
        <div class="col-md-6">
          <strong>Information</strong><br>
          <div class="table-responsive">
            <table class="table table-user-information">
              <tbody>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-asterisk text-primary"></span>
                    Identificacion
                  </strong>
                </td>
                <td class="text-primary">
                  123456789
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-user  text-primary"></span>
                    Name
                  </strong>
                </td>
                <td class="text-primary">
                  Bootdey
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-cloud text-primary"></span>
                    Lastname
                  </strong>
                </td>
                <td class="text-primary">
                  {{ user['name'] }}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-bookmark text-primary"></span>
                    Username
                  </strong>
                </td>
                <td class="text-primary">
                  <router-link :to="'/admin/users/' + users['id']">
                    {{ users['name']}}
                  </router-link>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-eye-open text-primary"></span>
                    Role
                  </strong>
                </td>
                <td class="text-primary">
                  Admin
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-envelope text-primary"></span>
                    {{user['email']}} Email
                  </strong>
                </td>
                <td class="text-primary">
                  noreply@email.com
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    created
                  </strong>
                </td>
                <td class="text-primary">
                  20 jul 20014
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Modified
                  </strong>
                </td>
                <td class="text-primary">
                  20 jul 20014 20:00:00
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
<!--                    <vue-button class="glyphicon glyphicon-calendar text-primary"></vue-button>-->
                    <router-link :to="'/admin/users/' + users['id'] + '/edit'">
                      Edytuj
                    </router-link>

                    </v-btn>
                  </strong>
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
  async asyncData ({ $axios, params }) {
  // return await $axios.$get(`http://localhost:8000/api/users/${params.id}`)
  //   .then(r => (console.log(r)))
  // .catch(r => console.log(r))
  // .catch( () => $router.push('/login') )
    return await $axios.$get(`http://localhost:8000/api/users/${params.id}`)
      .then(r => ({user: r}))
  },
  methods: {
    middleware: 'authenticated',
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
