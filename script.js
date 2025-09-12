// function multiple(x, y){
//   mu = x*y;
//   return mu;
// }

// let val = multiple(40, 100);
// console.log(val);

// function devis(x, y){
//     dive = x / y;
//     // return dive;
// }

// let val = devis(630, 15);
// console.log(val);

// const arrmul = (a, b) => {
//     return a * b;
// };

// function countvov(str){
//     let count = 0;
//     for(const char of str){
//         if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// const countvov = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char ==="a"|| char ==="e"|| char ==="i"|| char ==="o"|| char ==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// const countvov = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char ==="a"|| char ==="e"|| char ==="i" || char ==="o" || char ==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// let num = [1, 2, 3, 4, 5];

// num.forEach((num) =>{
//     console.log(num*num);
// });

// let num = [20,11, 21, 40, 19, 23, 60, 13,];

// num.forEach((num) => {
//     if(num % 2 !== 0){
//         console.log(num);
//     };
// });


let num = prompt("enter a number:");
let arr = [];

for(let i = 1; i <= num; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) =>{
    return res + curr;
});

console.log(sum)*("sum=", sum);