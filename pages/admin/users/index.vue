<template>
  <div class="container">
    <div v-for="users in users" :key="users['id']" class="col-xs-12 col-md-6 bootstrap snippets bootdeys">
      <v-card>
        <div class="product-content product-wrap clearfix">
          <div class="row">
            <div class="col-md-5 col-sm-12 col-xs-12">
              <div class="product-image">
                <img
                  alt=""
                  style="width:600px;"
                  title=""
                  class="img-circle img-thumbnail isTooltip"
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  data-original-title="Usuario"
                >
                <span class="tag2 hot" />
              </div>
            </div>
            <div class="col-md-7 col-sm-12 col-xs-12">
              <div class="product-deatil">
                <h5 class="name">
                  <router-link :to="'/admin/users/' + users['id']">
                    {{ users['name'] }}
                  </router-link>
                </h5>
                <p class="price-container">
                  <span>$99</span>
                </p>
                <span class="tag1" />
              </div>
              <div class="description">
                <p />
              </div>
              <div class="product-info smart-form">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <nuxt-link to="/houses['id']" prefetch>
                      About page prefetched
                    </nuxt-link>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="rating">
                      <label for="stars-rating-5"><i class="fa fa-star" /></label>
                      <label for="stars-rating-4"><i class="fa fa-star" /></label>
                      <label for="stars-rating-3"><i class="fa fa-star text-primary" /></label>
                      <label for="stars-rating-2"><i class="fa fa-star text-primary" /></label>
                      <label for="stars-rating-1"><i class="fa fa-star text-primary" /></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line no-undef,vue/no-unused-components
  // components: { VueTableDynamic },
  layout: 'admin',
  middleware: 'isAdmin',
  // methods: {
  // clicked (user) {
  //   this.$router.push('/admin/users/edit/' + user.id)
  //   // console.log('clickList fired with ' + users.id)
  // }
  // },
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('http://localhost:8000/api/users')
      .then(r => ({ id, users: r['hydra:member'] }))
  }
}

</script>

<style>
body{
  background:#EEE;
}
.user-profile-2 {
  text-align: center;
  position: relative;
  margin-top:10px;
}

.box-info {
  position: relative;
  padding: 15px;
  background: #fff;
  color: #5b5b5b;
  margin-bottom: 20px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  border-bottom:4px solid #DDD;
}

.user-profile-2 .header-cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 130px;
  overflow: hidden;
  z-index: 1;
}

.user-profile-2 .user-profile-inner {
  z-index: 2;
  position: relative;
}

.user-profile-2 .user-profile-inner h4.white {
  color: #fff;
}

.user-profile-2 .user-profile-inner img.profile-avatar {
  box-shadow: 0 0 0 5px rgba(255,255,255,1);
  -moz-box-shadow: 0 0 0 5px rgba(255,255,255,1);
  -webkit-box-shadow: 0 0 0 5px rgba(255,255,255,1);
  border: none;
  width:100px;
  height:100px;
}

.user-button {
  margin: 15px 0;
}
</style>
