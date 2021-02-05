<template>
  <div>
    <h1>Hello {{ id }}</h1>
    <h1>Hello </h1>
    <h2> {{ user['name'] }}</h2>

    <div class="container" style="padding-top: 60px;">
      <h1 class="page-header">Edit Profile</h1>
      <div class="row">
        <!-- left column -->
        <div class="col-md-4 col-sm-6 col-xs-12">
          <div class="text-center">
            <img src="https://fb-s-b-a.akamaihd.net/h-ak-xfa1/v/t1.0-1/c9.0.160.160/p160x160/420257_10151474103567424_1224916620_n.jpg?oh=0932a7be9adb74fd949d0211d9128ad7&oe=58BA7A17&__gda__=1488564886_feb0fc02d6307304a3d43aecff5a804a" class="avatar img-circle img-thumbnail" alt="avatar">
            <h6>Upload a different photo...</h6>
            <input type="file" class="text-center center-block well well-sm">
          </div>
        </div>
        <!-- edit form column -->
        <div class="col-md-8 col-sm-6 col-xs-12 personal-info">
          <div class="alert alert-info alert-dismissable">
            <a class="panel-close close" data-dismiss="alert">×</a>
            <i class="fa fa-coffee"></i>
            This is an <strong>.alert</strong>. Use this to show important messages to the user.
          </div>
          <h3>Personal info</h3>
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label class="col-lg-3 control-label">First name:</label>
              <div class="col-lg-8">
                <input class="form-control" value="Estela" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Last name:</label>
              <div class="col-lg-8">
                <input class="form-control" value="Silva" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Company:</label>
              <div class="col-lg-8">
                <input class="form-control" value="http://tuconsultoraseo.com" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Email:</label>
              <div class="col-lg-8">
                <input class="form-control" value="carmenestelasi@gmail.com" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Time Zone:</label>
              <div class="col-lg-8">
                <div class="ui-select">
                  <select id="user_time_zone" class="form-control">
                    <option value="Hawaii">(GMT-10:00) Hawaii</option>
                    <option value="Alaska">(GMT-09:00) Alaska</option>
                    <option value="Pacific Time (US & Canada)">(GMT-08:00) Pacific Time (US & Canada)</option>
                    <option value="Arizona">(GMT-07:00) Arizona</option>
                    <option value="Mountain Time (US & Canada)">(GMT-07:00) Mountain Time (US & Canada)</option>
                    <option value="Central Time (US & Canada)" selected="selected">(GMT-06:00) Central Time (US & Canada)</option>
                    <option value="Eastern Time (US & Canada)">(GMT-05:00) Eastern Time (US & Canada)</option>
                    <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Username:</label>
              <div class="col-md-8">
                <input class="form-control" value="janeuser" type="text">
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Password:</label>
              <div class="col-md-8">
                <input class="form-control" value="11111122333" type="password">
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label">Confirm password:</label>
              <div class="col-md-8">
                <input class="form-control" value="11111122333" type="password">
              </div>
            </div>
            <div class="form-group">
              <label class="col-md-3 control-label"></label>
              <div class="col-md-8">
                <input class="btn btn-primary" value="Save Changes" type="button">
                <span></span>
                <input class="btn btn-default" value="Cancel" type="reset">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


<!--    <v-card>-->
<!--      <v-card-title class="headline">-->
<!--        <h1>Dodaj nową oferte</h1>-->
<!--        <label for="name">-->
<!--          <br>-->
<!--          <input v-model="name" placeholder="edit me" id="name">-->
<!--        </label>-->
<!--        <label for="password">-->
<!--          <input v-model="password" id="password" />-->
<!--        </label>-->
<!--        <br>-->
<!--      </v-card-title>-->
<!--      <button class="btn-primary" @click="postAdd">-->
<!--        Dodaj-->
<!--      </button>-->
<!--      <button class="btn-danger" @click="back">-->
<!--        Anuluj-->
<!--      </button>-->
<!--    </v-card>-->


<!--    <h2> {{ users['name'] }}</h2>-->
<!--    <h2> {{ users['name'] }}</h2>-->
  </div>
</template>

<script>
export default {
  layout: 'default',
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


async updateData ({ $axios, params }) {
return await $axios.post(`http://localhost:8000/api/users/${params.id}`,
{
name: this.name,
password: this.password
}).then(r => ({ user: r }), this.$router.push('/login'))
}
