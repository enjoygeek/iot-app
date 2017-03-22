<template lang="pug">
  .device-detail-container
    h3 Device Detail
    .flex-container.flex-columns
      .flex-item-container(v-if="device.title")
        .flex-item-row
          .flex-item
            h5 Name: {{ device.title }}
            ul
              li Status: {{ device.status }}
              li Location: {{ device.location }}
            br
            br
            h5 Device Specs
            ul
              li Make: {{ device.spec.make }}
              li Model: {{ device.spec.model }}
      .flex-item-container(v-else)
        .flex-item-row
          .flex-item
            p Please choose a device.
</template>

<script>
  
  import { deviceBus } from '../main'
  
  export default {
    data() {
      return {
        device: {
          title: null,
          location: null,
          status: null
        }
      }
    },
    created() {
      deviceBus.$on('deviceSelected', (device) => {
        this.device = device;
      })
    }
  }

</script>