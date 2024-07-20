<template>
	<view class="content"></view>
</template>

<script>
export default {
	data() {
		return {
			title: "Hello",
		};
	},
	onShow() {
		let isRegister = true;
		if (!isRegister) {
			//默认是没有注册
			uni.redirectTo({
				url: "/pages/index/register",
			});
		} else {
			
			//默认是没有注册
			uni.redirectTo({
				url: "/pages/index/have-registered",
			});
			
		}
	},
	methods: {},
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
