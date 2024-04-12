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
ChartJS.defaults.color = "#6F6C99";

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
        display: false
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
  methods: {
    updateTicker(tickers: number[]) {
      const normalizePrice: number = this.formatPrice(this.getAveragePrice(tickers));
      const normalizeDate: string = this.getNormalizeDate();
      const isTimeInLabels = this.labels.filter(f => f === normalizeDate).length === 0;

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
    getAveragePrice(price: number[]) {
      return (price.reduce((a, b) => a + b, 0) / price.length);
    },
    formatPrice(averagePrice: number) {
      const normalize = Number(averagePrice > 0 ? averagePrice.toFixed(2) : averagePrice.toPrecision(2));
      return normalize;
    },
    getChartData() {
      return {
        labels: this.labels,
        datasets: this.tickers.map((ticker: {
          name: string,
          priceOnTime: { time: string, price: number[] }[]
        }) => {
          ticker.priceOnTime.length > 30 && ticker.priceOnTime.shift()
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
})
</script>