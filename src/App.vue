<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '../src/assets/styles/reset';
@import '../src/assets/styles/default';

#app {
}
</style>
