function addFive(a)
{
	return a+5;
}
console.log("Add 5:")
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));


function isInt(a)
{
	return Number(a) === a && a%1 === 0;
}
function getOpposite(a)
{
  if(isInt(a))
  {
  	return -1*a;
  }
  return -1;
}

console.log("getOpposite:")
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));

function toSeconds(a)
{
	return a*60;
}
console.log("toSeconds:")
console.log(toSeconds(5));
console.log(toSeconds(50));

function toNumber(a)
{
	arr = a.split("");
	l = arr.length;
	summ = 0;
	for(var i=0;i<l;i++)
    {
    summ = (summ*10) + parseInt(arr[i]);
    }
    return summ

}

console.log("toInteger:");
console.log(toNumber("1000"));
console.log(toNumber("6"));
console.log(toNumber("12"));

function nextNumber(a)
{
	return a+1;
}
console.log("nextNumber:");
console.log(nextNumber(0));
console.log(nextNumber(9));
console.log(nextNumber(-3));

function getFirstElement(a)
{
	return a[0];
}

console.log("getFirstElement:")
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement([80, 5, 100]));
console.log(getFirstElement([-500, 0, 50]));


function hoursToSeconds(a)
{
	return a*3600;
}

console.log("hoursToSeconds:");
console.log(hoursToSeconds(2));
console.log(hoursToSeconds(10));
console.log(hoursToSeconds(24));

function findPerimeter(a,b)
{
	return a+a+b+b;
}

console.log("Recatangle perimeter:")
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20,10));
console.log(findPerimeter(2, 9));


function lessthanHundread(a,b)
{
	if((a+b)<100)
	{
		return true;
	}
	return false
}

console.log("Lessthan100:")
console.log(lessthanHundread(22,15));
console.log(lessthanHundread(83,34));

function remainder(a,b)
{
	return a%b;
}
console.log("Remainder:")
console.log(remainder(1,3));
console.log(remainder(3,4));
console.log(remainder(-9,45));
console.log(remainder(5,5));


function countAnimals(a,b,c)
{
	return (a*2 + (b+c)*4)
}
console.log("countAnimals:")
console.log(countAnimals(2,3,5));
console.log(countAnimals(1,2,3));
console.log(countAnimals(5,2,8));


function frames(a,b)
{
	console.log(a*b*60);
}
console.log("Frames per second:");
frames(1, 1);
frames(10, 1);
frames(10, 25); 


function divisibleByFive(a)
{
	if(a%5===0)
	{
		console.log(true);
	}
	else
	{
		console.log(false);
	}
}

console.log("divisibleByFive")
divisibleByFive(5)
divisibleByFive(-55)
divisibleByFive(37)

function isEven(a)
{   
	if (! isInt(a))
	{
		console.log(-1);
		
	}
	else if(a%2===0)
	{
		console.log(true);
	}
	else
	{
		console.log(false);
	}
}
console.log("isEven:")
isEven(12);
isEven(0);
isEven(11);
isEven("11h");

function areBothOdd(a,b)
{
	if(a%2!=0 && b%2!=0)
	{
		console.log(true);
	}
	else
	{
		console.log(false);
	}
}
console.log("areBothOdd")
areBothOdd(1, 3);
areBothOdd(1, 4);
areBothOdd(2, 3);
areBothOdd(0, 0);


function getFullName(firstName="", lastName="")
{
	console.log(firstName+lastName);
}
console.log("getFullName");
getFullName("GUVI", "GEEK");
getFullName("GUVI", );
getFullName("","GEEK");
getFullName("", "");


function getLengthOfWord(word=-1)
{
	if(!(typeof word === "string"))
	{
		console.log("-1");
	}
	else
	{
		console.log(word.length);
	}
}
console.log("getLengthOfWord:")
getLengthOfWord("GUVI");
getLengthOfWord("");
getLengthOfWord();
getLengthOfWord(9);

function isSameLength(word1, word2)
{
	return word1.length === word2.length;
}
console.log("isSameLength:");
console.log(isSameLength("Guvi","Geek"));


function getDistance(x1, y1, x2, y2)
{
   xx = x1-x2;
   yy = y1-y2;
   return Math.sqrt((xx*xx)+(yy*yy));
}

console.log("getDistance");
console.log(getDistance(100,100,400,300));


function getNthElement(arr, idx)
{
	if ((arr.length)<=idx)
	{
		return undefined;
	}
	return arr[idx];
}
console.log("getNthElement");
console.log(getNthElement([1, 3, 5], 1));
console.log(getNthElement([],3));


function getLastElement(a)
{
	return a.pop()
}

console.log("getLastElement");
console.log(getLastElement([1,2,3]));

function getProperty(a,k)
{
	if (k in a)
	{
		return a[k];
	}
	return "NA"
}
var obj = {"mykey": "value"}
console.log("getProperty");
console.log(getProperty(obj,"mykey"));
console.log(getProperty(obj,"hh"));


function addProperty(a,k)
{
	a[k]=true;
}
var obj = {"mykey": "value"}
console.log("addProperty");
console.log(addProperty(obj,"mykey2"));
console.log(obj);


function rmProperty(a,k)
{
	delete a[k]
}
var obj = {"mykey2": "value"}
console.log("rmProperty");
console.log(rmProperty(obj,"mykey2"));


var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr)
{   
	var x1=0, x2=0;
	
    for(i of arr)
    {
    	console.log(i);
    	if (i<0)
    	{
    		x1 +=i;
    	}
    	else
    	{
    		x2++;
    	}
    }
    return [x1,x2];
}
console.log("countPositivesSumNegatives")
console.log(ar2(arr));

function getPositives(ar)
{
 var res = []
 for(i of arr)
 {
 	if(i>=0)
 	{
      res.push(i);
 	}
 }
 return res;
}

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log("getPositives");
console.log(ar2);


function powersOfTwo(a)
{
	var res =[1], i=0;
	var count = 1;
	for(var i=1;i<=a; i++)
 	{
        count = count*2;
        res.push(count);
	}
	console.log(res);
}

console.log("powersOfTwo");
powersOfTwo(0);
powersOfTwo(1);
powersOfTwo(2);


function findMax(ar)
{
    var max = ar[0];
    for(i=1;i<ar.length;i++)
    {
    	if(ar[i]>max)
    	{
    		max=ar[i];
    	}
    }
    return max;
}
console.log("findMax");
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);

function isPrime(n)
{
    for(var i=parseInt(n/2);i>1;i--)
    {
        if(n%i === 0)
        {
            return false;
        }
    }
    return true;
}

function printPrimes(nPrimes)
{
	for(var i=2;i<=nPrimes;i++)
	{
		if(isPrime(i))
		{
			console.log(i);
		}
	}
}

console.log("printPrimes")
printPrimes(100);



function getPrimes(nPrimes, startAt)
{   
	var n = nPrimes;
	var i = startAt;
	var res = []
	while(true)
	{
		if(isPrime(i))
		{
           res.push(i);
           n--;
		}
		if(n==0)
		{
			return res;
		}
		i++;

	}
}

console.log("getPrimes");
console.log(getPrimes(10, 100));

console.log("Reverse string:")
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   return s.split("").reverse().join("");  
}


console.log("mergeArrays:")
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);

function mergeArrays(ar1, ar2)
{
	var result = [];
	for(let el of ar1)
	{
		result.push(el);
	}
	for(let el of ar2)
	{
		result.push(el);
	}
	return result;
}


console.log("SUM CSV")
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
   return s.split(" ").map((e)=>parseFloat(e)).reduce((e, summ)=>summ+e)
}