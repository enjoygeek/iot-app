<template lang="pug">
  #app
    h1 IoT App
    app-nav
    transition(name="fade", mode="out-in")
      router-view
</template>

<script>

import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    "app-nav": Nav
  }
}

</script>

<style lang="sass">

  $white: #ffffff
  $gold: #FCD667
  $grey-dark: #4d4d4d
  $grey-default: #808080
  $grey-light: #cccccc

  body, html
    font-family: 'Montserrat', Helvetica, Arial, sans-serif
    background-color: $white
  
  h3, h5
    padding: 0
    margin-top: 0

  h3
    font-weight: 900
    margin-bottom: 8px

  h5
    font-weight: 600
    margin-bottom: 4px

  ul
    list-style-type: none
    padding: 0
    margin: 0
    li
      padding: 8px 0 12px 0
      border-bottom: 1px $gold solid

  // Flexbox
  .flex-container
    display: -webkit-flex
    display: flex
    background-color: $white
    
    &.flex-space-between
      justify-content: space-between
    
    &.flex-columns
      -webkit-flex-direction: column
      flex-direction: column

    .flex-item
      padding: 10px
      margin: 10px 10px 10px 0
      background-color: $white
      color: $grey-dark
      &:first-child
        margin: 10px
  
  // Transitions
  .fade-enter-active, .fade-leave-active
    transition: opacity .15s

  .fade-enter, .fade-leave-active
    opacity: 0
     
</style>
