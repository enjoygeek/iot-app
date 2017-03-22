<template lang="pug">
  nav
    .flex-container
      router-link.flex-item(to="/", active-class="active" exact) Home
      router-link.flex-item(to="/dashboard", active-class="active") Dashboard
      router-link.flex-item(to="/devices", active-class="active") All Devices
</template>

<script></script>

<style lang="sass">

  $grey-default: #808080
  $gold: #FCD667

  nav
    .flex-container
      .flex-item
        border: 1px $grey-default solid
        border-radius: 4px
        text-decoration: none
        &.active
          background-color: $gold
</style>