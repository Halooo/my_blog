export const routeConfig = (router) => {
	router.map({
		'/': {
			name: 'index',
			component: require('../components/project/index.vue')
		},
		'/hello': {
			name: 'Hello',
			component: require('../components/project/hello.vue')
		}
	});

	router.redirect({
		'*': '/'
	});
};
