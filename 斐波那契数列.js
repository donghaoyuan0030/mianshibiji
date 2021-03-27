let arr = [1,1];

function fib(n){
    if(n<=1) return 1;
    let i = n+1-2;
    while(i>0){
        let a = arr[arr.length-2];
        let b = arr[arr.length-1];
        arr.push(a+b);
        i--;
    }
    return arr[arr.length-1];

}
// console.log(fib(5));
fib(5);
console.log(arr);