const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



const absurdBubbleSort = function(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
      let result = askIfGreaterThan(arr[i], arr[i + 1]);
      debugger
      if (result == true){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        sorted = false ;
      }
      console.log('hello')
    }
  }
  return arr;
};


const askIfGreaterThan = function(el1, el2) {
  reader.question( `Is ${el1} greater than ${el2}: `, function (res) {
    const answer = (res === 'yes') ? true : false;
    // let answer = (res === 'yes') ? [el1, el2] = [el2, el1] : [el1, el2] // leave it alone
    return answer ;
  });
};


let arr = [1,34,56,3,6,4,3,7];
console.log(absurdBubbleSort(arr));
  // const swapper = function(arg)

// askIfGreaterThan(1, 2, function(arg) {
//   console.log(arg);
// })


//
// askIfGreaterThan(1, 2, (arg) => {
//   console.log(arg);
// });


// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop)

// const swapperCallback = function(arg) {
//   console.log(arg);
// };
//
// const swapperCallbackArrow = (arg) => {
//   console.log(arg);
// };
