const routes = [
	{
		path: "/",
		component: () => import("layouts/MenuBar.vue"),
		children: [
			{ path: "", component: () => import("pages/IndexPage.vue") },
		],
	},
	{
		path: "/ConfirmData",
		component: () => import("layouts/MenuBar.vue"),
		children: [
			{ path: "", component: () => import("pages/ConfirmDataPage.vue") },
		],
	},
	{
		path: "/ReceiveSuiteCase/:id",
		component: () => import("layouts/MenuBar.vue"),
		children: [
			{ path: "", component: () => import("pages/ReceiveSuiteCasePage.vue") },
		],
	},
	{
		path: "/Success",
		component: () => import("layouts/MenuBar.vue"),
		children: [
			{ path: "", component: () => import("pages/SuccessPage.vue") },
		],
	},
	// Always leave this as last one,
	// but you can also remove it
	{
		path: "/:catchAll(.*)*",
		component: () => import("pages/ErrorNotFound.vue"),
	},
];

export default routes;
