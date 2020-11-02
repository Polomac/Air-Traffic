<template>
  <div class="flight-wrapper">
    <div v-for="item in acList"
         :key="item.id"
         class="flight-info"
         @click="showDetails(item)">
      <span class="flight-info-label">Bearing:<div>{{item.Trak}} deg</div></span>
      <i class="material-icons"
         :style="{transform: `rotate(${item.Trak}deg)`}">airplanemode_active
      </i>
      <span class="flight-info-label">Altitude:<div>{{item.Alt}} ft</div></span>
      <span class="flight-info-label">Flight No.:<div>{{item.Call}}</div></span>
      <span class="flight-info-label end" title="Click for details">
        <i class="material-icons"
           @click="showDetails(item)">info_outline</i>
      </span>
    </div>
    <flight-details></flight-details>
  </div>
</template>

<script>
import flightDetails from '../components/flightDetails';

export default {
  name: 'flightComponent',
  props: {
    acList: {
      required: true,
    },
    currLng: {
      required: true,
    },
  },
  components: {
    'flight-details': flightDetails,
  },
  methods: {
    showDetails(flight) {
      this.$modal.show('flight-details', { flight });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.flight-wrapper {
  position: relative;
  text-align: center;

  @include mqMin(768px) {
    text-align: left;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1em;
  }
}

.flight-info {
    padding: 0.625em;
    background: $defBlue;
    color: $inverted;
    margin-bottom: 1px;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @include mqMin(768px) {
      margin-bottom: 0.875em;
    }
}

.flight-info-label {
  font-size: 0.875em;
  padding: 0.875em 1em;

  &:first-of-type {
    padding: 0.875em 1em 0.875em 0;
  }

  @include mqMin(768px) {
    font-weight: bold;
  }

  &.end {
    padding: 0em;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.25s linear;
    position: absolute;
    right: 0.5em;
    border: none;
    @include mqMin(768px) {
      right: 1em;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>

