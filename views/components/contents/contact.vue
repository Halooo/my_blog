<template>
	<div class="panel panel-default">
		<div class="panel-heading">Contact</div>
		<div class="panel-body">
			<fieldset>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">E-mail:</label>
					<div class="col-sm-9 content">{{info.email}} (pleace change # to @)</div>
				</div>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">Github:</label>
					<a class="col-sm-9 content" href="https://github.com/Halooo">{{info.github}}</a>
				</div>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">WeChat:</label>
					<div class="col-sm-9 content">{{info.wechat}}</div>
				</div>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">Tweet:</label>
					<div class="col-sm-9 content">{{info.tweet}}</div>
				</div>
			</fieldset>
		</div>
	</div>

</template>
<style>
	body{
		background-color: #fff;
	}
	.legend {
		text-align:right;
		font-size: 20px;
	}
	.content {
		font-size: 20px;
	}
	.contact {
		padding-top:10px;
		padding-bottom:10px;
		align: center;
	}
	.panel-body {
		align-items: center;
	}
</style>
<script type="text/babel">
	export default {
		name: 'contact',
		data() {
			return {
				info: []
			};
		},
		ready() {
			this.$http({
				url: 'contact/getContactInfo'
			}).then((res) => {
				return res.json();
			}).then((res) => {
				console.log(res);
				this.info = res[0];
			});
		}
	};
</script>
