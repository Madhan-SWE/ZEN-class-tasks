console.log("Print odd numbers in the array")
console.log("Anonymous function:")
a = [1,2,3,4,5,6,7,8,9,10]
var odd = function(arr){ 
	var res = [];
	for(i of arr)
	{
		if (i%2!=0)
		{
			res.push(i);
		}
	}
	return res;
}

odd(a);

console.log("IIFE:");
var r = (function(arr)
{
	var res = [];
	for(i of arr)
	{
		if (i%2!=0)
		{
			res.push(i);
		}
	}
	return res;
})(a);
console.log(r);


console.log("Strings to titleCaps:");
console.log("Anonymous function:");
var input = ["my name is madhan"];
var res_str = function(word)
{   
	return word.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1)}).join(" ");
}
console.log(res_str(input[0]));

console.log("IIFE:");
var res = (function(word) {
    return word.split(" ").map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1)}).join(" ");
})(input[0]);
console.log(res);


console.log("SUM of all numbers in array:");
console.log("Anonymous function:");
var arr = [1,2,3,4,5];
var out = function(arr)
{
	return arr.reduce((a,b)=>a+b);
}
console.log(out(arr));


console.log("IIFE:");
out = (function(arr){ return arr.reduce((a,b)=>a+b); })(arr);
console.log(out);

function isPrime(n)
{
	for(var i=2;i<=parseInt(n/2);i++)
	{
		if (n%i === 0)
		{
			return false;
		}
		return true;
	}
}

var arr = [1,2,3,4,5,6,7,8,9,10,11];
console.log("Prime numbers in the array:");
console.log("Anonymous function:");
out = function(arr){
	return arr.filter((e)=>isPrime(e));
}
console.log(out(arr));
console.log("IIFE:");
console.log((function(arr){ return arr.filter((e)=>isPrime(e)); })(arr));


console.log("Polindromes in an array:");
console.log("Anonymous function:");

function isPolyndrome(str)
{
	return str.split("").reverse().join("") === str;
}

arr = ["madam", "madhan", "dad", "Manago"]
res = function(arr){ return arr.filter((e)=>isPolyndrome(e))};
console.log(res(arr));
console.log("IIFE:");
console.log(( function(e){ return arr.filter((e)=>isPolyndrome(e)) })(arr));

console.log("Median of 2 sorted arrays:");
console.log("Anonymous function:");
var a1 = [1,2,3,4,5,6,7];
var a2 = [10,11,12,13,14,15,16];

var median = function (a1,a2,n)
{
    var i=0,j=0, m1=-1, m2=-1, count=0;
    while(count<n+1)
    {
        count++;
        if(i==n)
        {
            m1=m2;
            m2=a2[0];
            break;
        }
        else if(j==n)
        {
            m1=m2;
            m2=a1[0];
            break;
        }
        if(a1[i]<=a2[j])
        {
            m1=m2;
            m2=a1[i];
            i++;
        }
        else
        {
            m1=m2;
            m2=a2[j];
            j++;
        }
    }
    console.log(m1,m2);
    return ((m1+m2)/2);
}
var n = a1.length;
console.log(median(a1,a2,a1.length));
console.log("IIFE:");
out = (function (a1,a2,n)
{
    var i=0,j=0, m1=-1, m2=-1, count=0;
    while(count<n+1)
    {
        count++;
        if(i==n)
        {
            m1=m2;
            m2=a2[0];
            break;
        }
        else if(j==n)
        {
            m1=m2;
            m2=a1[0];
            break;
        }
        if(a1[i]<=a2[j])
        {
            m1=m2;
            m2=a1[i];
            i++;
        }
        else
        {
            m1=m2;
            m2=a2[j];
            j++;
        }
    }
    console.log(m1,m2);
    return ((m1+m2)/2);
})(a1,a2,a1.length);

console.log(out);


arr = [1,2,1,3,4,5,6,3,2];

console.log("Remove duplicates")
console.log("Anonymous function:");
var res = function removeDuplicates(arr)
{
	var u = [];
	arr.forEach((e) => {
	if (! u.includes(e)) { u.push(e); }
	});
	return u;
}

console.log(res(arr))

console.log("IIFE:");

var out = (function(arr){
	var u = [];
	arr.forEach((e) => {
	if (! u.includes(e)) { u.push(e); }
	});
	return u;
}) (arr);
console.log(out);


console.log("Rotate array by k times:")
console.log("Anonymous function:");
var a=[1,2,3,4,5,6,7,8];
var k=3;
var res = function(a,k) {
    return a.slice(n-k, n).concat(a.slice(0,n-k));
}
console.log(res(a,k));

console.log("IIFE:");
var out = (function(a,k){
	return a.slice(n-k, n).concat(a.slice(0,n-k));
})(a,k);
console.log(out);
