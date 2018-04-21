<template>
  <div class="map-container clearfix">
    <gmap-map
      class="map"
      :center="posData"
      :zoom="7"
      :options="{circle: circle}">
      <gmap-marker
        id="map-center"
        :position="posData"
        :title="'Current Location'"
        :icon="imageCenter">
         <gmap-circle :options="circle"
                      :center="posData">
        </gmap-circle>
      </gmap-marker>
      <gmap-marker
        v-for="flight in acList"
        :key="flight.Id"
        id="flights"
        :position="{lat: flight.Lat, lng: flight.Long}"
        :icon="imageFlight(flight.Trak)"
        :title="`${flight.Op}\nFrom: ${flight.From}\nTo: ${flight.To}`">
      </gmap-marker>
  </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'positionMap',
  data() {
    return {
      imageCenter: {
        url: 'static/flight.png',
      },
      circle: {
        radius: 150000,
        strokeColor: 'crimson',
        strokeOpacity: 0.6,
        strokeWeight: 4,
        fillColor: 'crimson',
        fillOpacity: 0.1,
      },
      rotation: 0,
    };
  },
  methods: {
    imageFlight(x) {
      return {
        path: 'M 0,-200 -100,50 0,-50 100,50  z',
        fillColor: 'dodgerblue',
        fillOpacity: 0.5,
        scale: 0.2,
        strokeColor: 'dodgerblue',
        strokeWeight: 1,
        rotation: x,
      };
    },
  },
  props: ['posData', 'acList'],
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

  .map-container {
    position: relative;
    width: 100%;
    height: 600px;
    padding: 1em;
  }

  .map {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
</style>
