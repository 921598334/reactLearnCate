// 浏览器在前端设置token，如果存在就可以跳转到主页面，否则就跳转到登录界面

export function getToken(){
    return localStorage.getItem('token')
}

export function setToken(token){
    localStorage.setItem('token',token)
}

export function isLogined(){
    if(localStorage.getItem('token')){
        return true;
    }else{
        return false;
    }
}

export function clearToken(){
    localStorage.removeItem('token')
}