<template>
  <div class="box">
    <label for="theme-select-vue" :style="labelStyle">Select Theme:</label>
    <ThemeSelect id="theme-select-vue" />
    <div class="stage">
      <slot />
    </div>
  </div>
</template>

<script>
import ThemeSelect from './ThemeSelect.vue'
import themeManager from '@ices/theme'

export default {
  name: 'App',
  components: { ThemeSelect },
  data() {
    return { theme: themeManager.theme }
  },
  computed: {
    labelStyle() {
      return { color: this.theme === 'dark' ? '#c9d1d9' : '#24292e' }
    }
  },
  mounted() {
    const handler = ({ data: { current } }) => {
      this.theme = current
    }
    this.unsubscribe = themeManager.subscribe('change', handler)
  },
  beforeDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
}
</script>

<style scoped>
.box {
  margin: 16px;
}

label {
  padding-right: 8px;
}
</style>
