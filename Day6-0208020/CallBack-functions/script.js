function second(a,b) {
	var opr1 = 10;
	var opr2 = 90;
	console.log(b[a](opr1,opr2));
}

arr = [add,sub,mul,div];
second(0,arr);  // 100
second(1,arr);  // -80
second(2,arr);  // 900
second(3,arr);  //0.1

function add(a,b)
{
  return a+b;
}
function sub(a,b)
{
	return a-b;
}
function mul(a,b)
{
	return a*b;
}

function div(a,b)
{
	return a/b;
}