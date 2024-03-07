// Create a function that can create a triangle pattern according to the height we provide like the 
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

const height = 3
let arrNum = 1

for( let i = 1; i <= height; i++){
    let row =""
    for (j =1; j <= i; j++ ){
        row += arrNum.toString().padStart(2, 0)+" "
        arrNum++
    }
    console.log(row)
}

// 2. Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const number = 15
for(let i=1; i<= number; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz')
    }else if(i % 3 == 0){
        console.log('Fizz')
    }else if(i % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(i)
    }
}

// 3. Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

let berat = 72 // kg
let tinggi = 165 / 100   // meter
let BMI = berat / (tinggi * tinggi)
if(BMI < 18.5 ){
    console.log('Less Weight')
}else if( BMI >= 18.5 && BMI <= 24.9){
    console.log('Ideal')
}else if( BMI >= 25.0 && BMI <= 29.9){
    console.log('Overweight')
}else if(BMI >= 30.0 && BMI <= 39.9){
    console.log('Very Overweight')
}else if( BMI > 39.9){
    console.log('Obesity')
}
console.log(BMI)

// 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const inputNum = [1,2,3,4,5,6,7,8,9,10]
const outNum = []

for(let i=0; i < inputNum.length; i++){
    if(inputNum[i] % 2 === 0){
        outNum.push(inputNum[i])
    }
}
console.log(outNum)

// Cara ke dua menggunakan for of looping

let contohNum = [1,2,3,4,5,6,7,8,9,10]
let numberOut = []

for(let item of contohNum){
    if(item % 2 === 0) numberOut.push(item)
}
console.log(numberOut)

// 5.Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

let word = 'Hello World'
let arrWord = word.split(' ')
console.log(arrWord)