var b =[0,1,2,3,4,5]
var min = Math.min.apply(this,b)
console.log(min)
b.splice(b.indexOf(min),1)
console.log(b)
var secondmin = Math.min.apply(this,b)
console.log(b.indexOf(secondmin))
console.log(secondmin)