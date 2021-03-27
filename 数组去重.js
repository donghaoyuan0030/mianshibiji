let ary = [1,5,10,25,10,6,1];
// SET
//  1、 let arr = [... new Set(ary)]
   // let  arr =  Array.from(new Set(ary));


   // ES5
   for(let i =0 ;i<ary.length-1;i++){
      let item = ary[i];
      args = ary.slice(i+1);
      if(args.indexOf(item)>-1){
         ary[i]=ary[ary.length-1];
         ary.length--;
         i--
      }
   }
console.log(ary);
