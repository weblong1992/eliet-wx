<template>
	<view class="have-registered">
		<view class="trainee">
			<view class="pic">pic</view>
			<view class="name">
				<view>张三</view>
				<view>TOM</view>
			</view>
			<view>注册学员</view>
		</view>

		<view class="msgBox">
			<view class="msg">
				<view class="left">
					<view>请购买体验课</view>
					<view>如有其他问题请咨询课程老师</view>
				</view>

				<view class="right">
					<view>李四</view>
					<view>课程老师</view>
				</view>
			</view>
		</view>

		<view class="h_96"></view>

		<view class="con">
			<view class="item" @click="handleClick(1)">体验课购买</view>
			<view class="item">购买套餐</view>
			<view class="item">我的课表</view>
			<view class="item">我的外教</view>
			<view class="item">我的任务</view>
			<view class="item">活动专区</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		handleClick(num) {
			if (num === 1) {
				// uni.navigateTo({
				// 	url: "/pages/index/trial-class",
				// });

				// 测试体验课预约页面
				uni.navigateTo({
					url: "/pages/index/trial-class-reservation",
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.have-registered {
	.trainee {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40rpx 0;

		.name {
			margin: 0 80rpx;
		}
	}

	.msgBox {
		padding: 0 40rpx;
		.msg {
			display: flex;
			justify-content: space-between;
			padding: 40rpx 20rpx;
			font-size: 28rpx;
			// border：宽度 类型 颜色
			border: 4rpx solid $uni-btn-sub;
		}
	}

	.h_96 {
		height: 192rpx;
		background-color: #cccccc;
		margin: 40rpx 0;
	}

	.con {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;

		.item {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 200rpx;
			height: 140rpx;
			border: 2rpx solid $uni-btn-sub;
			margin-right: 10rpx;
			margin-bottom: 60rpx;
			border-radius: 6rpx;
		}
	}
}
</style>
