import request from "./request.js"

// 微信登录
export const wxLogin = (data) =>{

   return request('/api/app/member/wxLogin','POST',data)
        
}


// 手机号登录
export const login = (data) =>{

   return request('/api/app/member/login','POST',data)
        
}


// 发送短信
export const sendPhomeSms = (data) =>{

   return request('/api/app/sms/sendPhomeSms','POST',data)
        
}

