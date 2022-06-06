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

// recursion integer
// function rangeOfNumber(startNum,endNum) {
//    return []
// }
// console.log();

// let vs var
// var
function testVarLoop(){
    for (var i = 0; i < 5; i++) {
     console.log(i);
    }
    console.log("outside i",i);
};
testVarLoop()
// let
function testLetLoop(){
    for (let i = 0; i < 5; i++) {
     console.log(i);
    }
    // global throw error
    // console.log("outside i",i);
};
testLetLoop()



