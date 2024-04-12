<template>
  <div class="">

  </div>
</template>

<script lang="ts">
import { subscribe } from '@/api/observer/observer';
import { getMarketStatus } from "@api/endpoints/marketStatus"
import { defineComponent } from 'vue'

export default defineComponent({
  name: "StatusMarket",
  data() {
    return {
      statusMarket: null,
      statusMarketHoliday: null
    }
  },
  created() {
    subscribe("US", async (item: string) => {
      this.updateToStatus(
        await getMarketStatus({
          exchange: item
        })
      )
    })
  },
  methods: {
    updateToStatus(item: any) {
      
    }
  }
})
</script>

<style scoped></style>