<template>
  <b-input-group>
    <b-form-input name="inputTokenId" type="number" placeholder="ID" v-model="inputTokenId"></b-form-input>
    <b-input-group-append>
      <b-button text="Go" variant="primary" @click="click">Go</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'SearchTokenId',
  props: {
    routeName: {
      type: String,
      default() {
        return ''
      }
    },
    input: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      inputTokenId: ''
    }
  },
  watch: {
    input: {
      handler(newVal) {
        this.inputTokenId = newVal
      }
    }
  },
  methods: {
    click() {
      const tokenId = Number(this.inputTokenId)
      this.$emit('click', tokenId)
    }
  }
}
</script>

<style scoped></style>
