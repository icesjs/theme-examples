<template functional>
  <button class="button-global-scss button">VueScssButton</button>
</template>

<style lang="scss">
@import url('../themes/dark.scss');
.button-global-scss {
  color: $button-color;
  border: 1px solid $button-border-color;
  background-color: $button-background-color;
  box-shadow: $button-box-shadow, $button-box-inset-shadow;
}
</style>

<style lang="scss" scoped>
@import '../themes/dark';
.button {
  color: $button-color;
  border: 1px solid $button-border-color;
  background-color: $button-background-color;
  box-shadow: $button-box-shadow, $button-box-inset-shadow;
}
</style>
