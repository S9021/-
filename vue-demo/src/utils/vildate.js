//用户名匹配
export function NameRuler(rule, value,callback){
	let reg = /(^[a-zA-Z0-9]{4,10}$)/
	if(value === ''){
		callback(Error('输入用户名'))
	}else if(!reg.test(value)){
		callback(Error('4-10位'))
	}else{
		callback()
	}
}
//密码
export function PassRuler(rule, value,callback){
	let pass = /^.*(?=.{6,12})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
	if(value === ''){
		callback(Error('输入密码'))
	}else if(!pass.test(value)){
		callback(Error('至少一个大写'))
	}else{
		callback()
	}
}