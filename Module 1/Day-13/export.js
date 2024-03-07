// EXPORT
// EXPORT DEFAULT: Hanya boleh menggunanakan 1 module export

// Contoh Export Default

// const name = 'Seto Dwp'
// // const hobby = 'Biliar'

// module.exports = name // jika module lebih dari 2 maka akan tetap mendeklarasikan module name
// contoh: module.experts = name, hobby -> variable hobby tidak akan terexport kalau masih dalam export default

// EXPORT NAME -> untuk mengexport lebih dari 2 module maka menggunakan module export name. namun harus menggukanan kurung {}
const nama1 = 'Dwi Sanjaya'
const hobby = 'Slot'

module.exports = {
  nama1, hobby
  // atau bisa juga menambahkan nama key. contoh:
  // exportName = name,
  // exportHobby = hobby, // maka key name dan hobby akan menjadi value
  
}




