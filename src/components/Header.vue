<template>
  <div class="header-wrapper page-headline">
    <label class="app-title">
      Air Traffic
    </label>
  </div>
</template>

<script>
export default {
  name: 'appHeader',
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.header-wrapper {
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  text-align: center;

  @include mqMin(768px) {
    text-align: left;
  }
}

.page-headline {
    padding: 0.625em;
    background: $defBlue;
    color: $inverted;
}
</style>
