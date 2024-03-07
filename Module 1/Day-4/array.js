// ARRAY
// Sekumpulan Data yang Disimpan di Sebuah Wadah
// [...,...,...]
// 0, 1, 2

// Ex: Collection of Data Student: Ucup, Maman, Mbot
let student = ['Ucup', 'Maman', 'Mbot']
let data =[100, true, false, undefined, null, 'Galang', 'JCWD-2702'] // type data apapun bisa dibaca oleh array
let random = [
    [
        [
        'JCWD', '2702' // array dalam array dinamakan dimensi. Ex yang disamping merupakan array 3 dimensi karna ada 3 array
        ]
    ]
]

// CRUD (Create, Read, Update, Delete)
// CREATE  > Cara membuat array
let campusPwd = ['BSD', 'JKT', 'BDG'] // bisa langusng menggunakan [] atau menggunakan variable = new Array ()

// READ > Cara Membaca Array
console.log(campusPwd[0]) // array ini akan membaca kata yang berada pada index 0. *note index array dimulai dari 0
console.log(campusPwd[2])
console.log(campusPwd[100]) // jika sepeerti ini array akan membaca undifined karena tidak ada index tersebut dalam perintah

// UPDATE > Cara Mengupdate Array
campusPwd[2] = 1000 // > bisa di ganti dengan tipe data apapun
console.log(campusPwd)

// DELETE > Cara Mendelete Array
delete campusPwd[2]
console.log(campusPwd)



// METHOD
// Push: Menambahkan Data baru di index paling akhir
const buah = ['Pisang', 'Ubi', 'Nanas']
console.log(buah.push('Kentang'))

// Unshift: Menambhakan data baru pada index paling awal
console.log(buah.unshift('Buah Naga'))

// Pop: Menghapus data index paling akhir
console.log(buah.pop())

// Shift: Menghapus data index paling awal
console.log(buah.shift())

// Lenght: Mengukur panjang sebuah array
let nomor = ['1', '2', '3']
console.log(nomor.length)

// Slice: Mengambil perintah yang ada di antara index awal dan akhir, tapi yang terakhir tidak di masukan
const alphabet = [ 'a', 'b', 'c', 'd', 'e']
console.log(alphabet.slice(0, 3)) // hanya akan mengambil index ke 0-2 karena index ke 3 tidak diikutsertakan

// indexOf: Pencarian index suatu data
const cars = ['Wulung', 'Audi', 'McLaren']
console.log(cars.indexOf('Wulung')) // akan menampilkan wulung berada di index ke berapa
console.log(cars.indexOf('wulung')) // not found (karena javascript cukup sensitive) jadi penggunaan kata dalam pencarian harus sama mulai dari besar kecil nya

// Splice: Menambah, Menghapus, Mengupdate Data
// arr.splice(index, totalToDelete/totalToUpdate, newData)

// Menghapus
const foods = ['Piscok', 'Batagor', 'Cilung']
foods.slice(0, 2) // Menghapus data di index ke 0 sebanyak 1 data. 
console.log(foods) // Parameter method menghapus dalam splice ditandai dengan hanya ada 2 parameter dalam peritah

// Mengupdate
const drink = ['Miras', 'Teh Tawar', 'Kupi']
drink.slice(0, 1, 'Susu') // perintah di samping akan mengupdate data pada index ke 0 sebanyak 1 data, jadi miras akan terupdate jadi susu
drink.slice(0, 2, 'Jus', 'Coca Cola ')
console.log(drink)

// Menambah
const city = ['Depok', 'Bekasi', 'Bandung']
city.splice(0,0, 'Jakarta')
city.splice(5,0, 'Yogyakarta')
console.log(city)