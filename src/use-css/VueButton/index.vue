<template functional>
  <button class="button-global-css button">VueCssButton</button>
</template>

<style lang="css">
@import url('../themes/dark.css');
.button-global-css {
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
</style>
