// var a =[1,1,2,3]
// var max = Math.max.apply(this,a)
// console.log(max)
// a.splice(a.indexOf(max),1)
// console.log(a)
// var secondmax = Math.max.apply(this,a)
// console.log(a.indexOf(secondmax))
// console.log(secondmax)

// convert obj to array
// let obj = { 1: "trieu", 2: "linh", 3: "thanh" };
// let result = Object.entries(obj);
// console.log(result);

// console.log("1" - 1);

// remove duplicate string
// const str = "Coooovvvidd 19"


// tìm số lớn thứ 2 vs vòng for
const array = [1,4,5,6,3];
let largestNum = array[0];
let secondLargestNum = 0;
for(let i = 0; i < array.length;i++){
    if(array[i] > largestNum){
        secondLargestNum = largestNum;
        largestNum = array[i]
    }
    if(array[i] !== largestNum && array[i] > secondLargestNum){
        secondLargestNum = array[i]
    }
};

console.log(secondLargestNum);

