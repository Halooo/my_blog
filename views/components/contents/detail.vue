<template>
    <div>
		<h4>{{blogInfo.blogtitle}}</h4>
		<p>Date: {{blogInfo.date | Date 'MM/dd/yyyy'}}</p>
		<p>Type: {{blogInfo.blogtype}}</p>
		<hr class="titlehr">
		<p>{{blogInfo.blogdesc}}</p>
		<hr>
		<p>{{blogInfo.blogcontent}}</p>
	</div>
</template>
<style>
    body{
        background-color: #fff;
    }
	h4::before {
		content: "#";
		color: #FCD450;
		position: absolute;
		left: -0.1em;
		font-weight: bold;
	}
</style>
<script type="text/babel">
	export default {
		name: 'detailBlog',
		data() {
			return {
				blogInfo: {}
			};
		},
		ready() {
			this.$http({
				url: 'blog/blogDetail',
				params: {
					id: this.$route.params.id
				}
			}).then((res) => {
				return res.json();
			}).then((res) => {
				var currTimeDig = parseInt(Math.log10(Date.now()), 10);
				console.log(res[0]);
				this.blogInfo = res[0];
				for (; this.blogInfo.date / Math.pow(10, currTimeDig) < 1; this.blogInfo.date *= 10) {
				}
			});
		}
	};
</script>
