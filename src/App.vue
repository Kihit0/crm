<template>
  <div class="w-screen h-screen bg-main text-text-color-main overflow-hidden">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "App",
  created() {
    const isToken = localStorage.getItem("u_token");
    if (isToken) {
      this.$router.push("/login");
    }
  },
  setup() {


    return {}
  }
})
</script>

<style scoped>
</style>
