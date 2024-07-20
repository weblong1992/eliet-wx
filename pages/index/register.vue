<template>
	<view class="register">
		
		<view class="tit">
			学员注册
		</view>
		
		
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<view class="form_box">
			<u--form
				labelPosition="left"
				labelWidth="100"
				:model="model1"
				ref="uForm">
				<u-form-item
					label="中文姓名"
					prop="userInfo.name"
					borderBottom
					ref="item1">
					<u--input
						placeholder="请输入中文姓名"
						v-model="model1.userInfo.name"
						border="none"></u--input>
				</u-form-item>
			
				<u-form-item
					label="英文姓名"
					prop="userInfo.name"
					borderBottom
					ref="item1">
					<u--input
						placeholder="请输入英文姓名"
						v-model="model1.userInfo.name"
						border="none"></u--input>
				</u-form-item>
			
				<u-form-item
					label="学生年龄"
					prop="userInfo.name"
					borderBottom
					ref="item1">
					<u--input
						placeholder="请输入学生年龄"
						v-model="model1.userInfo.name"
						border="none"></u--input>
				</u-form-item>
			</u--form>
				
		</view>
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSex: false,
			model1: {
				userInfo: {
					name: "uView UI",
				},
			},

			rules: {
				"userInfo.name": {
					type: "string",
					required: true,
					message: "请填写姓名",
					trigger: ["blur", "change"],
				},
			},
		};
	},
	methods: {},
	onReady() {
		//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
		// this.$refs.uForm.setRules(this.rules)
	},
};
</script>

<style lang="scss" scoped>
	.register {
		height: 100%;
		.tit {
			display: flex;
			justify-content: center;
			font-size: 56rpx;
			padding: 40rpx 0;
		}
		& .form_box {
			.u-form-item {
				padding: 0 20rpx;
			}
			
		}
		
	}
</style>
