<template>
	<view>
		<!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
		<u--form
			labelPosition="left"
			labelWidth="100"
			:model="model1"
			:rules="rules"
			ref="uForm">
			<!-- 	<u-form-item
					label="姓名"
					prop="userInfo.name"
					borderBottom
					ref="item1"
			>
				<u--input
						v-model="model1.userInfo.name"
						border="none"
				></u--input>
			</u-form-item> -->
			<u-form-item
				label="课程类型"
				prop="userInfo.classType"
				borderBottom
				@click="showSex = true"
				ref="item1">
				<u--input
					v-model="model1.userInfo.classType"
					disabled
					disabledColor="#ffffff"
					placeholder="请选择课程类型"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<u-form-item
				label="外教选择"
				prop="userInfo.foreignTeacher"
				borderBottom
				@click="showForeignTeacher = true"
				ref="item1">
				<u--input
					v-model="model1.userInfo.foreignTeacher"
					disabled
					disabledColor="#ffffff"
					placeholder="请选择外教"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>

			<u-form-item
				label="日期选择"
				prop="userInfo.examDate"
				borderBottom
				@click="dateShow = true"
				ref="item1">
				<u--text
					v-if="model1.userInfo.examDate"
					:text="getDate(model1.userInfo.examDate)"></u--text>

				<u-datetime-picker
					@confirm="examDateConfirm"
					:show="dateShow"
					v-model="model1.userInfo.examDate"
					mode="date"></u-datetime-picker>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
		</u--form>

		<u-action-sheet
			:show="showSex"
			:actions="actions"
			title="请选择课程类型"
			@close="showSex = false"
			@select="sexSelect"></u-action-sheet>

		<!-- foreignTeacher -->
		<u-action-sheet
			:show="showForeignTeacher"
			:actions="actions1"
			title="请选择外教"
			@close="showForeignTeacher = false"
			@select="foreignTeacherSelect"></u-action-sheet>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showSex: false,
			showForeignTeacher: false,
			dateShow: false,
			model1: {
				userInfo: {
					foreignTeacher: "",
					classType: "",
					// examDate: Number(new Date()),
					examDate: Number(new Date()),
				},
			},
			actions: [
				{
					name: "国际小学口语课",
				},
				{
					name: "留学预科",
				},
				{
					name: "普通定制",
				},
			],
			actions1: [
				{
					name: "外教1",
				},
				{
					name: "外教2",
				},
			],
			rules: {
				"userInfo.foreignTeacher": {
					type: "string",
					required: true,
					message: "请选择外教",
					trigger: ["blur", "change"],
				},
				"userInfo.classType": {
					type: "string",
					required: true,
					message: "请选择课程类型",
					trigger: ["blur", "change"],
				},
				"userInfo.classType": {
					type: "string",
					required: true,
					message: "请选择体验时间",
					trigger: ["blur", "change"],
				},
			},
			radio: "",
			switchVal: false,
		};
	},
	methods: {
		sexSelect(e) {
			this.model1.userInfo.classType = e.name;
			this.$refs.uForm.validateField("userInfo.classType");
		},
		foreignTeacherSelect(e) {
			this.model1.userInfo.foreignTeacher = e.name;
			this.$refs.uForm.validateField("userInfo.foreignTeacher");
		},
		examDateConfirm(e) {
			console.log(e);
			console.log(typeof(this.getDate(e.value)));
			
			this.model1.userInfo.examDate = e.value;
			// this.$set(this.model1.userInfo,"examDate",this.model1.userInfo.examDate)
			this.dateShow = false;
		},
		getDate(timestamp){
		
			const date = new Date(timestamp);
			const utcYear = date.getUTCFullYear();
			const utcMonth = date.getUTCMonth() + 1; //月份是从0开始的，所以要加1
			const utcDay = date.getUTCDate();
			 
			const result = utcYear + '-' + utcMonth + '-' + utcDay;
			console.log(result); // 输出：2021-01-01
			
			return result;
		}
	},
	onReady() {
		//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
		this.$refs.uForm.setRules(this.rules);
	},
};
</script>
