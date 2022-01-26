// for (let i=0;i<10;i++){
//     setTimeout(function(){
//         console.log('The no '+ i);
//     })
// }

let a={x:1,y:2}
const b=a;

b.x=3;

console.log(a);
console.log(b);

a=10;
a=20;

console.log(a);