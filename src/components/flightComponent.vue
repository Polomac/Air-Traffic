<template>
  <div class="flight-wrapper">
    <div v-for="item in acList"
         :key="item.id"
         class="flight-info">
      <i class="material-icons ort"
         :class="{'ort-neg': item.Long < currLng}">airplanemode_active
      </i>
      <span class="flight-info-label">Altitude: {{item.Alt}}</span>
      <span class="flight-info-label">Flight No.: {{item.Call}}</span>
      <span class="flight-info-label end">
        <i class="material-icons"
           @click="showDetails(item)">more_vert</i>
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
  computed: {
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.flight-wrapper {
  position: relative;
  text-align: center;
  padding-top: 1em;

  @include mqMin(768px) {
    text-align: left;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}

.flight-info {
    padding: 0.625em;
    background: $defBlue;
    color: $inverted;
    margin-bottom: 1em;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.flight-info-label {
  font-size: 0.875em;
  font-weight: bold;
  padding: 0.875em 0.5em;

  @include mqMin(768px) {
    padding: 0.875em 1em;
  }

  &.end {
    padding: 0.875em 1em;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.25s linear;
    position: absolute;
    right: 0.125em;

    @include mqMin(768px) {
      right: 0.875em;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
}

.ort {
  transform: rotate(90deg);
}

.ort-neg {
  transform: rotate(-90deg);
}
</style>

