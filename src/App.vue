<template>
  <div id="app">
    <webapp-header></webapp-header>
      <router-link to="/home" class="btn from-top"></router-link>
      <router-link to="/about" class="btn from-top"></router-link>
      <router-link to="/portfolio" class="btn from-top"></router-link>
    <router-view/>
    
  </div>
  
</template>

<script>
import Header from './views/Header.vue'

export default {
  name: 'App',
  components: {
    'webapp-header':Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
</style>
