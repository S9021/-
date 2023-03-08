<template>
	<div class="home">
		<Header />
		<el-container class="content">
			<Meau />
			<el-container>
				<el-main>
				<Bumb/>
					<div class="const">
						<router-view></router-view>
					</div>
				</el-main>
				<el-footer>
					<Footer />
				</el-footer>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import Header from './coom/Header.vue'
	import Footer from './coom/Footer.vue'
	import Meau from './coom/Meau.vue'
	import Bumb from './coom/Breadcrumb.vue'
	export default {
		components: {
			Header,
			Footer,
			Meau,
		    Bumb
		},
		data() {
			return {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.home {
		width: 100%;
		height: 100%;

		.content {
			position: absolute;
			width: 100%;
			top: 60px;
			bottom: 0px;
		.const{
			margin: 20px 0px;
		}
		}
	}
</style>
