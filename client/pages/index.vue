<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-4">Crypt-Oink-Explorer</h1>
        <p class="lead">Powered by&nbsp;<a href="https://www.crypt-oink.io/">Crypt-Oink</a></p>
        <b-button variant="primary" size="lg" :to="toTons">See Anyway</b-button>
      </div>
    </div>
    <div class="container">
      <div class="row mb-4">
        <div class="col-sm-4">
          <div class="card"><img class="card-img-top" src="https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/1_512x586.png"/>
            <div class="card-body">
              <b-button variant="primary" to="ton/1">See more</b-button>
            </div>
          </div>
        </div>
        <div class="col-sm-4 d-none d-sm-block">
          <div class="card"><img class="card-img-top" src="https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/2_512x586.png"/>
            <div class="card-body">
              <b-button variant="primary" to="ton/2">See more</b-button>
            </div>
          </div>
        </div>
        <div class="col-sm-4 d-none d-sm-block">
          <div class="card"><img class="card-img-top" src="https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/3_512x586.png"/>
            <div class="card-body">
              <b-button variant="primary" to="ton/3">See more</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  layout: 'top',
  components: {},
  computed: {
    toTons() {
      return `/tons/1/${this.$store.state.type}`
    }
  }
}
</script>
