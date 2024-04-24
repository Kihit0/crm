<template>
  <div class="top-bar">
    <div class="top-bar__content flex justify-between content-center">
      <div class="top-bar__content-title w-1/2">
        <h2 class="text-white text-3xl pb-1">{{ getNamePath() }}</h2>
        <p class="text-sm">{{ getSubtitle() }}</p>
      </div>
      <div class="top-bar__content-menu w-1/2 flex justify-end content-center pr-4">
        <div class="mr-4">
        </div>
        <div class="mr-4">Notification</div>
        <div>User</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordName } from 'vue-router';

export default defineComponent({
  name: "Topbar",
  methods: {
    getNamePath() {
      return this.$route.name;
    },
    getSubtitle(){
      const subtitleItems = {
        News: "All the latest news on stock markets on our channel and news page",
        Dashboard: "With all of the styling tool options available in today’s market"
      }

      const namePath: RouteRecordName = this.getNamePath()!

      return (subtitleItems as any)[namePath];
    }
  },
})
</script>

<style scoped></style>