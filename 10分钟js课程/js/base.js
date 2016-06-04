// 注释1

/* 
	注释2
	注释3
*/

var a=1,b=2;
var c=a+b;
console.log(c);

d=a+c;
console.log(d);

function methodName(){
	console.log("methodName+" + methodArgs(11,22));
}

function methodArgs(argFirst,argSecond){
	return argFirst+argSecond;
}

methodName();