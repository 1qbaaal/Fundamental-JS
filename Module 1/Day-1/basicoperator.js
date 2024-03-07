// BASIC OPERATOR

const num1 = 5
const num2 = 3

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

// Modulus : Sisa angka yang telah dibagi
// Contoh
console.log(10 % 3) // 10 dibagi 3 adalah 3, maka 1 adalah sisa pembaginya
console.log(4 % 4) // sisa pembagi dari 4/4 ada lah 0 karena tida ada angka yang tersisa
console.log(5 % 3) // 5/3, sisa pembaginya adalah 2, karena 5/3 = 1, lalu masih ada sisa pembaginya yaitu 2

// MATH OBJECT
console.log(Math.pow(2, 2)) // pangkat
console.log(Math.abs(-9)) // di jadikan positif
console.log(Math.floor(0.8)) // akan selalu dibulatkan kebawah
console.log(Math.ceil(0.4)) // akan selalu dibulatkan keatas
console.log(Math.round(0.5)) // mengikuti aturan matematika

// STRING CONCATE
let greeting1 = 'Hello'
let greeting2 = 'World!'
console.log(greeting1 + greeting2) // akan di concate (digabung)

let number1 = '2'
let number2 = 2
console.log(number1 + number2) // untuk penjumlahan tipe string dan number akan tetap digabung

console.log(2 + 1 + '3')
console.log('4' * 3) // selain penjumlahan (+), akan tetap dihitung secara matematika
console.log('4' / 1) // contoh hasil ini 4
console.log('4' * '4')

// INCREMENT & DECREMENT
// penambahan dan penguranagan 1
// contoh

let number = 100
number++
console.log(number) // hasilnya akan dibtambah 1
number--
console.log(number) // hasil akan dikurangin 1

// MODIFY IN PLACE
let num = 10
num = num + 10
console.log(num)

let newNum = 5
newNum += 10
console.log(newNum)

// PREFIX & POST FIX
let counter = 0
console.log(++counter) // POSTFIX
console.log(counter++) // PREFIX
