<template>
  <div class="map-container clearfix">
    <gmap-map
      class="map"
      :center="posData"
      :zoom=6
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
        class="gmap-marker"
        v-for="flight in acList"
        :key="flight.Id"
        id="flights"
        :position="{lat: flight.Lat, lng: flight.Long}"
        :icon="imageFlight(flight.Trak)"
        :title="`${flight.Op}\nFrom: ${flight.From}\nTo: ${flight.To}`"
        :clickable="true"
        @click="toggleInfo(flight.Id)">
        <gmap-info-window
          :opened="info === flight.Id"
          @click="info = false">
          <div class="infoOp">{{flight.Op}}</div>
          From: {{flight.From}} <br>
          To: From: {{flight.To}}
        </gmap-info-window>
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
      info: false,
      currentMidx: null,
    };
  },
  methods: {
    imageFlight(x) {
      return {
        path: 'M 0,-200 -100,50 -15,50 0,-50 15,50 100,50  z',
        fillColor: 'dodgerblue',
        fillOpacity: 0.7,
        scale: 0.1,
        strokeColor: 'dodgerblue',
        strokeWeight: 1,
        rotation: x,
      };
    },
    toggleInfo(id) {
      if (this.info === id) {
        this.info = false;
      } else {
        this.info = id;
      }
      
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
    height: 100vh;
    padding-top: 1em;

    @include mqMin(768px) {
      height: 600px;
      padding: 1em;
    }
  }

  .map {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .infoOp {
    font-weight: bold;
  }

</style>
