<template>
	<q-layout view="lHh Lpr lFf">
		<q-tabs
			v-model="tab"
			narrow-indicator
			align="justify"
			class="absolute-bottom menuBar"
		>
			<q-route-tab name="home" to="/">
				<img alt="Home" src="~assets/template/house.svg" />
			</q-route-tab>
			<q-route-tab name="message" to="/message">
				<img alt="Message" src="~assets/template/message.svg" />
			</q-route-tab>
			<q-route-tab name="user" to="/user">
				<img alt="User" src="~assets/template/user.svg" />
			</q-route-tab>
		</q-tabs>
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<style scoped lang="scss">
.menuBar {
	z-index: 2;
	background: $primary;
	padding: 0.5rem;
	position: fixed;
}

.menuBar * {
	color: $secondary;
}

img {
	width: auto;
	height: 25px;
	margin-bottom: 5px;
}
</style>

<script>
import { defineComponent } from "vue";
export default defineComponent({
	name: "MenuBar",
	data() {
		return {
			tab: "home",
		};
	},
	watch: {},
});
</script>
