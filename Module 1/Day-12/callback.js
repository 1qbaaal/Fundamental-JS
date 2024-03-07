// CALLBACK
// Function yang dijadikan Argument oleh Function lain.

// Case. Function Penjumlahan, Hasil dari Function Penjumlahan ditampilkan di dalam Function lain
// Contoh Callback function

function Penjumlahan(num1, num2){
  return num1 + num2;
}

function Print(result){ // function ini dibuat bertujuan untuk menampilkan hasil.
  console.log(result)
}

const resultPenjumlahan = Penjumlahan (3, 5) // membuat variabel baru untuk memberi nilai parameter
Print(resultPenjumlahan) // untuk mengeluarkan hasil penjumlahan

// CALLBACK TERDIRI DARI 2 JENIS  
// 1. Indirect CallBack

function Penjumlahan(num1, num2, cb){ // untuk mendapatkan callback maka harus di tambah 1 parameter yang nanti nya mengarah pada function yang sudah di declare di bawah, num1 = 3, num2 = 5, cb = Print
  return num1 + num2;
}

function Print(result){
  console.log(result)
}

Penjumlahan (3, 5, Print) // jadi untuk memunculkan hasil tidak perlu membuat fungsi lagi di bawah, langsung ditambahkan didalam parameter.

// 2. Direct Callback

function Penjumlahan(num1, num2){ // untuk direct function sebenarnya function Print sudah bisa langsung di taruh pada nilai paramater
  return num1 + num2;
}
 Penjumlahan (3, 5, 
  function Print(result){
  console.log(result)
}) // bisa langsung seperti ini atau menggunakan anonymous arrow function yang hasil nya akan seperti dibawah ini

Penjumlahan (3, 5, (result) => {
  console.log(result)
}) // untuk memanggil hasil dari callback jadi tidak perlu menggunakan variabel, langusng nilai parameter. karna langsung otomatis dipanggil dari function


 