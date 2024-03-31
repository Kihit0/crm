<template>
  <div>
    <Svg></Svg>
    <div class="w-screen h-screen bg-main text-text-color-main overflow-hidden">
      <RouterView />
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Svg from "@components/ux/icons/index.vue";

export default defineComponent({
  name: "App",
  components: {
    Svg
  },
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

<style scoped></style>
