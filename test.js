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
// const isPrime = num => {
//   const boundary = Math.floor(Math.sqrt(num));
//   for (let i = 2; i <= boundary; i++) if (num % i === 0) return false;
//   return num >= 2;
// };
// console.log(isPrime(10));

// findallincrease

let result = [];
let index = 0;

const findAllIncreasingSubArr = (arr) => {
  do {
    result.push(arr[index]);
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[i] > result[result.length - 1]) {
        result.push(arr[i]);
      } else {
        result = [];
        break;
      }

      if (result.length > 2) {
        console.log(result);
        result = [];
      }
    }
    index++;
  } while (index < arr.length);
};

findAllIncreasingSubArr([1, 2, 3, -5, -10, 5, 10]);
