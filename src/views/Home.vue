<template lang="pug">
  div
    .jumbotron
      h1.display-4 Crypt-Oink-Explorer
      p.lead Collect your tons.
      b-button(variant="primary" size="lg" to="/tons") See Anyway
    .container
      .row
        .col-sm-4
          .card
            img.card-img-top(src="https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/1_512x586.png")
            .card-body
              b-button(variant="primary" to="ton/1") See more
        .col-sm-4.d-none.d-sm-block
          .card
            img.card-img-top(src="https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/2_512x586.png")
            .card-body
              b-button(variant="primary" to="ton/2") See more
        .col-sm-4.d-none.d-sm-block
          .card
            img.card-img-top(src="https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/3_512x586.png")
            .card-body
              b-button(variant="primary" to="ton/3") See more
      hr.my-4
      p
        a(href="https://github.com/planethouki/crypton-explorer") Github
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
};
</script>
