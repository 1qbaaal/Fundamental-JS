// Write a code to convert celsius to fahrenheit
// Example: 60 Celcius → 140 Fahrenheit

let celcius = 60
let fahrenheit = (celcius * 9/5) + 32
console.log(fahrenheit + " "+ "Fahrenheit")

// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number

let number = 8

if(number % 2 === 0){
    console.log(number + ' ' + 'Genap')
}else{
    console.log(number + ' ' + 'Ganjil')
}

// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
// Bilangan prima ; bilangan yang habis dibagi 1 dan dirinya sendiri

let primeNumber = 7;
let result;
for(let i = 2; i < primeNumber; i++) {
  if (primeNumber % i == 0) {
      result = 'tidak prima';
      break;
  }else {
    result = 'prima';
  }
};
console.log(result);

// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 7

let countNumber = 3
let sum = 0
for(let i=1; i<= countNumber; i++){
    sum += i
}
console.log('Hasil Jumlah Dari 1 to 5 is:' ,sum)

// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

let num = 1; //initialize //"tempat naro hasil"
let N = 4;
for (let i = 1; i <= N; i++) {
  num = num * i;
}
console.log(num);


// Write a code to print the first N fibonacci numbers
// Example: 15 → 610

let fib = 15;
let res = [];
for( let i = 0; i <= 15; i++){
    if( i == 0 ){
      res[i] = 0;
    }
    if( i == 1){
      res[i] = 1;
    }
    if( i > 1){
      res[i]= res[i-2] + res[i-1]
    }
}
console.log(res[res.length-1])

// Cara Lain Nomer 3

const num1 = 2
let isPrime = false
for(let i=2; i<num1; i++){
  if(num % i === 0){
    isPrime = false
  }
}

if(isPrime === true || num === 2){
  console.log(`${num} is Prime!`)
}else if(isPrime === false || num === 1){
  console.log(`${num} is Not Prime!`)
}

// Cara lain Fibbonaci
const max = 15
const arraFib = [ 0, 1]
for(let i=2; i <=max; i++){ // kenapa i =2, karena index 0 dan 1 di arrayFib sudah dimasukan
  const nextFib = arraFib [i -1] + arraFib [ i -2]
  arraFib.push(nextFib)
}
console.log(arraFib[arraFib.length-1])