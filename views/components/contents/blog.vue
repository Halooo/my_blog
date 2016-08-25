<template>
    <div>
		<div>
			<h3>Blogs</h3>
			<hr class="titlehr">
			<p>Here are some blogs written by me and experiences from others through the process of learning programming</p>
			<hr>
		</div>
	</div>

	<div>
		<div>
			<h4>ABC</h4>
			<p class="datedisp">Aug 25, 2016</p>
			<p>hello, this is a desc</p>
			<hr>
		</div>
		<div>
			<h4>ABC</h4>
			<p class="datedisp">Aug 25, 2016</p>
			<p>hello, this is a desc</p>
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
		color: #fcc546;
	}
</style>
<script>
	export default {
		name: 'Blog',
		data() {
			return {
				msg: 'blogs'
			};
		}
	};
</script>
