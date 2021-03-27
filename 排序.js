let arr = [5, 6, 1, 10, 8, 2, 3]
// 冒泡排序

// function bubble() {
//     let temp = null;
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// ary = bubble(arr);


//插入排序
// function insert(arr) {
//     let handle = [];
//     handle.push(arr[0]);
//     for (let i = 1; i < arr.length; i++) {
//         let A = arr[i];
//         for (let j = handle.length - 1; j >= 0; j--) {
//             let B = handle[j];
//             if(A>B){
//                 handle.splice(j+1,0,A);
//                 break;
//             }
//             if(j===0){
//                 handle.unshift(A);
//             }
//         }
//     }
//     return handle;
// }
// let ary = insert(arr)

//快速排序
function quick(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let middleIndex = Math.floor(arr.length / 2);
    let middleValue = arr.splice(middleIndex, 1)[0];
    let arrLeft = [];
    let arrright = [];
    for (let i = 0; i < arr.length; i++) { 
        let item = arr[i];
        item<middleValue?arrLeft.push(item):arrright.push(item);

    }
    return quick(arrLeft).concat(middleValue,quick(arrright));

}
let ary = quick(arr)
console.log(ary);