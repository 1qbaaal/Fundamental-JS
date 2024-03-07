// let functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// console.log(functions.length)
// var compose = function(functions) {
    
//   return function(x) {
  
//   let num = functions.length
//   for(let i = num-1; i>=0; i--){
//       x = functions[i](x);
//   }

//   return x
//   }
// };
// let strs = ["eat","tea","tan","ate","nat","bat"]


// let ex = strs.split('').sort().join('')
 
// console.log(ex)

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"

let num1 = '2', num2 = '3'
let ans = Number(num1) * Number(num2)

let hasil = ans.toString()
console.log(hasil)
console.log(typeof(hasil))