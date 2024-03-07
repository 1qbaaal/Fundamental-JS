// IMPORT DEFAULT
// untuk mengambil data dari export maka kita harus menggunakan import

// contoh mengambil import default

// let imp = require('./export');
// console.log(imp)

// IMPORT NAME
// contoh mengambil import name

// let importName = require('./export');
// console.log(importName) // jika menggunakan variabel baru untuk memanggil export maka akan menghasilkan object: key dan value

// bisa juga menggunakan destructuring objet, contoh:

let {nama1, hobby} = require('./export')
console.log(nama1)
console.log(hobby) // namun jika menggunakan destructuring object hasil yang dikeluarkan tetap menjadi string 