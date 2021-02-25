<template>
  <div class="theme-select">
    <select v-bind="$attrs" v-on="$listeners" v-model="theme">
      <option v-for="theme in themeList" :key="theme" :value="theme">
        {{ theme }}
      </option>
    </select>
  </div>
</template>

<script>
import themeManager from '@ices/theme'

export default {
  name: 'ThemeSelect',
  inheritAttrs: false,
  data() {
    return { themeList: themeManager.themeList, theme: themeManager.theme }
  },
  watch: {
    theme(value) {
      themeManager.theme = value
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
.theme-select {
  display: inline-block;
}
</style>
