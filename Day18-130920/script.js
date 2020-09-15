var chunk = function (arr, chunkSize) {
    if (chunkSize === void 0) { chunkSize = 1; }
    var arrLength = arr === null ? 0 : arr.length;
    chunkSize = chunkSize > 0 ? chunkSize : 0;
    if (!arrLength) {
        return [];
    }
    var resSize = 1;
    for (var i = 0; i < arrLength; i++) {
        if (i >= resSize * chunkSize) {
            resSize++;
        }
    }
    var res = new Array(resSize);
    var totalChunks = resSize;
    var currentChunk = 1;
    var currentChunkIdx = 0;
    var chunkRes;
    for (var i = 0; i < arrLength; i++) {
        if (i >= currentChunk * chunkSize) {
            currentChunk++;
        }
        if (currentChunkIdx === 0) {
            if (currentChunk * chunkSize < arrLength) {
                chunkRes = new Array(chunkSize);
            }
            else {
                var chunkResSize = chunkSize - (currentChunk * chunkSize - arrLength);
                chunkRes = new Array(chunkResSize);
            }
        }
        chunkRes[currentChunkIdx] = arr[i];
        currentChunkIdx++;
        if (currentChunkIdx === chunkSize || i === arrLength - 1) {
            res[currentChunk - 1] = chunkRes;
            currentChunkIdx = 0;
        }
    }
    return res;
};
var displayChunkres = function (chunkRes) {
    for (var i = 0; i < chunkRes.length; i++) {
        console.log("CHUNK: ", i + 1);
        var a = chunkRes[i];
        for (var j = 0; j < a.length; j++) {
            console.log(a[j]);
        }
    }
};
console.log("#########################################################");
console.log("1.Chunk method test: ");
console.log("#########################################################");
console.log("==================Testcase 1:===================");
var chunkRes = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);
displayChunkres(chunkRes);
console.log("==================Testcase 2:===================");
chunkRes = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 1);
displayChunkres(chunkRes);
console.log("==================Testcase 3:===================");
chunkRes = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
displayChunkres(chunkRes);
var reduce = function (objInput, func, accumulator) {
    var res = [];
    var idx = 0;
    if (Object.prototype.toString.call(objInput) === "[object Array]") {
        var prevRes = accumulator;
        for (var i = 0; i < objInput.length; i++) {
            prevRes = func(prevRes, objInput[i]);
        }
        res = prevRes;
    }
    else {
        res = accumulator;
        for (var key in objInput) {
            res = func(res, objInput[key], key);
        }
    }
    return res;
};
console.log("#########################################################");
console.log("2.reduce method test: ");
console.log("#########################################################");
console.log("==================Testcase 1:===================");
console.log(reduce([1, 2], function (sum, n) {
    return sum + n;
}, 0));
console.log("==================Testcase 2:===================");
console.log(JSON.stringify(reduce({ a: 1, b: 2, c: 1 }, function (result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {})));
var filter = function (objInput, iteratee) {
    var res = [];
    var idx = 0;
    var objLength = objInput.length;
    if (typeof iteratee === "function") {
        for (var i = 0; i < objLength; i++) {
            if (iteratee(objInput[i]) === true) {
                res[idx++] = objInput[i];
            }
        }
    }
    else if (typeof iteratee === "object") {
        if (Object.prototype.toString.call(iteratee) === "[object Array]") {
            for (var i = 0; i < objLength; i++) {
                if (objInput[i][iteratee[0]] === iteratee[1]) {
                    res[idx++] = objInput[i];
                }
            }
        }
        else {
            for (var i = 0; i < objLength; i++) {
                var flag = true;
                for (var key in iteratee) {
                    if (objInput[i][key] !== iteratee[key]) {
                        flag = false;
                    }
                }
                if (flag) {
                    res[idx++] = objInput[i];
                }
            }
        }
    }
    else {
        for (var i = 0; i < objInput.length; i++) {
            {
                if (objInput[i][iteratee]) {
                    res[idx++] = objInput[i];
                }
            }
        }
    }
    return res;
};
var users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
];
console.log("#########################################################");
console.log("3.Filter method test: ");
console.log("#########################################################");
console.log("==================Testcase 1:===================");
var filterRes = filter(users, function (o) {
    return o.age < 40;
});
console.log(JSON.stringify(filterRes));
console.log("==================Testcase 2:===================");
filterRes = filter(users, { age: 1, active: true });
console.log(JSON.stringify(filterRes));
console.log("==================Testcase 3:===================");
filterRes = filter(users, ["active", false]);
console.log(JSON.stringify(filterRes));
console.log("==================Testcase 4:===================");
filterRes = filter(users, "active");
console.log(JSON.stringify(filterRes));
var find = function (objInput, iteratee) {
    var res = [];
    var idx = 0;
    var objLength = objInput.length;
    if (typeof iteratee === "function") {
        for (var i = 0; i < objLength; i++) {
            if (iteratee(objInput[i]) === true) {
                res[idx++] = objInput[i];
            }
        }
    }
    else if (typeof iteratee === "object") {
        if (Object.prototype.toString.call(iteratee) === "[object Array]") {
            for (var i = 0; i < objLength; i++) {
                if (objInput[i][iteratee[0]] === iteratee[1]) {
                    res[idx++] = objInput[i];
                }
            }
        }
        else {
            for (var i = 0; i < objLength; i++) {
                var flag = true;
                for (var key in iteratee) {
                    if (objInput[i][key] !== iteratee[key]) {
                        flag = false;
                    }
                }
                if (flag) {
                    res[idx++] = objInput[i];
                }
            }
        }
    }
    else {
        for (var i = 0; i < objInput.length; i++) {
            {
                if (objInput[i][iteratee]) {
                    res[idx++] = objInput[i];
                }
            }
        }
    }
    return res[0];
};
users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 100, active: true },
];
console.log("#########################################################");
console.log("4.find method test: ");
console.log("#########################################################");
console.log("==================Testcase 1:===================");
var findRes = find(users, function (o) {
    return o.age < 40;
});
console.log(JSON.stringify(findRes));
console.log("==================Testcase 2:===================");
findRes = find(users, { age: 100, active: true });
console.log(JSON.stringify(findRes));
console.log("==================Testcase 3:===================");
findRes = find(users, ["active", false]);
console.log(JSON.stringify(findRes));
console.log("==================Testcase 4:===================");
findRes = find(users, "active");
console.log(JSON.stringify(findRes));
var sum = function (arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
};
console.log("#########################################################");
console.log("5.sum method test: ");
console.log("#########################################################");
console.log("==================Testcase 1:===================");
console.log(sum([1, 2, 3, 4, 5, 6, 7]));
console.log("==================Testcase 2:===================");
console.log(sum([-1, -2, -3, 4, -10]));
