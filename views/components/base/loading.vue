<template>
	<div class="loading_con" v-show="loading" transition="fade">
		<div class="loading">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>
<style scoped>
.loading_con {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.1);
	z-index: 9999;
}

.loading_con .loading {
	width: 300px;
	height: 120px;
	font-size: 0;
	text-align: center;
	top: 50%;
	left: 50%;
	position: absolute;
	transform: translate(-50%, -50%);
}

.loading_con .loading span {
	display: inline-block;
	vertical-align: top;
	width: 8px;
	height: 80px;
	background-color: #fff;
	margin: 0 4px;
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
	border-radius: 2px;
}

.loading_con .loading span:nth-child(1) {
	animation: loading 1.2s ease-in-out 0s infinite;
	-webkit-animation: loading 1.2s ease-in-out 0s infinite;
	-moz-animation: loading 1.2s ease-in-out 0s infinite;
	-ms-animation: loading 1.2s ease-in-out 0s infinite;
}

.loading_con .loading span:nth-child(2) {
	animation: loading 1.2s ease-in-out -1.1s infinite;
	-webkit-animation: loading 1.2s ease-in-out -1.1s infinite;
	-moz-animation: loading 1.2s ease-in-out -1.1s infinite;
	-ms-animation: loading 1.2s ease-in-out -1.1s infinite;
}

.loading_con .loading span:nth-child(3) {
	animation: loading 1.2s ease-in-out -1.0s infinite;
	-webkit-animation: loading 1.2s ease-in-out -1.0s infinite;
	-moz-animation: loading 1.2s ease-in-out -1.0s infinite;
	-ms-animation: loading 1.2s ease-in-out -1.0s infinite;
}

.loading_con .loading span:nth-child(4) {
	animation: loading 1.2s ease-in-out -0.9s infinite;
	-webkit-animation: loading 1.2s ease-in-out -0.9s infinite;
	-moz-animation: loading 1.2s ease-in-out -0.9s infinite;
	-ms-animation: loading 1.2s ease-in-out -0.9s infinite;
}

.loading_con .loading span:nth-child(5) {
	animation: loading 1.2s ease-in-out -0.8s infinite;
	-webkit-animation: loading 1.2s ease-in-out -0.8s infinite;
	-moz-animation: loading 1.2s ease-in-out -0.8s infinite;
	-ms-animation: loading 1.2s ease-in-out -0.8s infinite;
}

.loading_con .loading span:nth-child(6) {
	animation: loading 1.2s ease-in-out -0.7s infinite;
	-webkit-animation: loading 1.2s ease-in-out -0.7s infinite;
	-moz-animation: loading 1.2s ease-in-out -0.7s infinite;
	-ms-animation: loading 1.2s ease-in-out -0.7s infinite;
}

@-webkit-keyframes loading {
	0%,
	40%,
	100% {
		transform: scaleY(0.4);
		-webkit-transform: scaleY(0.4);
	}
	20% {
		transform: scaleY(1.0);
		-webkit-transform: scaleY(1.0);
	}
}

@keyframes loading {
	0%,
	40%,
	100% {
		transform: scaleY(0.4);
		-webkit-transform: scaleY(0.4);
	}
	20% {
		transform: scaleY(1.0);
		-webkit-transform: scaleY(1.0);
	}
}
</style>
<script>
import Vue from 'vue';
import store from 'store';

export default {
	name: 'Loading',
	vuex: {
		getters: {
			loading: () => {
				return store.state.loading;
			}
		}
	}
};
</script>
