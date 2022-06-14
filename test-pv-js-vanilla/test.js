// async/await
// async function myAsync() {
//   const myPromise = new Promise(function(resolve) {
//     setTimeout(function() {resolve("2");}, 3000);
//   });
//   console.log("1");
//   const number2 = await myPromise;
//   console.log(number2);
//   console.log("3");
// }
// myAsync()

// số nguyên tố
// const isPrime = (num) => {
//  for(let i = 2;i<num;i++){
//   if(num % i === 0){
//     return false
//   }
//   return num > 1
//  }
// };
// console.log(isPrime(10));


// findallincrease must fix
// const findAllIncreasingSubArr = (arr) => {
//   let result = [];
//   let index = 0;
//   do {
//     result.push(arr[index]);
//     for (let i = index + 1; i < arr.length; i++) {
//       if (arr[i] > result[result.length - 1]) {
//         result.push(arr[i]);
//       } else {
//         result = [];
//         break;
//       }

//       if (result.length > 2) {
//         result = [];
//       }
//     }
//     index++;
//   } while (index < arr.length);
// };

// const array = [1, 2, 3, -5, -10, 5, 10]
// console.log(findAllIncreasingSubArr(array));


// logest common prefix
// let longestCommonPrefix = function(strs) {
//   let size = strs.length;
//   if(size === 0){
//       return "";
//   }
//   if(size === 1){
//       return strs[0]
//   }
//   strs.sort();
//   let end = Math.min(strs[0].length,strs[size - 1].length);
//   let i = 0;
//   while(i < end && strs[0][i] === strs[size - 1][i]){
//       i++
//   }
//       let pre = strs[0].substring(0,i)
//       return pre
  
// };
// const string = ["flower","flow","flight"]
// console.log(longestCommonPrefix(string));
// logest common postfix




// number years to centure roman

function centuryFromYear(year) {
    return Math.ceil(year / 100)
}
console.log(centuryFromYear(2000));