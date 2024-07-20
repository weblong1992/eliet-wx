<template>
	<view class="trial-class">
		<u-modal @cancel="cancel" @confirm="confirm" :show="show" :title="title" :content='content' :showCancelButton="showCancelButton" :closeOnClickOverlay="true" @close="close" ></u-modal>
		
		<view class="con">
			<view class="h_106">
				<view>
					体验课
				</view>
				
				<view>
					￥199
				</view>
			</view>
		</view>
		
		<view class="h_500">
				<view>
					专业口语测评1次
				</view>
				
				<view>
					25分钟英美外教体验课1次
				</view>
				<view>
					英语学习计划一份
				</view>
				
				<view>
					价值199元Eliet English
				</view>
				
				<view>
					课程抵扣券一张
				</view>
				
				<view class="btnBox">
					<u-button @click="showDialog" class="buy" text="立即购买" color="#75f9fc"></u-button>
				</view>
				
				
			</view>
			
		</view>
		

	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				show:false,
				title:'提交确认',
				content:'体验课购买后，将不支持退订，是否继续确认购买？',
				showCancelButton:true
			};
		},
		methods:{
			showDialog(){
				this.show = true;
			},
			cancel(){
				this.show = false;
			},
			// 点击遮罩层触发
			close(){
				this.show = false;
			}
		}
	}
</script>

<style lang="scss">
	
	.trial-class {
		padding: 40rpx 60rpx;
		//  & /deep/ .u-modal__button-group__wrapper--confirm {
		// 	background-color: $uni-btn-sub;
			
		// 	& span {
		// 		color:#fff !important;
		// 	}
		// }
		
		.con {
			border-radius: 10rpx;
			.h_106 {
				height: 212rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background-color: $uni-btn-sub;
				color: #fff;
				font-size: 56rpx;

			}
		}
		
		.h_500 {
			height: 800rpx;
			padding: 60rpx;
			border: 2rpx solid $uni-btn-sub;
			position: relative;
			
			& > view {
				margin-bottom: 10rpx;
			}
			
			.btnBox {
				position: absolute;
				bottom: 60rpx;
				left: 50%;
				transform: translateX(-50%);
			}
			
		}
		
	}
	
	
	

</style>
