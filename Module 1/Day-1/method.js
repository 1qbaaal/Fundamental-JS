// Method
// Shortcut Unutuk Memanuipulasi data

// - STRING
// Slice : Memotong
let text = 'Hello, World!'
console.log(text.slice(0, 5)) // text.slice (indexStart, indexEnd) ---> indexEnd not include // index dimulai dari angka 0

// Length: Unutk menghitung jumlah karakter
let name = 'Iqbal'
console.log(name.length) // untuk length huruf dimulai dari angka 1

// toUpperCase/toLowerCase
let campus = 'bsd'
console.log(campus.toUpperCase())
console.log(campus.toLowerCase())

// Substring: startIndex < endIndex. Apabila startIndex > endIndex masih akan berjalan namum diswap
let greeting = 'Hello'
console.log(greeting.substring(4, 0))

// Replace
let txt = 'Hai Kamu'
console.log(txt.replace('a', 'u')) // repplace ini hanya menggati huruf 'a' paling awal saja
console.log(txt.replace(/a/g, 'u')) // replace ini menggati seluruh huruf 'a' yang ada di kalimat






// - NUMBER
// toString
let number = 10
console.log(number.toString())

let decimal =0.999
console.log(Number(decimal.toFixed()))

// - DATE DATA TYPE
let now = new Date()
console.log(now)
console.log(now.getFullYear())

