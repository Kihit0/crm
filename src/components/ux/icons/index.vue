<template>
  <svg style="display: none;">
    <symbol id="Dashboard" viewBox="0 0 14 14">
      <DashboardIcon />
    </symbol>
    <symbol id="News" viewBox="0 0 14 14">
      <NewsIcon />
    </symbol>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DashboardIcon from './icon/DashboardIcon.vue';
import NewsIcon from './icon/NewsIcon.vue';

export default defineComponent({
  name: "Svg",
  components: {
    DashboardIcon,
    NewsIcon
  }
})
</script>

<style scoped>

</style>