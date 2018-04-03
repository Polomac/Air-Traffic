<template>
  <div class="spinner-wrapper">
    <spinner :status="active"
             class="spinn"
             :size="spinnerSize"
             :depth="spinnerDepth"></spinner>
  </div>
</template>

<script>
import Spinner from 'vue-spinner-component/src/Spinner';

export default {
  name: 'spinnerComponent',
  data() {
    return {
      active: true,
      spinnerSize: 60,
      spinnerDepth: 8,
    };
  },
  components: {
    Spinner,
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.spinner-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.spinn {
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 2000;
}
</style>
