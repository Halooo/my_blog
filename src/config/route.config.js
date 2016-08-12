export const routeConfig = (router) => {
	router.map({
		'/': {
			name: 'index',
			component: require('../components/project/index.vue')
		},
		'/hello': {
			name: 'Hello',
			component: require('../components/project/hello.vue')
		},
		'/blog': {
			name: 'Blog',
			component: require('../components/project/blog.vue')
		},
		'/code': {
			name: 'Code',
			component: require('../components/project/code.vue')
		},
		'/contact': {
			name: 'Contact',
			component: require('../components/project/contact.vue')
		}
	});

	router.redirect({
		'*': '/hello'
	});
};
