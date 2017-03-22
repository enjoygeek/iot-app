<template lang="pug">
  .device-list-container
    h3 Device List
    app-device(v-for="device in allDevices", :device="device", :key="device.title")
</template>

<script>
  
  import Device from './Device.vue'
  import AllDevices from '../assets/data.json'

  export default {
    data() {
      return {
        allDevices: AllDevices
      }
    },
    components: {
      'app-device': Device
    }
  }

</script>

<style lang="sass"></style>