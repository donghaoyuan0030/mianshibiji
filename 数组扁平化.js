let arr = [[1, 2, 2], [3, 5, 4], [6, 7, 8, [11, 12, 13, [14]]], 10]
    // ES6方法直接实现
    // arr = arr.flat(Infinity);
    // 转化为字符串
    // arr = arr.toString().split(',').map(item=>parseInt(item));
    //JSON
    // arr = JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(item=>parseInt(item));


    // 循环验证是否为数组
    // while(arr.some(item=>Array.isArray(item))){
    //     arr = [].concat(...arr)
    // }

    //第二种递归
  
        function myflat() {
            let result = [];
            _this = this;

            let fn = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    let item = arr[i];
                    if (Array.isArray(item)) {
                        fn(item);
                        continue;
                    }
                        result.push(item);
                }
            };
            fn(_this);
                        console.log(_this);

            return result;
                      
                        

        }
        Array.prototype.myflat = myflat;

    arr = arr.myflat();
console.log(arr);