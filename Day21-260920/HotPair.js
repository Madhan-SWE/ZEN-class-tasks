// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  console.log(userInput);
    let arr = userInput[0].split(" ").map(e=>parseInt(e));
  let n = arr.length;
  let ans = 0;
  for(let i=0;i<n-1;i++)
  {
      for(let j=i+1;j<n;j++)
      {
          if(arr[i]===arr[j])
              ans++;
      }
  }
  console.log(ans);
  //end-here
});