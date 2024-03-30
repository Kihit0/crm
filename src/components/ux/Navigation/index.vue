<template>
  <div
    class="navigation h-screen w-72 bg-gradient-to-b from-main-light from-0% via-secondary via-60% to-main px-12 py-8 shadow-secondary shadow">
    <div class="navigation__menu h-full">
      <div class="navigation__menu-logo">
        Logo
      </div>
      <div class="navigation__menu-items h-full mt-32">
        <div class="navigation__menu-item my-8 " v-for="item in getNavigateItems()">
          <div :class="{ 'active-link': item.path === getActivePath() }">
            <RouterLink class="flex content-center" :to="{ path: item.path }">
              <img :src="`${item.icon}`" :alt="`${String(item.name)}`">
              <p class="ml-4">
                {{ item.name }}
              </p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouteRecordRaw, RouterLink } from 'vue-router';
import News from "@assets/image/icon/news.svg";
import Dashboard from "@assets/image/icon/dashboard.svg";

export default defineComponent({
  name: "Navigation",
  methods: {
    getActivePath() {
      return this.$route.path
    },
    getNavigateItems() {
      const navigateIcons = {
        Dashboard,
        News
      };
      const mainPath = this.$router.options.routes.filter((el: RouteRecordRaw) => el.name === "Main")[0];
      const navigateItems = mainPath.children?.map(item => Object.assign(item, { icon: navigateIcons[item.name] }));

      return navigateItems;
    }
  }
})
</script>

<style scoped>
.navigation {
  width: 100%;
  min-width: 250px;
}

.active-link {
  @apply text-text-color-link relative;
  transition: all .2s ease-in-out;
}

.active-link::after {
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;
  top: calc(50% - 6px);
  left: -55px;
  filter: ra;

  border-radius: 50%;

  @apply bg-text-color-link;
}

.active-link::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  top: calc(50% - 15px);
  left: -64px;

  border-radius: 50%;
  filter: blur(2px);

  @apply bg-text-color-link;
  opacity: .3;
  animation: animation 2s infinite;
}

@keyframes animation {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}
</style>