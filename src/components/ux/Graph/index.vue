<template>
  <div class="graph">
    <Line :options="chartOptions" :data="getChartData()" style="height: 100%; min-height: 400px;" />
  </div>
</template>

<script lang="ts">
import { Line } from "vue-chartjs";
import { subscribeToTicker } from '@api/core/observer';
import { defineComponent } from 'vue'

import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

export default defineComponent({
  name: "Graph",
  components: {
    Line
  },
  data() {
    return {
      tickers: [],
      labels: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        cubicInterpolationMode: 'monotone',
        tensions: 10,
      }
    }
  },
  created() {
    subscribeToTicker("BINANCE:BTCUSDT", (tickers: number[]) => this.updateTicker(tickers));
    const normalizeDate: string = this.getNormalizeDate();
    this.labels.push(normalizeDate as never);
    this.tickers.push({
      name: "BINANCE:BTCUSDT",
      priceOnTime: [
        {
          time: normalizeDate,
          price: []
        }
      ]
    } as never)
  },
  computed: {
  },
  methods: {
    updateTicker(tickers: number[]) {
      const normalizePrice: number = this.formatPrice(tickers);
      const normalizeDate: string = this.getNormalizeDate();
      const isTimeInLabels = this.labels.filter(f => f === normalizeDate).length === 0;

      //console.log(this.tickers)

      this.tickers.forEach((ticker: {
        name: string,
        priceOnTime: { time: string, price: number[] }[]
      }) => {
        if (ticker.name === "BINANCE:BTCUSDT" && !isTimeInLabels) {
          ticker.priceOnTime.forEach((el) => {
            if (el.time === normalizeDate) {
              el.price.push(normalizePrice)
            }
          })
        } else {
          ticker.priceOnTime.push({
            time: normalizeDate,
            price: [normalizePrice]
          })
        }
      })

      isTimeInLabels && this.labels.push(normalizeDate as never)
    },
    getNormalizeDate() {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const labelsDate = `${hour}:${minutes < 10 ? `0${minutes}` : minutes}`

      return labelsDate;
    },
    formatPrice(price: number[]) {
      const average = (price.reduce((a, b) => a + b, 0) / price.length)
      const normalize = Number(average > 0 ? average.toFixed(2) : average.toPrecision(2));
      return normalize;
    },
    getChartData() {
      return {
        labels: this.labels,
        datasets: this.tickers.map((ticker: {
          name: string,
          priceOnTime: { time: string, price: number[] }[]
        }) => {
          return {
            label: ticker.name,
            backgroundColor: '#f87979',
            borderColor: "#f87979",
            data: ticker.priceOnTime.map(item => item.price[item.price.length - 1])
          }
        })
      }
    }
  },
  watch: {

  }
})
</script>

<style scoped></style>