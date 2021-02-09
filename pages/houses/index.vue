<template>
  <div class="container">
    <div v-for="houses in houses" :key="houses['id']" @click="" class="col-xs-12 col-md-6 bootstrap snippets bootdeys">
      <v-card>
      <div class="product-content product-wrap clearfix">
        <div class="row">
          <div class="col-md-5 col-sm-12 col-xs-12">
            <div class="product-image">
              <img src="../../static/domek1.jpg" height="220" width="230" alt="194x228" class="img-responsive">
              <span class="tag2 hot">
						</span>
            </div>
          </div>
          <div class="col-md-7 col-sm-12 col-xs-12">
            <div class="product-deatil">
              <h5 class="name">
                <router-link :to="'/houses/' + houses['id']">
                  {{ houses['name']}}
                </router-link>
              </h5>
              <p class="price-container">
                <span>$99</span>
              </p>
              <span class="tag1"></span>
            </div>
            <div class="description">
              <p>{{ houses['description'] }} </p>
            </div>
            <div class="product-info smart-form">
              <div class="row">
                <div class="col-md-6 col-sm-6 col-xs-6">
                  <nuxt-link to="/houses['id']" prefetch>About page prefetched</nuxt-link>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6">
                  <div class="rating">
                    <label for="stars-rating-5"><i class="fa fa-star"></i></label>
                    <label for="stars-rating-4"><i class="fa fa-star"></i></label>
                    <label for="stars-rating-3"><i class="fa fa-star text-primary"></i></label>
                    <label for="stars-rating-2"><i class="fa fa-star text-primary"></i></label>
                    <label for="stars-rating-1"><i class="fa fa-star text-primary"></i></label>
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
  layout: 'default',
  middleware: 'notAuthenticated',
  async asyncData ({ $axios, params }) {
    const id = params.id
    return await $axios.$get('http://localhost:8000/api/houses')
      .then(r => ({ id, houses: r['hydra:member'] }))
  }
}
</script>
