<template>
  <button
    v-on:click="buy(item)"
    v-bind:disabled="!item.active"
  >Buy ${{ item.price }}</button>
</template>

<script>
export default { 
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    buy(item) {
      this.$emit("bought", item)
    }
  }
}
</script>