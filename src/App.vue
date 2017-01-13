<template>
  <div id="app">
    <app-menu></app-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import menu from './components/menu'
export default {
  name: 'app',
  components: {
    appMenu: menu
  }
}
</script>
<style lang="scss">
html,#app{width: 768px;overflow-x: hidden;}
</style>
