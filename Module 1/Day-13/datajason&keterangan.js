// untuk memanggil json, data harus dipanggil menggunakan import

const data = require('./data.json')
// console.log(data) // console.log ini akan menghasilkan pemanggilan data semua sesuai yang ada di dalam object.
// jika mau mengambil data student saja bisa menggunakan console dibawah ini.
// console.log(data.student) // consol ini akan menghasilkan value yang berada dalam key

console.log(data.student[1]) // akan menghasilkan semua informasi index pertama dari key student
console.log(data.student[1].name) // akan menghasilkan informasi 'nama' dari index 1

// Json
// data jason harus dibuat di dalam object seperti contoh dibawah, data jason harus dibuat menggunakan key dan value

// contoh data.json
// {
//   "student" : [
//     {
//       "name": "Jaung",
//       "hobby": "Judol"
//     },
//     {
//       "name": "Tsubasa",
//       "Hobby":" Maen Bola"
//     }
//   ]
// }
