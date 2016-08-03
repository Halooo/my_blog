<template>
	<ul class="nav navbar-nav side-nav">
		<li :class="{'active': isActive === 'project'}">
			<a v-link="{name: 'Hello'}"><i class="fa fa-fw fa-cubes"></i>项目</a>
		</li>
	</ul>
</template>
<style scoped>
@media(min-width:768px) {
	.side-nav {
		position: fixed;
		top: 51px;
		left: 180px;
		width: 180px;
		margin-left: -180px;
		border: none;
		border-radius: 0;
		overflow-y: auto;
		background-color: #272727;
		bottom: 0;
		overflow-x: hidden;
		padding-bottom: 40px;
	}
	.side-nav>li>a {
		width: 180px;
	}
	.side-nav li a:hover,
	.side-nav li a:focus {
		outline: none;
		background-color: #000 !important;
	}
}

.side-nav>li>ul {
	padding: 0;
}

.side-nav>li>ul>li>a {
	display: block;
	padding: 10px 15px 10px 38px;
	text-decoration: none;
	color: #999;
}

.side-nav>li>ul>li>a:hover {
	color: #fff;
}
</style>
<script>
export default {
	name: 'nav-slide',
	data() {
		return {
			isActive: ''
		};
	},
	watch: {
		'$route.path': {
			handler: function() {
				try {
					this.isActive = this.$route.path.match(/\/(\w+)\//)[1];
				} catch (e) {
					this.isActive = '';
				}
			},
			immediate: true
		}
	}
};
</script>
