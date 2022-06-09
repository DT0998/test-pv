let a = 10;
function SumFive(number,callback){
     let sum = number + 5;
     callback(sum);
}
function CheckSumCallBack(sum){
    console.log("sum is",sum);
}
SumFive(a,CheckSumCallBack);