// COMPARISON OPERATOR
// Operator Pembanding
// Result akhirnya akan selalu Boolean (true/false)
// >, >=, <, <=, !=, !==, ==, ===

let num1 = 10
let num2 = 5
console.log(num1 > num2)
console.log(num1 < num2)
console.log(5 >= 5)
console.log(5 <= 5)

// == : Dia hanya akan mengecek Value
// contoh
console.log(5 == '5') // hanya mengecek value, berarti 5 sama dengan 5
console.log('abc' == '5') // walau typeofdata nya sama2 string, namun value nya berbeda

// === : Mengecek Value & Type Data
console.log(5 === '5') // value nya sama tapi type data nya beda
console.log('abc' === '5') // type data sama namum value nya berbeda

console.log(5 != 5)
console.log('5' != 5)
console.log('5' !== 5)
