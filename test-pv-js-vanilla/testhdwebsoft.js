"closer";
"let var";
"recursion prime number";
"reduce array to obj";
"useeffect";
"usememo";
"usecallback";

// reduce array to obj
const posts = [
  {
    id: 1,
    name: "Front end",
  },
  {
    id: 2,
    name: "back  end",
  },
  {
    id: 3,
    name: "Front end",
  },
  {
    id: 2,
    name: "Front end",
  },
];

function reducer(prev,cur){
    return {...prev,[cur.id] : cur}
}

let newPosts = posts.reduce(reducer,{})
console.log(newPosts);

// recursion prime number
function PrimeNumber(number, divisor = 2) {
  // 2 * 2 = 4 > 5 lần 1
  // 3 * 3 = 6 > 5 lần 2 => true || prime number
 if(divisor * divisor > number) {
   return true
 }
//  chia hết là số hợp số || composite number
 if(number % divisor === 0){
   return false
 }
 return PrimeNumber(number,divisor + 1)
}

// console.log(PrimeNumber(5));

// let vs var
// var
// function testVarLoop(){
//     for (var i = 0; i < 5; i++) {
//      console.log(i);
//     }
// khác nhau khi mỗi lần lập là lập cùng biến giá trị
// console.log("outside i",i);
// };
// testVarLoop()
// let
// function testLetLoop(){
//     for (let i = 0; i < 5; i++) {
//      console.log(i);
//     }
// global throw error function scope
// khác nhau khi mỗi lần lập là tạo ra biến giá trị mới
// console.log("outside i",i);
// };
// testLetLoop()

// hoisting
// var a = 10;
// var a = 20;
// console.log(a);
