


//设置cookie
			/**
			 * 
			 * @param {Object} name  要存数据的键
			 * @param {Object} value 要存数据的值
			 * @param {Object} expires  失效日期
			 * @param {Object} path   访问路径
			 * @param {Object} domain 域名
			 * @param {Object} secure  安全连接
			 */
     function setCookie(name,value,expires,path,domain,secure){
     	// name=value
     	
     	var cookieText = encodeURIComponent(name)+"="+encodeURIComponent(value);
     	
     	//失效日期
     	//判断expires是不是日期对象
     	//instanceof  判断是否属于某种类型，是否是某个对象！
     	if(expires  instanceof Date){
     		cookieText += "; expires="+expires;
     	}
     	
     	//path
     	if(path){
     		cookieText += "; path="+path;
     	}
     	
     	//domain
     	if(domain){
     		cookieText += "; domain="+domain;
     	}
     	
     	//secure
     	if(secure){
     		cookieText += "; secure";
     	}
     	
     	document.cookie = cookieText;//设置cookie
     	return document.cookie;
     }
     
     //获取cookie
     //name=John; password=123456
     
     function getCookie(name){
     	var cookie = decodeURIComponent(document.cookie);
     var arr = cookie.split("; ");
     //[name=John,password=123456]
     	for(var i=0;i<arr.length;i++){
//   		name=John
     		var arr2 = arr[i].split("=");
     		if(arr2.length>=2){//容错处理
     			if(arr2[0]==name){
     				return arr2[1];
     			}
     		}
     	}
     	return "";
     }
     
     //删除cookie的代码
     function removeCookie(name){
     	var d = new Date();
     	document.cookie = decodeURIComponent(name)+"=; expires="+d;
     	return document.cookie;
     }