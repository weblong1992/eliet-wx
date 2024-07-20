<script>
export default {
	data() {
		return {
			tabBarList: [],
		};
	},
	methods: {
		handleTabBarClick(item) {
			console.log(item);
		},
	},
	// onLaunch: function () {
	// 	// 监听tabbar页面跳转，如果url == ''  就提示暂未开放。
	// 	uni.addInterceptor("switchTab", {
	// 		invoke(e) {
	// 			console.log(e);
	// 			// if (e.url == "/pages/mine/mine") {
	// 			// 	uni.showToast({
	// 			// 		icon: "none",
	// 			// 		mask: true,
	// 			// 		title: "暂未开放",
	// 			// 	});
	// 			// 	return false;
	// 			// }
	// 		},
	// 		success: (e) => {
	// 			console.log("OK", e);
	// 		},
	// 	});
	// },
	// onShow: function () {
	// 	console.log("App Show");
	// },
	// onHide: function () {
	// 	console.log("App Hide");
	// },
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "@/uni_modules/uview-ui/index.scss";

uni-page-body {
	height: 100%;
}
body {
	width: 100%;
	height: 100%;
}
</style>
