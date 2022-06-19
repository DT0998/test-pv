// tìm số lớn vs index thứ 2 không for
// var b =[0,1,2,3,4,5]
// var min = Math.min.apply(this,b)
// console.log(min)
// b.splice(b.indexOf(min),1)
// console.log(b)
// var secondmin = Math.min.apply(this,b)
// console.log(b.indexOf(secondmin))
// console.log(secondmin)

// đảo ngược string
// let str = "Welcome to this Javascript Guide!";
// function reverse

// cộng 2 số ra target
// function twoSum(nums, target) {
//   let number = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         // return index
//         return [i, j];
//       }
//     }
//   }
//   return number;
// }
// const numbers = [2, 7, 11, 15];
// console.log(twoSum(numbers, 9));

// callback function
// let a = 10;
// function SumFive(number,callback){
//      let sum = number + 5;
//      callback(sum);
// }
// function CheckSumCallBack(sum){
//     console.log("sum is",sum);
// }
// SumFive(a,CheckSumCallBack);

// change roman to interger
// let romanToInt = function (symbol) {
//   //  const symbol
//   const Symbols = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
// //   change int to roman
//   let result = 0;
//   for (let i = 0; i < symbol.length; i++) {
//     const cur = Symbols[symbol[i]];
//     const next = Symbols[symbol[i + 1]];
//     if (cur < next) {
//       result += next - cur;
//       i++;
//     } else {
//       result += cur;
//     }
//   }
//   return result;
// };

// console.log(romanToInt("VII"));

// Simple Array Sum
// const arr = [1,2,3,4,10,11]

// function reducer(prev,cur){
//    return prev + cur
// }
// const SimpleArraySum = arr.reduce(reducer,0)
// console.log(SimpleArraySum);

// Max Consecutive Ones

// convert object to output with reduce

// let humans = [
//   { id: 1, name: "A", gender: "nam" },
//   { id: 2, name: "B", gender: "nam" },
//   { id: 3, name: "C", gender: "nu" },
//   { id: 4, name: "D", gender: "nu" },
//   { id: 5, name: "E", gender: "nam" },
// ];

// convert name + id and filter nam
// let output = [];
// humans.forEach((human) => {
//   if (human.gender === "nu") {
//     let person = { human: human.name + human.id, gender: human.gender };
//     output.push(person);
// }
// });
// console.log(output);
