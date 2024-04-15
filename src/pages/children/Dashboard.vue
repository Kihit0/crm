<template>
  <div class="dashboard pt-4">
    <div class="flex">
      <div class="dashboard-graph w-3/4">
        <div class="mb-8">
          <Graph />
        </div>
        <div>
          info
        </div>
      </div>
      <div class="dashboard-status w-1/4 px-4">
        <h4 class="uppercase ">
          Status Market
        </h4>
        <StatusMarket />
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
})
</script>

<style scoped></style>