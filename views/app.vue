<template>
	<div>
		<div id="wrapper">
			<nav class="navbar navbar-fixed-top">
				<logo></logo>
				<nav-right></nav-right>
				<nav-side></nav-side>
			</nav>
			<div id="page-wrapper">
				<div class="container-fluid">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<Alert></Alert>
		<Loading></Loading>
		<Confirm></Confirm>
	</div>
</template>
<style lang="less">
	@import "../node_modules/bootstrap/less/bootstrap.less";
	@import "../node_modules/font-awesome/css/font-awesome.css";
	@import "./assets/less/global.less";
	@import "./assets/less/list.less";
	@import "./assets/less/new.less";
	@import "./assets/less/top-area.less";
</style>
<script>
	import store from 'store';

	import Alert from './components/base/alert.vue';
	import Loading from './components/base/loading.vue';
	import Confirm from './components/base/confirm.vue';
	import Logo from './components/common/logo.vue';
	import NavRight from './components/common/nav-right.vue';
	import NavSilde from './components/common/nav-side.vue';

	export default {
		name: 'App',
		store: store,
		components: {
			'logo': Logo,
			'nav-right': NavRight,
			'nav-side': NavSilde,
			Alert,
			Loading,
			Confirm
		}
	};
</script>
