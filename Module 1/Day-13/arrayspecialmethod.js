// .forEach, .map, .filter
// .forEach: Tidak menyimpan array baru
// .map & .filter: sama sama menghasilkan array baru


const num = ['A', 'B', 'C'] //  <--- Data awal

const newNum = num.forEach((item, index)=>{ // dalam array special terdapat 2 parameter, parameter pertama untuk mendeklarasikan array dan parameter kedua di deklarasikan untuk menentukan index
  return item // dalam array specialmethod .forEach, method ini tidak akan menghasilkan array baru, yang terjadi adalah akan menghasilkan undefined
})
console.log(newNum)

// ====================================
const newNum1 = num.map((item, index)=>{
  return item // dalam array special .map, method akan menghasilkan array baru / dapat memanggil array yang menajadi data. jika dibandingkan menggunakan comparasion operator maka hasil yang akan dikeluarkan adalah type data bolean. ex. [true, false] sesuai dengan apa yang kita komparasikan
})
console.log(newNum1)

//===================================
const newNum2 = num.filter((item, index)=>{
  return item === 'A' // dalam array special .filter, untuk menambahkan array baru atau memanggil array baru maka harus dikomparasikan dengan array (seperti contoh didsamping) yang akan di panggil. jika tidak menggunakan komparasi makan akan menghasilkan array baru seperti .map
})
console.log(newNum2)