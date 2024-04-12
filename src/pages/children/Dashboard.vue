<template>
  <div class="dashboard pt-4">
    <div class="flex">
      <div class="dashboard-graph w-3/4">
        <Graph />
      </div>
      <div class="status w-1/4 px-4">
        <StatusMarket />
        Status market
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Graph from "@components/ux/Graph/index.vue";
import StatusMarket from "@components/ux/StatusMarket/index.vue";

export default defineComponent({
  name: "Dashboard",
  components: {
    Graph,
    StatusMarket
  },
  setup() {


    return {}
  }
})
</script>

<style scoped></style>