"closer";
"let var";
"recursion integer";
"reduce array to obj";
"useeffect";
"usememo";
"usecallback";

// reduce array to obj
// const posts = [
//   {
//     id: 1,
//     name: "Front end",
//   },
//   {
//     id: 2,
//     name: "back  end",
//   },
//   {
//     id: 3,
//     name: "Front end",
//   },
//   {
//     id: 4,
//     name: "Front end",
//   },
// ];

// function reducer(acc,cur){
//     return {...acc,[cur.id] : cur}
// }

// let newPosts = posts.reduce(reducer,{})
// console.log(newPosts);

// recursion prime number
function PrimeNumber(num) {
  if (num === 2) return true;
  if (num < 2 || num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(PrimeNumber(6));

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
// var a = 10
// var a = 20
// console.log(a);
