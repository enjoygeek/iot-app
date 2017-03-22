<template lang="pug">
  #dashboard.flex-container.flex-two-column-layout
    .flex-item.flex-item-list
      app-device-list
    .flex-item.flex-item-detail
      app-device-detail
</template>
<script>
  
  import DeviceList from '../components/DeviceList.vue'
  import DeviceDetail from '../components/DeviceDetail.vue'

  export default {
    data() {
      return {

      };
    },
    components: {
      'app-device-list': DeviceList,
      'app-device-detail': DeviceDetail
    }
  }

</script>

<style lang="sass">
  .flex-container
    &.flex-two-column-layout
      -webkit-align-items: stretch
      align-items: stretch
      .flex-item
        flex-grow: 1
        &:first-child
          margin-left: 0 
        &.flex-item-list
          width: 300px
        &.flex-item-detail
          flex-grow: 1
</style>