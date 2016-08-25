export const routeConfig = (router) => {
	router.map({
		'/': {
			name: 'index',
			component: require('../components/contents/index.vue')
		},
		'/hello': {
			name: 'Hello',
			component: require('../components/contents/hello.vue')
		},
		'/blog': {
			name: 'Blog',
			component: require('../components/contents/blog.vue'),
			subRoutes: {
				'/detail/:id': {
					name: 'detailProject',
					component: require('../components/contents/blogContent/detail.vue')
				}
			}
		},
		'/code': {
			name: 'Code',
			component: require('../components/contents/code.vue')
		},
		'/contact': {
			name: 'Contact',
			component: require('../components/contents/contact.vue')
		}
	});

	router.redirect({
		'*': '/hello'
	});
};
