//先执行定时器
// a(function(){
//     b()
// })
// function a(callback){
//     setTimeout(() => {
//     console.log('gaga');
//     callback()
//     }, 1000);
  
// }

// function b(){
//     console.log('xx');
// }


// function test(){
//     console.log(1);
//     console.log(2);
// }
// setTimeout(
//     test, 1);



 async  function a(){
    return new Promise( function(resolve){
       resolve(  setTimeout(() => {
        console.log(2);
    },1000 
    ));
    })
}
async function fn(){
  let x =await a()
console.log(x);

}
fn()
console.log('ss');
//   console.log('开始111');
//   setTimeout(function () {  
// console.log('timeout111');});
// new Promise(resolve => {   console.log('promise111'); 
//     resolve();  
//      setTimeout(() => console.log('timeout222'));}).
//      then(function () {   console.log('promise222')})
//      console.log('开始222');
// console.log('开始111');  
//   setTimeout(function () {console.log('setTimeout111');}, 0);   
//  Promise.resolve().then(function () 
// { console.log('promise111');}).then(function () { console.log('promise222');});
//  console.log('开始222');






// 闭包问题
// for (var i = 0; i < 3; i++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log(index);
//         }, 1000);
//     })(i);
// }

// for (let i =0;i<3;i++){
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }