<template functional>
  <div class="button-wrapper">
    <button class="button-global-scss-vue button">VueScssButton</button>
  </div>
</template>

<style lang="scss">
@import url('../themes/dark.scss');
.button-global-scss-vue {
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

.button-wrapper {
  display: inline-block;
  padding: 10px 10px 10px 60px;
  background: $button-background-image no-repeat left;
  background-size: contain;
}
</style>
