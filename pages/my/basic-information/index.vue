<template>
	<view class="basic-info">
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form
			labelPosition="left"
			labelWidth="100"
			:model="model1"
			:rules="rules"
			ref="uForm">
			<u-form-item
				label="头像"
				prop="userInfo.pic"
				borderBottom
				ref="item1">
				<u--input
					class="common"
					inputAlign="right"
					v-model="model1.userInfo.name"
					border="none"></u--input>
			</u-form-item>

			<u-form-item
				label="姓名"
				prop="userInfo.name"
				borderBottom
				ref="item1">
				<u--input
					class="common"
					inputAlign="right"
					v-model="model1.userInfo.name"
					border="none"></u--input>
			</u-form-item>

			<u-form-item
				label="英文名"
				prop="userInfo.eName"
				borderBottom
				ref="item1">
				<u--input
					class="common"
					inputAlign="right"
					v-model="model1.userInfo.eName"
					border="none"></u--input>
			</u-form-item>

			<u-form-item
				label="手机号"
				prop="userInfo.phone"
				borderBottom
				ref="item1">
				<u--input
					class="common"
					inputAlign="right"
					v-model="model1.userInfo.phone"
					border="none"></u--input>
			</u-form-item>

			<u-form-item
				label="邮箱"
				prop="userInfo.email"
				borderBottom
				ref="item1">
				<u--input
					class="common"
					inputAlign="right"
					v-model="model1.userInfo.email"
					border="none"></u--input>
			</u-form-item>

			<u-form-item
				label="微信号"
				prop="userInfo.wxchart"
				borderBottom
				ref="item1">
				<u--input
					class="common"
					inputAlign="right"
					v-model="model1.userInfo.wxchart"
					border="none"></u--input>
			</u-form-item>

			<u-form-item
				label="通讯地址"
				prop="userInfo.address"
				borderBottom
				ref="item1">
				<u--input
					class="common"
					inputAlign="right"
					v-model="model1.userInfo.address"
					border="none"></u--input>
			</u-form-item>
		</u--form>
		<view class="btns">
			<view class="save">
				<u-button text="保存修改" color="#54bcbd"></u-button>
			</view>
			
			<view class="logout">
				<u-button text="退出登录" color="#54bcbd"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			fileList1: [],
			model1: {
				userInfo: {
					name: "",
					eName: "",
					phone: "",
					email: "",
					wxchart: "",
					address: "",
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
	methods: {
		sexSelect(e) {
			this.model1.userInfo.sex = e.name;
			this.$refs.uForm.validateField("userInfo.sex");
		},
	},
	onReady() {
		//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
		// this.$refs.uForm.setRules(this.rules)
	},
};
</script>

<style lang="scss" scoped>
.basic-info {
	position: relative;
	height: 100%;

	& /deep/ .common {
		text-align: right;
	}

	.u-form-item {
		padding: 0 20rpx;
	}

	.btns {
		box-sizing: border-box;
		width: 100%;
		margin-top: 50rpx;
		padding:  0 100rpx;
	
		.save {
			margin-bottom: 50rpx;
		}
	}
}
</style>
