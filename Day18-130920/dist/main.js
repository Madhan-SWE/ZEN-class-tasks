"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var chunk = function chunk(arr) {
  var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
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

  for (var _i = 0; _i < arrLength; _i++) {
    if (_i >= currentChunk * chunkSize) {
      currentChunk++;
    }

    if (currentChunkIdx === 0) {
      if (currentChunk * chunkSize < arrLength) {
        chunkRes = new Array(chunkSize);
      } else {
        var chunkResSize = chunkSize - (currentChunk * chunkSize - arrLength);
        chunkRes = new Array(chunkResSize);
      }
    }

    chunkRes[currentChunkIdx] = arr[_i];
    currentChunkIdx++;

    if (currentChunkIdx === chunkSize || _i === arrLength - 1) {
      res[currentChunk - 1] = chunkRes;
      currentChunkIdx = 0;
    }
  }

  return res;
};

var displayChunkres = function displayChunkres(chunkRes) {
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

var reduce = function reduce(objInput, func, accumulator) {
  var res = [];
  var idx = 0;

  if (Object.prototype.toString.call(objInput) === "[object Array]") {
    var prevRes = accumulator;

    for (var i = 0; i < objInput.length; i++) {
      prevRes = func(prevRes, objInput[i]);
    }

    res = prevRes;
  } else {
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
console.log(JSON.stringify(reduce({
  a: 1,
  b: 2,
  c: 1
}, function (result, value, key) {
  (result[value] || (result[value] = [])).push(key);
  return result;
}, {})));

var filter = function filter(objInput, iteratee) {
  var res = [];
  var idx = 0;
  var objLength = objInput.length;

  if (typeof iteratee === "function") {
    for (var i = 0; i < objLength; i++) {
      if (iteratee(objInput[i]) === true) {
        res[idx++] = objInput[i];
      }
    }
  } else if (_typeof(iteratee) === "object") {
    if (Object.prototype.toString.call(iteratee) === "[object Array]") {
      for (var _i2 = 0; _i2 < objLength; _i2++) {
        if (objInput[_i2][iteratee[0]] === iteratee[1]) {
          res[idx++] = objInput[_i2];
        }
      }
    } else {
      for (var _i3 = 0; _i3 < objLength; _i3++) {
        var flag = true;

        for (var key in iteratee) {
          if (objInput[_i3][key] !== iteratee[key]) {
            flag = false;
          }
        }

        if (flag) {
          res[idx++] = objInput[_i3];
        }
      }
    }
  } else {
    for (var _i4 = 0; _i4 < objInput.length; _i4++) {
      {
        if (objInput[_i4][iteratee]) {
          res[idx++] = objInput[_i4];
        }
      }
    }
  }

  return res;
};

var users = [{
  user: "barney",
  age: 36,
  active: true
}, {
  user: "fred",
  age: 40,
  active: false
}, {
  user: "pebbles",
  age: 1,
  active: true
}];
console.log("#########################################################");
console.log("3.Filter method test: ");
console.log("#########################################################");
console.log("==================Testcase 1:===================");
var filterRes = filter(users, function (o) {
  return o.age < 40;
});
console.log(JSON.stringify(filterRes));
console.log("==================Testcase 2:===================");
filterRes = filter(users, {
  age: 1,
  active: true
});
console.log(JSON.stringify(filterRes));
console.log("==================Testcase 3:===================");
filterRes = filter(users, ["active", false]);
console.log(JSON.stringify(filterRes));
console.log("==================Testcase 4:===================");
filterRes = filter(users, "active");
console.log(JSON.stringify(filterRes));

var find = function find(objInput, iteratee) {
  var res = [];
  var idx = 0;
  var objLength = objInput.length;

  if (typeof iteratee === "function") {
    for (var i = 0; i < objLength; i++) {
      if (iteratee(objInput[i]) === true) {
        res[idx++] = objInput[i];
      }
    }
  } else if (_typeof(iteratee) === "object") {
    if (Object.prototype.toString.call(iteratee) === "[object Array]") {
      for (var _i5 = 0; _i5 < objLength; _i5++) {
        if (objInput[_i5][iteratee[0]] === iteratee[1]) {
          res[idx++] = objInput[_i5];
        }
      }
    } else {
      for (var _i6 = 0; _i6 < objLength; _i6++) {
        var flag = true;

        for (var key in iteratee) {
          if (objInput[_i6][key] !== iteratee[key]) {
            flag = false;
          }
        }

        if (flag) {
          res[idx++] = objInput[_i6];
        }
      }
    }
  } else {
    for (var _i7 = 0; _i7 < objInput.length; _i7++) {
      {
        if (objInput[_i7][iteratee]) {
          res[idx++] = objInput[_i7];
        }
      }
    }
  }

  return res[0];
};

users = [{
  user: "barney",
  age: 36,
  active: true
}, {
  user: "fred",
  age: 40,
  active: false
}, {
  user: "pebbles",
  age: 100,
  active: true
}];
console.log("#########################################################");
console.log("4.find method test: ");
console.log("#########################################################");
console.log("==================Testcase 1:===================");
var findRes = find(users, function (o) {
  return o.age < 40;
});
console.log(JSON.stringify(findRes));
console.log("==================Testcase 2:===================");
findRes = find(users, {
  age: 100,
  active: true
});
console.log(JSON.stringify(findRes));
console.log("==================Testcase 3:===================");
findRes = find(users, ["active", false]);
console.log(JSON.stringify(findRes));
console.log("==================Testcase 4:===================");
findRes = find(users, "active");
console.log(JSON.stringify(findRes));

var sum = function sum(arr) {
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