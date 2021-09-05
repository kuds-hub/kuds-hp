<template>
  <div id="app">
    <HeaderMenu />
    <router-view />
    <div id="nav">
      <router-link to="/">TopPage</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderMenu from '@/components/HeaderMenu/HeaderMenu.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'AppVue',
  components: {
    HeaderMenu,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
