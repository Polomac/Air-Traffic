<template>
  <div class="map-container clearfix">
    <gmap-map
      class="map"
      :center="posData"
      :zoom="7">
      <gmap-marker
        :position="posData">
      </gmap-marker>
  </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'positionMap',
  props: ['posData'],
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

  .map-container {
    position: relative;
    width: 100%;
    height: 300px;
    padding: 1em;
  }

  .map {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
</style>
