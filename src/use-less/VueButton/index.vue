<template functional>
  <div class="button-wrapper">
    <button class="button-global-less-vue button">VueLessButton</button>
  </div>
</template>

<style lang="less">
@import url('../themes/dark');
.button-global-less-vue {
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

.button-wrapper {
  display: inline-block;
  padding: 10px 10px 10px 60px;
  background: @button-background-image no-repeat left;
  background-size: contain;
}
</style>
