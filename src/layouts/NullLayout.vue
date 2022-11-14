<template>
	<q-layout view="lHh Lpr lFf">
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<style scoped lang="scss">

</style>

<script>
import { defineComponent } from "vue";
export default defineComponent({
	name: "NullLayout",
	data() {
		return {
			tab: "home",
		};
	},
	watch: {},
});
</script>
