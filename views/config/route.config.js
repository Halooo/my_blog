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
			// name: 'Blog',
			component: require('../components/contents/index.vue'),
			subRoutes: {
				'/detail/:id': {
					name: 'detailBlog',
					component: require('../components/contents/detail.vue')
				},
				'/list': {
					name: 'listBlog',
					component: require('../components/contents/blog.vue')
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
