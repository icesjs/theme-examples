<template functional>
  <div class="button-wrapper">
    <button class="button-global-sass-vue button">VueSassButton</button>
  </div>
</template>

<style lang="sass">
@import url('../themes/dark.sass')
.button-global-sass-vue
  color: $button-color
  border: 1px solid $button-border-color
  background-color: $button-background-color
  box-shadow: $button-box-shadow, $button-box-inset-shadow
</style>

<style lang="sass" scoped>
@import '../themes/dark'
.button
  color: $button-color
  border: 1px solid $button-border-color
  background-color: $button-background-color
  box-shadow: $button-box-shadow, $button-box-inset-shadow

.button-wrapper
  display: inline-block
  padding: 10px 10px 10px 60px
  background: $button-background-image no-repeat left
  background-size: contain
</style>
