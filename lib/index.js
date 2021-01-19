// request.js
import axios from 'axios';
import router from '../router'
//将JSON数据改为为form类型
import qs from 'qs';

import Cookies from 'js-cookie';

let service = axios;
service.defaults.timeout = 200000;         //响应时间
// axios.defaults.withCredentials = true// 允许携带cookie
service.interceptors.response.use((config) => {

	

	return config;
}, error => { // for debug 
		return Promise.reject(error) //接口500抛出异常（不走页面逻辑）
	
});

// get请求
function getRequest(url, data = {}, method = 'get') {
	return new Promise((resolve, reject) => {

		
		//请求头
		let header = {};
		//登录接口不用传token
		if(url.includes('api/v1/user/signIn')){
			header = {
				'content-type': 'application/json',
				'terminal':'PC'
			}
		}else{
			header = {
				'content-type': 'application/json',
				'Authorization':'Bearer '+ Cookies.get('token'),
				'terminal':'PC'
			}
		}

		//如果 匹配 就换content-type 类型
		if (url.includes('TestApi/v1/user/signIn')) {   
			header['content-type'] = 'application/x-www-form-urlencoded';
			header['Authorization'] = 'Bearer '+ Cookies.get('token');
			header['terminal'] = 'PC';
		}

		/**x添加终端类型   1：PC  2：诊所端*/
		if(data.terminalType == undefined){
			data.terminalType = 2;
		}

		service({
				url: url,
				method: method,
				headers: header,
				data: data
			})
			.then(res => {
				//成功
				resolve(res.data)
				
			})
			.catch(res => {
				//失败
				reject(res);
			})

	})
}


// post请求
function postRequest(url, data = {}, method = 'post', loadMask = true) {
	return new Promise((resolve, reject) => {
		
		//请求头
		let header = {};
		//登录接口不用传token
		if(url.includes('api/v1/user/signIn')){
			header = {
				'content-type': 'application/json',
				'terminal':'PC'
			}
		}else if(url.includes('admin/v1/upload')){
			header = {
				'content-type': 'multipart/form-data',
				'Authorization':'Bearer '+ Cookies.get('token'),
				'terminal':'PC'
			}
		}
		else if (url.includes('TestApi/v1/user/signIn')) {   
			header['content-type'] = 'application/x-www-form-urlencoded';
			header['Authorization'] = 'Bearer '+ Cookies.get('token');
			header['terminal'] = 'PC';
			method = "POST";

		}
		else{
			header = {
				'content-type': 'application/json',
				'Authorization':'Bearer '+ Cookies.get('token'),
				'terminal':'PC'
			}
		}
		

		// //如果 匹配 就换content-type 类型
		// if (url.includes('TestApi/v1/user/signIn')) {   
		// 	header['content-type'] = 'application/x-www-form-urlencoded';
		// }
		// else if(url.includes('api/v1/upload')){
		// 	header['content-type'] = 'multipart/form-data';
		// }

		/**x添加终端类型   1：PC  2：诊所端*/
		if(data.terminalType == undefined){
			data.terminalType = 2;
		}
		// XWWW 转换 POST data数据处理
		if (method === 'XWWW') {
			data = qs.stringify(data);
			header = {
				'content-type': 'application/x-www-form-urlencoded',
				'Authorization':'Bearer '+ Cookies.get('token'),
				'terminal':'PC'
			}
			method = 'POST'
		}

		axios({
				url: url,
				method: method,
				headers: header,
				// data: qs.stringify(data)
				data:data
			})
			.then(res => {
				//成功
				resolve(res.data)
				
			})
			.catch(error => {
				//报错就提示网络不佳
				let sign = {
					mesg:'网络不佳，请稍后重试！'
				}
				//失败
				resolve(sign)
			})

	})
}



