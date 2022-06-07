var player = [
   {   name: 'Trieu',
       score:32,
   },
   {   name:'user',
       score:40,
   },
   {   name:'Linh',
       score:20,
   },
   {   name:'thanh',
       score:35,
   }
]
var byscore = player.slice(0);
// sort handle function
function sortHandle(a,b){
    return b.score - a.score
}
// sort method array
byscore.sort(sortHandle)
console.log(byscore)