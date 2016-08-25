<template>
	<ul class="nav-links">
		<li :class="{'active': isActive === item.tab}" v-for="item in tabLink.list">
			<a @click="routerGo(routeName, item)">{{item.msg}}</a>
		</li>
	</ul>
</template>
<script>
export default {
	name: 'top-tab',
	props: ['tabLink', 'routeName'],
	data() {
		return {
			isActive: ''
		};
	},
	methods: {
		routerGo(routeName, item) {
			this.$route.query[this.tabLink.key] = item.tab;
			this.$route.router.go({
				name: routeName,
				query: this.$route.query
			});
			this.$dispatch('tabList', item.tab);
		}
	},
	watch: {
		'$route.query.groupBy': {
			handler() {
				if (this.$route.query[this.tabLink.key] === undefined) {
					this.isActive = this.tabLink.list[0].tab;
				} else {
					this.isActive = this.$route.query[this.tabLink.key];
				}
			},
			immediate: true
		}
	}
};
</script>
