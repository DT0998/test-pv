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
