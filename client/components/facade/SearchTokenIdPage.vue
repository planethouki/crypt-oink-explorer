<template>
  <b-input-group>
    <b-form-input name="formInput" type="number" placeholder="Token ID" v-model="formInput" min="1" :max="totalSupply"></b-form-input>
    <b-input-group-append>
      <b-button text="Go" variant="primary" @click="click">Go</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'SearchTokenIdPage',
  props: {
    totalSupply: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
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
      formInput: ''
    }
  },
  watch: {
    input: {
      handler(newVal) {
        this.formInput = newVal
      }
    }
  },
  methods: {
    click() {
      const tokenId = Number(this.formInput)
      const page = Math.ceil((this.totalSupply - tokenId + 1) / this.perPage)
      this.$emit('click', page)
    }
  }
}
</script>

<style scoped></style>
