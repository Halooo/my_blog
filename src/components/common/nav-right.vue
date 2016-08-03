<template>
	<ul class="nav navbar-right top-nav">
		<li class="dropdown">
			<a @click="showDropDown = !showDropDown" href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i><b class="caret"></b></a>
			<ul class="dropdown-menu" v-show="showDropDown">
				<li>
					<a href="javascript:void(0)" @click="signOut()"><i class="fa fa-fw fa-power-off"></i>退出登录</a>
				</li>
			</ul>
		</li>
	</ul>
</template>
<style scoped>
.top-nav {
	padding: 0 15px;
}

.top-nav>li {
	display: inline-block;
	float: left;
}

.top-nav>li>a {
	padding-top: 15px;
	padding-bottom: 15px;
	line-height: 20px;
	color: #999;
}

.top-nav>li>a:hover,
.top-nav>li>a:focus{
	color: #fff;
	background-color: #000;
}
.dropdown-menu {
	display: block;
}
</style>
<script type="text/babel">
import { $, on } from 'utils/dom.js';
import store from 'store';

export default {
	data() {
		return {
			showDropDown: false
		};
	},
	vuex: {
		getters: {
			userInfo: () => store.state.userInfo
		}
	},
	ready() {
		const _this = this;
		$('html')[0].on('click', function(e) {
			if (!e.target.classList.contains('dropdown-toggle')) {
				_this.showDropDown = false;
			};
		});
	},
	methods: {
		signOut() {
			this.$http({
				url: 'user/logout',
				method: 'get'
			});
		}
	}
};
</script>
