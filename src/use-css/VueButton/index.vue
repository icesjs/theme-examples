<template functional>
  <div class="button-wrapper">
    <button class="button-global-css-vue button">VueCssButton</button>
  </div>
</template>

<style lang="css">
@import url('../themes/dark.css');
.button-global-css-vue {
  color: var(--button-color);
  border: 1px solid var(--button-border-color);
  background-color: var(--button-background-color);
  box-shadow: var(--button-box-shadow), var(--button-box-inset-shadow);
}
</style>

<style lang="css" scoped>
@import '../themes/dark.css';
.button {
  color: var(--button-color);
  border: 1px solid var(--button-border-color);
  background-color: var(--button-background-color);
  box-shadow: var(--button-box-shadow), var(--button-box-inset-shadow);
}

.button-wrapper {
  display: inline-block;
  padding: 10px 10px 10px 60px;
  background: var(--button-background-image) no-repeat left;
  background-size: contain;
}
</style>
