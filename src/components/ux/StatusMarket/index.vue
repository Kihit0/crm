<template>
  <div class="bg-secondary shadow rounded-lg p-4 text-text-color-secondary mt-2 " v-for="item in statusMarket">
    <div class="py-px">
      Open: <span class="pl-px" :class="{
        'text-text-color-red': !item.isOpen,
        'text-text-color-green': item.isOpen
      }">
        {{ item.isOpen ? "Open" : "Close" }}
      </span>
    </div>
    <div class="py-px">
      Country: <span class="pl-px">
        {{ item.exchange }}
      </span>
    </div>
    <div class="py-px">
      Time:
      <span class="pl-px">
        {{ getTimeInCountry() }}
      </span>
    </div>
    <div class="py-px">
      Timezone:
      <span class="pl-px">
        {{ item.timezone }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { subscribe } from '@/api/observer/observer';
import { formatDate } from '@/helpers/formatDate';
import { getMarketStatus } from "@api/endpoints/marketStatus"
import { defineComponent } from 'vue';

interface IStatusMarket {
  exchange: string,
  holiday: null,
  isOpen: boolean,
  session: string,
  t: number,
  timezone: string
}

export default defineComponent({
  name: "StatusMarket",
  data() {
    return {
      statusMarket: [] as IStatusMarket[],
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
  computed: {

  },
  methods: {
    updateToStatus(item: {
      exchange: string,
      holiday: null,
      isOpen: boolean,
      session: string,
      t: number,
      timezone: string
    }) {
      const isElementInArray: boolean = Boolean(this.statusMarket.filter(el => el.timezone === item.timezone).length);

      if (isElementInArray) {
        this.statusMarket.forEach(el => el.timezone === item.timezone && Object.assign(el, item));
        return;
      }

      //Prohibit adding more than 5 status markets
      if (this.statusMarket.length >= 5) {
        return;
      }

      this.statusMarket.push(item);
    },
    getTimeInCountry() {
      const date = new Date();
      const dateFormate = formatDate(date);
      const timezone = (-date.getTimezoneOffset()) / 60

      return `${dateFormate} ${timezone > 0 ? `+${timezone}` : timezone} GMT`
    }
  }
})
</script>
