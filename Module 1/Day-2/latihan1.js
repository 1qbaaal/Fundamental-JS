

// let phoneNumber = 628131838462
// honeNumber = phoneNumber.toString()

// if(phoneNumber.length >= 9){
//     console.log('Phone Number Valid')
// }else{
//     console.log('Phone Number Not Valid')
// }


// if(phoneNumber.length < 9){
//     console.log('Phone Number Gak Bener')
// }else if(phoneNumber.length > 14){
//     console.log('Phone Number Gak Bener')
// }else{
//     console.log('Phone Number Valid')
// }

// // LOOPING
//     // Case. Buatlah program Untuk menampilkan angka dari 10 ke 1

// for(let j=10; j>=1; j--){
//     console.log(j)
// }

// // Case. Buatlah pengkondisian untuk menentukan nilai dengan kategori sbb:
// //      >= 70 ---> Lulus!
// //      <70 ---> Tidak Lulus!

// const nilai = 80
// if(nilai >= 70){
//     console.log('Lulus!')
// }else{
//     console.log('Tidak Lulus')
// }

// TERNARY OPERATOR : Simplyfly dari if else
// nilai >=70? console.log('Lulus!'): console.log ('Tidak Lulus!');
// nilai >=90? console.log('Lulus Baik!'): console.log('Lulus!'); console.log('Tidak Lulus!');

// ===============================================================================================


// Latihan soal nomer 3 day 2
let num = 9;
let result;
for(let i = 2; i < num; i++) {
  // pembagian (/) vs. sisa pembagian (%)
  // 7 % 2 ==> 1
  // 7 % 3 ==> 1
  // 7 % 4 ==> 3
  // 7 % 5 ==> 2
  // 7 % 6 ==> 1
  // ==> PRIMA
  
  // console.log("i =", i);
  // console.log("num % i =", num % i);
  
  if (num % i == 0) {
      result = 'tidak prima';
      break;
  }else {
    result = 'prima';
  }
};
console.log(result);

// const angka = 9;
// if( angka % angka == 0 && angka % 2 == 1 ){
//     // console.log('Prima')
// }else{
//     // console.log('Bukan Prima')
// }

// for(let angka = 1; angka <= 100; angka++){
//     for(let i = 2, s = Math.sqrt(angka); i <= s; i++) {
//         if(angka % i === 0) console.log( 'bukan prima', angka);
//     }
//     console.log('prima', angka)
// }

// const a = 8
// const b = 7

// console.log((a > b || b > a))
// console.log(9 % 2)

// function isPrime(n) {
//     // Corner case
//     if (n <= 1) {
//       return false;
//     }
  
//     // Check from 2 to n-1
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) return false;
//     }
  
//     return true;
//   }
  
//   // Driver Code
//   for (let i = 1; i < 20; i++) {
//     console.log(i, isPrime(i));
//   }

// Sum dari 1 sampai N
// N = 5; 1 + 2 + 3 + 4 + 5 = ??? 15

// let sum = 0; //inisialisasi / initialization / dibutuhkan utk tempat untuk naro hasil
// let N = 5; // ini mau ngitung ampe berapa
// for (let i = 1; i <= N;i++){
//   sum = sum + i;
// }
// console.log(sum);

//=====================================================

//code gee pakai chat GPT
// function sumOfNumbers(N) {
//   let sum = 0;
//   for (let i = 1; i <= N; i++) {
//     sum += i;
//   }
//   return sum; //wajib kudu ada di function
// }

// const result1 = sumOfNumbers(5);
// console.log(`Sum of numbers from 1 to 5: ${result1}`);

// //=======================================================

// let tempat = 'roma';
// let tempat2 = '';
// let tempat3 = '';
// console.log(`sarimin pergi ke ${tempat}, ${tempat2}, ${tempat3} `); // string literal

// faktorial 5 = 5! = 5 x 4 x 3 x 2 x 1 atau 1 x 1 x 2 x 3 x 4 x 5; //
// faktorial N = N!


// let result = 1; //initialize //"tempat naro hasil"
// let N = 5;
// for (let i = 1; i <= N; i++) {
//     result = result * i;
// }
// console.log(result);

// [ 0,   1, 1,  2,  3,  5, 8,  13,  21, 34, 55, 89, 144, 233, 377]
// let fib = 15;
// let res = [];
// for( let i = 0; i <= 15; i++){
//     if( i == 0 ){
//       res[i] = 0;
//     }
//     if( i == 1){
//       res[i] = 1;
//     }
//     if( i > 1){
//       res[i]= res[i-2] + res[i-1]
//     }
// }
// console.log(res[res.length-10])