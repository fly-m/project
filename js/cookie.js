//增删改查
//增:设置cookie
function setCookie(name,value,expires1){
	//name=value
	var cookiestr = encodeURIComponent(name) +"=" +encodeURIComponent(value); //加编码
	//expires=过期时间
	if(expires1 instanceof Date){
		cookiestr+=";expires=" +expires1;
	} //添加到cookie中
	document.cookie =cookiestr;
	return decodeURIComponent(document.cookie); //加解码
}
//查:获取cookie
function getCookie(name){
	//根据name获得name的value值;
	var cookiestr =decodeURIComponent(document.cookie);
	//拆分字符串cookiestr
	var arr = cookiestr.split("; ");
	for(var i = 0; i < arr.length; i++){
		var str = arr[i];
		var arr2 = str.split("=");
		if(arr2.length > 2 && arr[0] == name){
			arr2.shift();//删除第一个元素
			return arr2.join("=");//连接
		}
		if(arr2.length >= 2 && arr2[0] == name){
			return arr2[1];
		}
	}
	return "";
}
//删:删除cookie
function removeCookie(){
	//把过去时间设置为当前时间或者过去时间
	document.cookie=encodeURIComponent(name)+"=;expires="+new Date();
}