<template lang="pug">
  .flex-item.flex-item-device-list.device-info-container(@click="showDeviceDetails")
    h5.device-info-title {{ device.title }}
    h5.device-info-stats Status:
    ul
      li.device-info-status {{ device.status }}
</template>

<script>
  
  import { deviceBus } from '../main'

  export default {
    props: ['device'],
    methods: {
      showDeviceDetails() {
        console.log('showDeviceDetails clicked.');
        deviceBus.$emit('deviceSelected', this.device);
      }
    }
  }

</script>

<style lang="sass">

  $grey-light: #cccccc

  .flex-container
    .flex-item
      &.flex-item-device-list
        width: auto
        border: 1px $grey-light solid
        border-radius: 4px
</style>