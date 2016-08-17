<template>
	<div class="panel panel-default">
		<div class="panel-heading">Contact</div>
		<div class="panel-body">
			<fieldset>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">E-mail:</label>
					<div class="col-sm-9 content">haosun0226#gmail.com (please change # to @)</div>
				</div>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">Github:</label>
					<a class="col-sm-9 content" href="https://github.com/Halooo">https://github.com/Halooo</a>
				</div>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">WeChat:</label>
					<div class="col-sm-9 content">haosun0226</div>
				</div>
				<div class="col-sm-12 contact">
					<label class="col-sm-3 legend">Tweet:</label>
					<div class="col-sm-9 content">@haosun0226</div>
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
<script>
	export default {
		name: 'template',
		data() {
			return {
				msg: 'This is a template'
			};
		}
	};
</script>
