<template>
	<div class="login">
		<el-card class="boxcard">
			<div slot="header" class="clearfix">
				<span>后台管理系统</span>
			</div>
			<el-form label-width="80px" :model="form" ref="form" :rules="rules">
				<!-- 验证必填 required -->
				<el-form-item label="名称" prop='username'>
					<el-input v-model="form.username"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop='password'>
					<el-input type="password" v-model='form.password'></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="login('form')">登录</el-button>
				</el-form-item>
			</el-form>
		</el-card>

	</div>
</template>

<script>
	import {
		NameRuler,
		PassRuler
	} from '../utils/vildate.js'
	import {
		setToken
	} from '../utils/setToken.js'
	import {
		login
	} from '../api/api.js'
	export default {
		data() {
			return {
				form: {
					username: '',
					password: ''
				},
				rules: {
					username: [{
						validator: NameRuler,
						tigger: 'blur'
					}],
					password: [{
						validator: PassRuler,
						tigger: 'blur'
					}],
				}
			};
		},
		// 标准验证
		methods: {
			login(form) {
				this.$refs[form].validate((valid) => {
					if (valid) {
						// this.servies.post('/login',this.form).then(res =>{
							// 封装成API使用
						// })
						login(this.form).then(res => {
							if (res.data.status === 200) {
								setToken('username', res.data.username)
								setToken('token', res.data.token)
								this.$message({
									message: res.data.message,
									type: 'success'
								})
								//跳转到home页面
								this.$router.push('/home')
								console.log(res)
							}
						})
					} else {
						alert('别整')
					}
				})
			}
		}
	}
</script>
<style lang='less'>
	.login {
		width: 100%;
		height: 100%;
		position: absolute;
		background: url('../assets/bg.jpg')center no-repeat;
        .el-card{
			background-color: rgba(0, 0, 0, 0.2);
		}
		.boxcard {
			width: 450px;
			margin: 200px auto;
			
		}
        .el-form-item__label{
			color: black;
			
		}
		.clearfix{
			font-size: 38px;
			color: black;
		}
		.el-button {
			width: 100%;
			background: skyblue;
		}
	}
</style>
