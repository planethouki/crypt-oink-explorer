<template>
  <div>
    <a
      target="_blank"
      rel="noreferrer noopener"
      :href="`https://opensea.io/accounts/${account}`"
      >{{ account }}</a
    >
  </div>
</template>

<script>
export default {
  name: 'AccountLinkFacade',
  props: {
    account: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped></style>
