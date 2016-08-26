<template>
	<div>
		<div>
			<h3>Code</h3>
			<hr class="titlehr">
			<p>Here are some programs.</p>
			<hr>
		</div>

		<div>
			<div>
				<h4>
					<a class="listItem" href="javascript:void(0)" v-link="">ABC</a>
					(<a class="listItem"
						@click="openNewWindow()">source</a>)
				</h4>
				<p>123</p>
				<hr>
			</div>
		</div>
	</div>
</template>
<style>
    body{
        background-color: #fff;
    }
	a.listItem:hover{
		color: black;
		text-decoration: none;
		outline: 0;
		border-bottom: 2px solid #FCD450;
		cursor:hand;
	}
</style>
<script type="text/babel">
	export default {
		name: 'code',
		data() {
			return {
				codeInfo: []
			};
		},
		ready() {
			this.$http({
				url: 'code/codeList',
				params: {
				}
			}).then((res) => {
				return res.json();
			}).then((res) => {
				this.codeInfo = res;
				console.log(this.codeInfo);
			});
		}
	};
</script>
