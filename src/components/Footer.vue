<template>
  <div class="footer-wrapper page-headline">
    <label class="app-title">
      &copy; 2018 Air Traffic
    </label>
  </div>
</template>

<script>
export default {
  name: 'appFooter',
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.footer-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.page-headline {
    padding: 0.625em;
    font-size: 0.75em;
    background: $defBlue;
    color: darken($defBlue, 20%);
}
</style>
