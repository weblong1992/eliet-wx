<template>
	<view class="content">
		<view class="userInfo">
			<view class="person">
				<view class="img_box">
					<u--image
						src="/static/my/setting.png"
						width="32px"
						height="32px"></u--image>
				</view>

				<view>
					<view>张三</view>
					<view>TOM</view>
					<view class="jyhy_box">
						<view class="mr-10">精英会员</view>
						<view>></view>
					</view>
				</view>
			</view>

			<view class="right">
				<view class="setting_box" @click="setting">
					<u--image
						src="/static/my/setting.png"
						width="32px"
						height="32px"></u--image>
				</view>
			</view>
		</view>

		<view class="main">
			<view class="item_box">
				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/wddd.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">我的订单</view>
				</view>

				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/fwxy.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">服务协议</view>
				</view>

				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/wdkc.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">我的课程</view>
				</view>

				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/hbkj.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">红包卡券</view>
				</view>
			</view>

			<view class="item_box">
				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/wdfp.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">我的发票</view>
				</view>

				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/kchf.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">课程回放</view>
				</view>

				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/hyzx.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">会员中心</view>
				</view>

				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/yjjy.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">意见建议</view>
				</view>
			</view>

			<view class="item_box">
				<view class="item">
					<view class="img_box">
						<u--image
							src="/static/my/wdhd.png"
							width="32px"
							height="32px"></u--image>
					</view>
					<view class="txt">我的活动</view>
				</view>

				<view class="item"></view>

				<view class="item"></view>
				<view class="item"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: "Hello",
		};
	},
	onLoad() {},
	methods: {
		setting() {
			uni.navigateTo({
				url: "/pages/my/basic-information/index",
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.content {
	.userInfo {
		display: flex;
		padding: 120rpx 80rpx;
		justify-content: space-between;
		align-items: center;
		background-color: red;
		.person {
			display: flex;
			align-items: center;
			.img_box {
				margin-right: 50rpx;
			}

			.jyhy_box {
				display: flex;
				align-items: center;
				color: #fff;
				background-color: #377f7f;
				padding: 4rpx;

				.mr-10 {
					margin-right: 10rpx;
				}
			}
		}
	}

	.main {
		.item_box {
			display: flex;
			margin-bottom: 100rpx;
			.item {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-right: 20rpx;
				// background-color: yellow;

				& .img_box {
					margin-bottom: 10rpx;
				}

				& .txt {
					font-size: 28rpx;
				}
			}
		}

		.item_box1 {
			display: flex;
		}
	}
}
</style>
