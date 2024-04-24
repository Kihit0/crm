<template>
	<div class="main flex">
		<div class="main__navigation">
			<Navigation />
		</div>
		<div class="main__content h-full w-full pl-8">
			<div class="main__content-top__bar py-4 w-full">
				<Topbar />
			</div>
			<RouterView />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from "@components/ux/Navigation.vue";
import Topbar from "@components/ux/Topbar.vue";


export default defineComponent({
	name: "Main",
	components: {
		Navigation,
		Topbar
	},
	created() {
		
	},
	setup() {


		return {}
	}
})
</script>

<style scoped></style>