<template>
  <div class="home-wrapper">
    <div class="no-loc-notification" v-if="!posData">
      <label class="no-loc-info">
        Can't display data withouth location!
      </label>
      <i class="material-icons warning">warning</i>
    </div>
    <div v-if="posData.lat" class="current-position">
      <h4>Your current position:</h4>
      <span class="current-position-label">Latitude: {{posData.lat | shortenDigit}}</span>
      <span class="current-position-label">Longitude: {{posData.lng | shortenDigit}}</span>
      <position-map :posData="posData" :acList="acList">
      </position-map>
    </div>
    <spinner-component v-if="acList.length === 0 && posData"></spinner-component>
    <flight-component :acList="acList" :currLng="posData.lng">
    </flight-component>
  </div>
</template>

<script>
/* eslint-disable */
import _orderBy from 'lodash/orderBy';
import SpinnerComponent from '../components/SpinnerComponent';
import flightComponent from '../components/flightComponent';
import positionMap from '../components/positionMap';

export default {
  name: 'home',
  data() {
    return {
      acList: [],
      posData: 'Loading',
    };
  },
  components: {
    'spinner-component': SpinnerComponent,
    'flight-component': flightComponent,
    'position-map': positionMap,
  },
  filters: {
    shortenDigit(value) {
      value = value.toString();
      return value.slice(0,5);
    },
  },
  methods: {
  },
  asyncComputed: {
    posData: {
      get() {
        return this.$getLocation().then((coordinates) => {
          return coordinates;
        }).catch((e) => {
          return false;
        });
      },
      default: 'Loading',
    },
  },
  computed: {
  },
  created() {
    setInterval(() => {
      this.$http.jsonp(`https://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${this.posData.lat}&lng=${this.posData.lng}&fDstU=100`)
        .then((response) => {
          this.acList = _orderBy(response.body.acList, 'Alt', 'Desc');
        });
    }, 10000);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.home-wrapper {
  position: relative;
  padding: 0 0 2em 0;
  @include mqMin(768px) {
    padding: 1em 0 2em 0;
  }
}

.no-loc-notification {
  padding: 1em;
  border-radius: 4px;
  background: lighten($accent, 10%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 100px;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  width: calc(100% - 2em);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  @include mqMin(768px) {
    width: 80%;
  }

  @include mqMin(1024px) {
    width: 60%;
  }
}

.no-loc-info {
  color: $inverted
}

.warning {
  color: darken($accent, 10%);
}

.current-position {
  background: $bright;
  color: darken($bright, 25%);
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  @include mqMin(768px) {
    text-align: left;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  h4 {
    margin: 0;
    padding: 0.5em 0 0 0.75em;
  }
}

.current-position-label {
  padding: 1em;
  font-size: 0.875em;
  font-weight: bold;
  margin: 0;

  &:nth-child(2) {
    padding-bottom: 0;
  }
}
</style>
