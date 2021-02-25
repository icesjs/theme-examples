<template functional>
  <button class="button-global-less button">VueLessButton</button>
</template>

<style lang="less">
@import '../themes/dark';
.button-global-less {
  color: @button-color;
  border: 1px solid @button-border-color;
  background-color: @button-background-color;
  box-shadow: @button-box-shadow, @button-box-inset-shadow;
}
</style>

<style lang="less" scoped>
@import '../themes/dark';
.button {
  color: @button-color;
  border: 1px solid @button-border-color;
  background-color: @button-background-color;
  box-shadow: @button-box-shadow, @button-box-inset-shadow;
}
</style>
