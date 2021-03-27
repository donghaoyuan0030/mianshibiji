// 在我看来Promise就相当于一个承诺容器，将所要执行的事件存贮在promise容器中。
// Promise在ES6中被统一规范，由浏览器直接支持。

// ES6语法中说，Promise是一个对象，从它可以获取异步操作的消息。Promise提供统一的API,各种异步操作都可以用同样的方法进行处理

// new Promise(function (resolve, reject) {
//     console.log('start new Promise...');
//     var timeOut = Math.random() * 2;
//     console.log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             console.log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             console.log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// })


// //常用的API
// Promise.reject
// 类方法，且与 resolve 唯一的不同是，返回的 promise 对象的状态为 rejected。

// Promise.prototype.then
// 实例方法，为 Promise 注册回调函数，函数形式：fn(vlaue){}，value 是上一个任务的返回结果，then 中的函数一定要 return 一个结果或者一个新的 Promise 对象，才可以让之后的then 回调接收。

// Promise.prototype.catch
// 实例方法，捕获异常，函数形式：fn(err){}, err 是 catch 注册 之前的回调抛出的异常信息。

// Promise.race
// 类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。 。

// Promise.all
// 类方法，多个 Promise 任务同时执行。
// 如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返回 rejected 任务的结果
// ————————————————
// 版权声明：本文为CSDN博主「cnccl-web-js」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：