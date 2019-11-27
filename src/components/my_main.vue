<template>
  <div class="my_main">
    <plus_block/>
    <blocks/>
  </div>
</template>

<script>
  import plus_block from './plus_block.vue'
  import blocks from './blocks.vue'

export default {
  name: 'my_main',
  components: {
    plus_block,
    blocks
  },
  created() {
    this.$store.dispatch('getBlocks')
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
