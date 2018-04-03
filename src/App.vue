<template>
  <div id="app">
    <app-header></app-header>
      <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from '../src/components/Header';
import appFooter from '../src/components/Footer';

export default {
  name: 'App',
  components: {
    'app-header': appHeader,
    'app-footer': appFooter,
  },
};
</script>

<style lang="scss">
@import '../src/assets/styles/reset';
@import '../src/assets/styles/default';

#app {
}
</style>
