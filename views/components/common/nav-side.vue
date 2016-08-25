<template>
	<ul class="nav navbar-nav side-nav">
		<li :class="{'active': isActive === 'home'}">
			<a v-link="{name: 'Hello'}">Home</a>
		</li>
		<li :class="{'active': isActive === 'blog'}">
			<a v-link="{name: 'Blog'}">Blog</a>
		</li>
		<li :class="{'active': isActive === 'code'}">
			<a v-link="{name: 'Code'}">Code</a>
		</li>
		<li :class="{'active': isActive === 'contact'}">
			<a v-link="{name: 'Contact'}">Contact</a>
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
		background-color: #fff;
		bottom: 0;
		overflow-x: hidden;
		padding: 40px 0 40px 0;
		margin-top:10px;
		text-align:center;
	}
	.side-nav>li>a {
		width: 180px;
		color: #000;
	}
	.side-nav li a:hover {
		outline: none;
		background-color: #fff !important;
		color: #FCD450;
		border-left:3px solid #FCD450;
	}
	.side-nav li a:focus {
		outline: none;
		background-color: #fff !important;
		color: #FCD450;
		border-left:3px solid #FCD450;
		font-weight: 600;
	}
	.active {
		outline: none;
		background-color: #fff !important;
		border-left:3px solid #FCD450;
		font-weight: 600;
		color: #FCD450 !important;
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
