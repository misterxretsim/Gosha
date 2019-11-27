<template>
  <div id="app">
    <my_main/>
  </div>
</template>

<script>
import my_main from './components/my_main.vue'

export default {
  name: 'app',
  components: {
    my_main
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
