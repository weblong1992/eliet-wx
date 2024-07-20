<template>
	<view class="login">
		<view class="logoBox">
			<u--image
				src="/static/login/logo.png"
				width="203"
				height="62"></u--image>
		</view>

		<view class="btns">
			<button
				open-type="getPhoneNumber"
				class="login_button"
				@getphonenumber="getPhoneNumber">
				    微信授权手机号登录
			</button>
		</view>

		<view>
			<u-checkbox-group v-model="chekedArr">
				<u-checkbox
					activeColor="#54bcbd"
					:label="txt"
					:name="'aa'"></u-checkbox>
			</u-checkbox-group>
			
			
		</view>

		<!-- 弹窗 -->
		<!-- <u-popup closeable :show="show" @close="close" @open="open">
			<view class="mycon">
				<view class="title">
					<u--image
						src="/static/login/logo_mini.png"
						width="26"
						height="25"></u--image>
					<text class="txt">Eliet English</text>
				</view>

				<h2 class="getPhoneTxt">获取你的手机号</h2>

				<view class="desc">注册、登录小程序</view>

				<view class="line"></view>

				<view class="binding_number">
					<view class="left">
						<view class="phone">135****2908</view>

						<view class="wx_txt">微信绑定号码</view>
					</view>

					<view class="right">
						
					</view>
				</view>

				<view class="line"></view>

				<view class="useOtherPhone">
					<u-button
						color="#39b365"
						size="mini"
						@click="useOtherPhone">
						使用其他手机号码
					</u-button>
				</view>

				<view class="btn_box">
					<view class="btn1">
						<u-button @click="show = true">取消</u-button>
					</view>

					<view class="btn1">
						<u-button color="#39b365" @click="show = true">
							允许
						</u-button>
					</view>
				</view>

				<view class="footer_desc">使用微信手机号码快捷登录</view>
			</view>
		</u-popup -->

		<!-- <u-toast ref="uToast"></u-toast> -->
	</view>
</template>

<script>
import { wxLogin,sendPhomeSms } from "@/api/login.js";
export default {
	data() {
		return {
			txt: "已阅读并同意《用户服务协议》和《隐私政策》",
			show: false,
			login_code: "",
			chekedArr:[]
		};
	},
	onShow(){
		let that = this;
		uni.login({
		  provider: 'weixin', // 登录服务提供商，例如微信小程序
		  success: function(res) {
		    const code = res.code;
			that.login_code = code;
		    console.log('登录凭证 code：', code);
		    // 这里可以将 code 发送给后端进行处理
		  },
		  fail: function(err) {
		    console.error('登录失败：', err);
		  }

		})
		},

	methods: {
		getPhoneNumber(e) {
			// console.log(e.stopPropagation)
			console.log(this.chekedArr)
			if(this.chekedArr.length <1){
				uni.showToast({
					title: "请先勾选用户服务协议",
					icon: "none",
					duration: 1000
					
			})
			
			return;
			}
			// this.show = true;
			console.log(e);
			// debugger
			console.log("errMsg", e.detail.errMsg);
			let that = this;
			if (e.detail.errMsg == "getPhoneNumber:fail user deny") {
				console.log("用户拒绝提供手机号");
			} else {
				console.log("用户同意提供手机号");
				console.log("iv", e.detail.iv);
				console.log("encryptedData", e.detail.encryptedData);
				let encryptedData = e.detail.encryptedData;
				let iv = e.detail.iv;
				//检查登录
				uni.checkSession({
					success: (res) => {
						console.log("checkSession--success---res", res);
						if (res.errMsg == "checkSession:ok") {
							console.log(res);
							console.log("登录暂未过期");
							if (
								encryptedData !== undefined &&
								iv !== undefined
							) {
								that.getPhone(encryptedData, iv);
							}
						}
					},
					fail: (res) => {
						console.log("checkSession---fail---res", res);
						console.log("登录已过期");
						//再执行一次login
						uni.login({
							provider: "weixin",
							success: function (loginRes) {
								console.log("loginRes.code", loginRes.code);
								that.login_code = loginRes.code;

								if (
									encryptedData !== undefined &&
									iv !== undefined
								) {
									that.getPhone(encryptedData, iv);
								}
							},
						});
					},
				});
			}
			//e.detail.errMsg == 'getPhoneNumber:fail Error: 用户未绑定手机，请先在微信客户端进行绑定后重试'  微信会自动引导用户去绑定手机
		},
		//手机号发送至后台解密
		getPhone(encryptData, ivStr) {
			console.log("encryptData", encryptData);
			console.log("ivStr", ivStr);

			let data = {
				code: this.login_code,
				encryptedData: encryptData,
				iv: ivStr,
			};

			wxLogin(data)
				.then((res) => {
					console.log(res);
					if (res.code == 200) {
						uni.showToast({
							title: "登录成功",
							icon: "success",
							duration: 1000,
							success: function () {
								uni.redirectTo({
									url: "/pages/index/index",
								});
							},
						});
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},

		close() {
			this.show = false;
		},
		useOtherPhone() {
			uni.navigateTo({
				url: "/pages/login/addOtherPhone",
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.login {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 100rpx;
	box-sizing: border-box;

	.logoBox {
		margin-bottom: 100rpx;
	}

	.btns {
		width: 80%;
		margin: 40rpx 0;
		& .login_button {
			background-color: $uni-btn-bgColor;
			color: #fff;
		}
	}

	.mycon {
		// position: relative;
		// padding-top: 80rpx;
		// box-sizing: border-box;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-bottom: 40rpx;
		font-size: 24rpx;

		.title {
			margin: 32rpx;
			display: flex;
			.txt {
				margin-left: 10rpx;
				color: #101010;
			}
		}
		.getPhoneTxt {
			color: #101010;
		}
		.desc {
			color: #666;
			margin: 20rpx 0;
		}

		.line {
			border: 1px solid #ccc;
			margin: 10rpx 0;
		}

		.binding_number {
			display: flex;
			justify-content: space-between;

			& .left {
				display: flex;

				.phone {
					color: #101010;
				}

				.wx_txt {
					margin-left: 20rpx;
					color: #666;
					font-size: 24rpx;
				}
			}
		}

		.useOtherPhone {
			width: 200rpx;
			margin: 20rpx 0;
		}

		.btn_box {
			display: flex;
			justify-content: center;
			.btn1 {
				width: 160rpx;
				// height: 60rpx;
				margin-right: 20rpx;
			}
			.btn2 {
				width: 160rpx;
				// height: 60rpx;
			}
		}

		.footer_desc {
			display: flex;
			justify-content: center;
			margin-top: 60rpx;
			color: #666;
		}
	}
}
</style>
