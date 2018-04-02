<template>
  <div class="home-wrapper">
      <div class="page-headline text-xs-center text-sm-left">Air Traffic</div>
      <v-container>
        <v-content v-if="!posData">
         Can't display flights without location!
        </v-content>
      </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      posData: null,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.home-wrapper {
    position: relative;
}

.page-headline {
    padding: 0.625em;
    background: $defBlue;
    color: $inverted;
}
</style>
