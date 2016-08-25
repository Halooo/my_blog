<template>
    <div>
		<div>
			<h3>Blogs</h3>
			<hr class="titlehr">
			<p>Here are some blogs written by me and experiences from others through the process of learning programming</p>
			<hr>
		</div>
	</div>

	<div v-for="item in blogInfo">
		<div>
			<h4><a class="listItem" href="javascript:void(0)" v-link="{name: 'detailBlog', params: {id: item.blogid}}">{{item.blogtitle}}</a></h4>
			<p class="datedisp">{{item.date}}</p>
			<p>{{item.blogdesc}}</p>
			<hr>
		</div>
	</div>
</template>
<style>
    body{
        background-color: #fff;
    }
	h3 {
		font-weight:600;
	}
	a {
		color:black;
	}
	a.listItem:hover{
		color: black;
		text-decoration: none;
		outline: 0;
		border-bottom: 2px solid #FCD450;
	}
</style>
<script type="text/babel">
	export default {
		name: 'listBlog',
		data() {
			return {
				blogInfo: []
			};
		},
		ready() {
			this.$http({
				url: 'blog/blogList',
				params: {
					id: 0
				}
			}).then((res) => {
				return res.json();
			}).then((res) => {
				console.log(res[1]);
				this.blogInfo = res;
			});
		}
	};
</script>
