//PART - A

var cat = {
    "name": "Fluffy",
    "activities": ["play", "eat cat food"],
    "catFriends": [
    {
        "name": "bar",
        "activities": ["be grumpy", "eat bread omblet"],
        "weight": 8,
        "furcolor": "white"
    }, 
    {
        "name": "foo",
        "activities": ["sleep", "pre-sleep naps"],
        "weight": 3
    }]
};

cat["name"] = "Fluffyy"
cat["height"] = 20
cat["weight"] = 20

console.log(cat);
console.log("cat friend activities:");
var tw = 0;
var ta = 0;

for (c of cat["catFriends"])
{
    tw = tw + c["weight"];
    ta = ta + c["activities"].length;
    c["activities"].push("Dance");
    c["activities"].push("Sing");

    console.log("name:",c.name,"\nActivities:", c["activities"].join(", "));;
}

console.log("total weight : ", tw);
console.log("total activities: ", ta);

cat.catFriends[0].furcolor = "Green";


//PART - B


var myCar = {
 "make": "Bugatti",
 "model": "Bugatti La Voiture Noire",
 "year": "2019",
 "accidents": [
 {
 "date": "3/15/2019",
 "damage_points": "5000",
 "atFaultForAccident": true
 },
 {
 "date": "7/4/2022",
 "damage_points": "2200",
 "atFaultForAccident": true
 },
 {
 "date": "6/22/2021",
 "damage_points": "7900",
 "atFaultForAccident": true
 }
 ]
}


for(i of myCar.accidents)
{
    i.atFaultForAccident=false;
    console.log("Accident date:")
    console.log(i.date);
}


console.log(myCar);



//Problem 1

var obj = {"name" : "RajiniKanth", "age" : 33, "hasPets" : false};
function printAllValues(obj) {
    res = []
    for(var key in obj)
    {
        res.push(obj[key]);
    }
    return res;
}
console.log(printAllValues(obj));

//Problem2

function printAllKeys(obj) {
res = []
    for(var key in obj)
    {
        res.push(key);
    }
    return res;
}

console.log(printAllKeys(obj));



//Problem3

var obj = {"name": "ISRO", "age": 35, "role": "Scientist"};
function convertListToObject(obj) {
res = []
    for(var key in obj)
    {
        res.push([key, obj[key]]);
    }
    return res;
}

console.log(convertListToObject(obj));



//Problem4

var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    
    newObject = {}
    newObject[arr[0]] = arr[3];
    return newObject;
}


console.log(transformFirstAndLast(arr));


//Problem5

var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
    var newObject = {};
    for(i of arr)
    {
        newObject[i[0]] = i[1];
    } 
return newObject;
}

console.log(fromListToObject(arr));

//Problem6
var arr =   [
                [["firstName", "Vasanth"],
                ["lastName", "Raja"],
                ["age", 24],
                ["role", "JSWizard"]],
                [["firstName", "Sri"],
                ["lastName", "Devi"],
                ["age", 28],
                ["role", "Coder"]]
            ];


function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    
    for(i of arr)
    {
        y = {}
        for(j of i)
        {
            y[j[0]] = j[1];
        }

        console.log(y);
        tranformEmployeeList.push(y);

    }
 
 
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));


//Problem7

var expected = {"foo": 5, "bar": 6};
var actual = {"foo": 5, "bar": 7};

function assertObjectsEqual(actual, expected, testName){
 x = JSON.stringify(actual);
 y = JSON.stringify(expected);
 if (x===y)
 {
    console.log(testName,"[PASSED] Expected:",expected,"Actual:",actual);
 }
 else
 {
    console.log(testName,"[FAILED] Expected:",expected,"Actual:",actual);
 }
}

assertObjectsEqual(expected,actual,"SAMPLE TEST");



//Problem8
var securityQuestions = [
 {
 "question": "What was your first pet's name?",
 "expectedAnswer": "FlufferNutter"
 },
 {
 "question": "What was the model year of your first car?",
 "expectedAnswer": "1985"
 },
 {
 "question": "What city were you born in?",
 "expectedAnswer": "NYC"
 }
]

function chksecurityQuestions(securityQuestions,question, ans) {

 for(q of securityQuestions)
 {
    if (q["question"] === question && ans === q["expectedAnswer"])
    {
        return true;
    }
 }
 return false; 
}

//Test case1:
var ques = "What was your first pet's name?";
var ans  =  "FlufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // true
//Test case2:
var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
var status = chksecurityQuestions(securityQuestions, ques, ans);
console.log(status); // flase



//Problem9

var students = [
 {
 "name": "Siddharth Abhimanyu", age: 21}, { "name": "Malar", "age": 25},
 {"name": "Maari","age": 18},{"name": "Bhallala Deva","age": 17},
 {"name": "Baahubali", "age": 16},{"name": "AAK chandran","age": 23},
 {"name":"Gabbar Singh","age": 33},{"name": "Mogambo","age": 53},
 {"name": "Munnabhai","age": 40},{"name": "Sher Khan","age": 20},
 {"name": "Chulbul Pandey","age": 19},{"name": "Anthony","age": 28},
 {"name": "Devdas","age": 56} 
 ];
function returnMinors(arr)
{
    res = []
    for (i of arr)
    {
        if (i.age<20)
        {
            res.push(i.name)
        }
    }
    return res
}
console.log(returnMinors(students));