// put请求
function putRequest(url, data = {}, method = 'put') {
	return new Promise((resolve, reject) => {


		//请求头
		let header = {};
		//登录接口不用传token
		if(url.includes('api/v1/user/signIn')){
			header = {
				'content-type': 'application/json',
				'terminal':'PC'
			}
		}else{
			header = {
				'content-type': 'application/json',
				'Authorization':'Bearer '+ Cookies.get('token'),
				'terminal':'PC'
			}
		}

		//如果 匹配 就换content-type 类型
		if (url.includes('TestApi/v1/user/signIn')) {   
			header['content-type'] = 'application/x-www-form-urlencoded';
			header['terminal'] = 'PC';
		}

		/**x添加终端类型   1：PC  2：诊所端*/
		if(data.terminalType == undefined){
			data.terminalType = 2;
		}
		// XWWW 转换 POST data数据处理
		if (method === 'XWWW') {
			data = qs.stringify(data);
			header = {
				'content-type': 'application/x-www-form-urlencoded',
				'Authorization':'Bearer '+ Cookies.get('token'),
				'terminal':'PC'
			}
			method = 'PUT'
		}

		service({
				url: url,
				method: method,
				headers: header,
				// data: qs.stringify(data)
				data:data
			})
			.then(res => {
				//成功
				resolve(res.data)
			})
			.catch(res => {
				//报错就提示网络不佳
				let sign = {
					mesg:'网络不佳，请稍后重试！'
				}
				//失败
				resolve(sign)
				// reject(res)
			})

	})
}

// delete请求
function deleteRequest(url, data = {}, method = 'delete') {
	return new Promise((resolve, reject) => {



		//请求头
		let header = {};
		//登录接口不用传token
		if(url.includes('api/v1/user/signIn')){
			header = {
				'content-type': 'application/json',
				'terminal':'PC'
			}
		}else{
			header = {
				'content-type': 'application/json',
				'Authorization':'Bearer '+ Cookies.get('token'),
				'terminal':'PC'
			}
		}

		//如果 匹配 就换content-type 类型
		if (url.includes('TestApi/v1/user/signIn')) {   
			header['content-type'] = 'application/x-www-form-urlencoded';
			header['terminal'] = 'PC';
		}

		/**x添加终端类型   1：PC  2：诊所端*/
		if(data.terminalType == undefined){
			data.terminalType = 2;
		}

		service({
				url: url,
				method: method,
				headers: header,
				// data: qs.stringify(data)
				data:data
			})
			.then(res => {
				//成功
				resolve(res.data)
			})
			.catch(res => {
				//报错就提示网络不佳
				let sign = {
					mesg:'网络不佳，请稍后重试！'
				}
				//失败
				resolve(sign)
				// reject(res)
			})

	})
}

//下载文件
function downLoadRequest(url, data = {}, method = 'get') {
	return new Promise((resolve, reject) => {


		let header = {
			'content-type': 'application/json',
			'Authorization':'Bearer '+ Cookies.get('token'),
			'terminal':'PC'
		}
		let subObj = {};

		//get方式
		if(method == 'get'){
			subObj={
				url: url,
				method: method, 
				headers: header,
				params:data,
				responseType: 'blob',
			};
		}else{//post方式
			subObj={
				url: url,
				method: method, 
				headers: header,
				data:data,
				responseType: 'blob',
			};
		}


		service(subObj)
		.then(res => {
			//成功
			resolve(res.data)

			
		})
		.catch(res => {
			//失败
			reject(res)
		
		})
	})
}

service.jsonp = (url) => {
	if(!url){
		console.error('Axios.JSONP 至少需要一个url参数!')
		return;
	}
	return new Promise((resolve, reject) => {
		window.jsonCallBack =(result) => { resolve(result) }
		var JSONP = document.createElement("script");
		JSONP.type="text/javascript";
		JSONP.src=`${url}&callback=jsonCallBack`;
		document.getElementsByTagName("body")[0].appendChild(JSONP);
		setTimeout(() => {
			document.getElementsByTagName("body")[0].removeChild(JSONP);
		},500)
	})
}
// JSONP请求
function jsonpRequest(url) {
	return new Promise((resolve, reject) => {
		service.jsonp(url)
		.then(res => { resolve(res) })
		.catch(error => { reject(error) })
	})
}

export default {
	postRequest: postRequest,
	getRequest:getRequest,
	putRequest:putRequest,
	deleteRequest:deleteRequest,
	downLoadRequest:downLoadRequest,
	jsonpRequest: jsonpRequest
}
