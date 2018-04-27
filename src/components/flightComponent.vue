<template>
  <div class="flight-wrapper">
    <div v-for="item in acList"
         :key="item.id"
         class="flight-info">
      <i class="material-icons"
         :style="{transform: `rotate(${item.Trak}deg)`}">airplanemode_active
      </i>
      <span class="flight-info-label">Altitude:<div>{{item.Alt}}</div></span>
      <span class="flight-info-label">Flight # :<div>{{item.Call}}</div></span>
      <span class="flight-info-label">Bearing.:<div>{{item.Trak}}</div></span>
      <span class="flight-info-label end">
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
  computed: {
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
    margin-bottom: 0.1em;
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
  font-size: 1em;
  padding: 0.875em 0.5em;

  @include mqMin(768px) {
    padding: 0.875em 1em;
    font-weight: bold;
  }

  &.end {
    padding: 0.875em;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.25s linear;
    position: absolute;
    right: 0.875em;
    border: none;

    &:hover {
      color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>

