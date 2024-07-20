export default {
	//接口请求域名配置
	api: function() {
		let curVersion = uni.getAccountInfoSync().miniProgram.envVersion;
		switch (curVersion) {
			case "develop": //开发版
				return "http://120.55.181.91:8096";
			case 'trial': //体验版
				return "https://api.lietkid.com.cn "
			case 'release': //正式版
				return "https://api.lietkid.com.cn "
			default: //其他,默认调用正式版
				return "https://api.lietkid.com.cn "
		}
	}
}
 