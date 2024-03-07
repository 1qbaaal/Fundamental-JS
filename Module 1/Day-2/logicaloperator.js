// LOGICAL OPERATOR
// OPERATOR PEMBANDING UNTUK BEBERAPA KONDISI
// || OR
// && AND
// ! NOT

// OR 
// Apabila suatu kondisi bernilai true, maka hasil akhir akan TRUE
// Apabila ingin hasil akhirnya false, maka semua kondisi harus bernilai false
// contoh

console.log(1 === 1|| 2 === 2 ) // TRUE || TRUE ---> TRUE
console.log(1 === '1' || 2 === 2) // FALSE || TRUE ---> TRUE
console.log( 1 ==='1' || 2 ==='2') // FALSE || FALSE ---> FALSE

// AND 
// Apabila salah satu kondisi bernilai false, maka hasil akhir akan false
// Apabila ingin hasil akhir true, maka semua kondisi harus bernilai true
// contoh

console.log('1' === 1 && 2 === 2) //FALSE && TRUE ---> FALSE
console.log(1 == '1' && 2 !== 2) // TRUE && FALSE ---> FALSE
console.log(1 === 1 && 2 == '2' && 3 === 3) // TRUE && TRUE && TRUE ---> TRUE

// ! NEGASI / KEBALIKAN
console.log()