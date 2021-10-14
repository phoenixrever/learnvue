<template>
  <div id="app">
    <main-tab-bar v-if="!detail"></main-tab-bar>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'

  export default {
    name: 'App',
    data() {
      return {
        detail: false
      }
    },
    watch: {
      $route(to, from) {
        if (to.path.indexOf("detail") > 0) {
          this.detail = true
        }else{
          this.detail = false
        }
      }
    },
    components: {
      MainTabBar
    },
  }
</script>
<style>
  @import 'assets/css/base.css';
</style>
