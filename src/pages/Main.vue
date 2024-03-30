<template>
	<div class="main-content flex">
		<div class="main-content__navigation">
			<Navigation />
		</div>
		<RouterView />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from "@components/ux/Navigation/index.vue";

export default defineComponent({
	name: "Main",
	components: {
		Navigation
	},
	created() {
		
	},
	setup() {


		return {}
	}
})
</script>

<style scoped></style>