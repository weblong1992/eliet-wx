<template>
	<view class="form_box">
		<u--form labelPosition="left" :model="model1" ref="form1">
			<u-form-item
				label="手机号"
				prop="mobile"
				labelWidth="80"
				borderBottom>
				<u--input
					v-model="model1.mobile"
					border="none"
					placeholder="请填写手机号"></u--input>
			</u-form-item>
			<u-form-item
				label="验证码"
				prop="code"
				labelWidth="80"
				borderBottom
				ref="item1">
				<u--input
					v-model="model1.code"
					border="none"
					placeholder="请填写验证码"></u--input>
				<u-button
					slot="right"
					@tap="getCode"
					:text="codeTxt"
					color="#39b365"
					size="mini"
					:disabled="disabled1"></u-button>
			</u-form-item>

			<u-form-item
				label="保存此号码以后授权使用"
				prop="code"
				labelWidth="200"
				borderBottom
				ref="item1">
				<u-switch
					active-color="#39b365"
					slot="right"
					v-model="model1.saveFlag"></u-switch>
			</u-form-item>
		</u--form>
		<u-button
			color="#39b365"
			text="绑定"
			customStyle="margin-top: 50px"
			@click="submit"
			shape="circle"></u-button>
	</view>
</template>

<script>
import { login, sendPhomeSms } from "@/api/login.js";
export default {
	data() {
		return {
			disabled1: false,
			tips: "",
			model1: {
				mobile: "", //手机号
				code: "",
				saveFlag: "",
			},
			rules: {
				mobile: [
					{
						type: "string",
						required: true,
						message: "请填写手机号",
						trigger: ["blur", "change"],
					},
				],
				code: {
					type: "string",
					required: true,
					message: "请填写验证码",
					trigger: ["blur", "change"],
				},
			},
			openid: "",
			verificationCode: "",
			codeTxt: "获取验证码",
			codeFlag: true, // 控制按钮是否可点击
		};
	},
	// 一定要设置，否则校验不生效
	onReady() {
		// 如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则
		this.$refs.form1.setRules(this.rules);
	},
	methods: {
		// 发送验证码
		getCode() {
			let that = this;
			if (this.codeFlag == false) {
				return;
			} else if (that.model1.mobile == "") {
				uni.$u.toast("手机号码不能为空");
			} else {
				uni.showToast({
					title: "验证码发送成功",
					icon: "none",
					duration: 2000,
				});
				this.codeFlag = false;
				let time = 60;
				this.codeTxt = time + "S" + "重新获取";

				let timer = setInterval(() => {
					this.codeTxt = "获取验证码";
					if (time == 1) {
						this.codeFlag = true;
						clearInterval(timer);
					} else {
						time--;
						this.codeTxt = time + "S" + "重新获取";
					}
				}, 1000);
				
				
				let data = {
						"phone": that.model1.mobile,
						"region": "86"
				}
				sendPhomeSms(data).then(res =>{
					console.log(res)
					if(res.status !==200){
						uni.showToast({
							title: res.message,
							icon: "none",
							duration: 2000,
						});
					}
					else {
						//成功
						this.verificationCoderes = res.data;
					}
				}).catch(err =>{
					console.log(err)
				})

			
			}
		},
		// 表单提交
		submit() {
			let that = this;
			// 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
			this.$refs.form1
				.validate()
				.then((res) => {
					uni.showModal({
						content: "你确定要绑定吗？",
						success: function (res) {
							if (res.confirm) {
								if (
									that.model1.code !== that.verificationCode
								) {
									uni.$u.toast("验证码不正确");
								} else {
									that.model1 = {
										
										mobile: that.model1.mobile,
										code: that.model1.code,
									
									};
									
									login(that.model1).then(res =>{
										if(res.status ===200){
											uni.showToast({
												title: "绑定成功",
												icon: "none",
												duration: 2000,
											});
										}
									})
									// uni.showLoading({
									// 	title: "加载中...",
									// 	mask: true,
									// });
								
								}
							} else if (res.cancel) {
							}
						},
					});
				})
				.catch((errors) => {
					uni.$u.toast("请填写完整的信息");
				});
		},
	},
};
</script>

<style lang="scss" scoped>
.form_box {
	padding: 0 20rpx;
}
.u-demo-block__content {
	margin: 20rpx;
}

.getCode {
	height: 60rpx;
	width: 180rpx;
	background: #f7f7f7;
	color: #666666;
	line-height: 60rpx;
	font-size: 24rpx;
	text-align: center;
	border-radius: 50rpx;
}

.getCode.activeCode {
	background: #2d99f5;
	color: #ffffff;
}
</style>
