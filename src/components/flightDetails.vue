<template>
  <modal name="flight-details"
         @before-open="beforeOpen"
         height="auto"
         scrollable>
    <div class="modal-header">
       <label class="modal-header-title">
        Flight details
      </label>
      <i class="material-icons close" @click="closeModal">close</i>
    </div>
    <div class="flight-details-content">
      <div class="flight-detail">
         <img :src="`//logo.clearbit.com/${Op}.com`"
              class="op-img">
         <label class="op-img-label">{{flight.Op}}</label>
      </div>
      <div class="flight-detail">
        <label class="op-img-label">From:</label>
        {{flight.From}}
      </div>
      <hr>
      <div class="flight-detail">
        <label class="op-img-label">To:</label>
        {{flight.To}}
      </div>
      <hr>
      <div class="flight-detail">
        <label class="op-img-label">Manufacturer:</label>
        {{flight.Man}}
      </div>
      <hr>
      <div class="flight-detail">
        <label class="op-img-label">Model:</label>
        {{flight.Type}}
      </div>
      <button class="close-modal-button" @click="closeModal">Close</button>
    </div>

  </modal>
</template>

<script>

export default {
  name: 'flight-details',
  data() {
    return {
      flight: {},
      Op: '',
    };
  },
  methods: {
    beforeOpen(event) {
      this.flight = Object.assign({}, event.params.flight);
      this.Op = event.params.flight.Op.replace(/\s/g, '');
    },
    closeModal() {
      this.$modal.hide('flight-details');
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/default';

.modal-header {
  background: $defBlue;
  color: $inverted;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}

.flight-details-content {
  padding: 1em;

  .flight-detail {
    padding: 1em 0;
    color: $primary;
  }
}

.modal-header-title {
  font-weight: bold;
}

.material-icons {

  &.close {
    transition: all 0.25s linear;
    cursor: pointer;

    &:hover {
      color: darken($inverted, 10%);
    }
  }
}

.flight-detail {

  &:first-child {
    text-align: center;
  }
}

.op-img {
  border-radius: 50%;
}

.op-img-label {
  font-weight: bold;
  display: block;
}

.close-modal-button {
  position: absolute;
  background: $defBlue;
  color: $inverted;
  border: none;
  padding: 0.875em 2em;
  border-radius: 2px;
  bottom: 1em;
  right: 1em;
  cursor: pointer;
  transition: all 0.25s linear;

    &:hover {
      background: darken($defBlue, 10%);
    }
  }

  hr {
    height: 1px;
    border-top: 1px solid lightgray;
  }
</style>

<style lang='scss'>
  .v--modal-box {
    left: 15px !important;
    width: calc(100% - 2em) !important;
    top: 3em !important;

    @media screen and(min-width: 640px) {
      left: calc((100% - 600px)/2) !important;
      width: 600px !important;
    }
  }
</style>

