// Case. Create a program to hide Last 3 Digits of phone number
// Data     : 081318484551
// Output   : 081318484xxx

let phoneNumber = 6281318484551
phoneNumber = phoneNumber.toString() // number harus dijadikan tipe string d
console.log(phoneNumber.slice(0, phoneNumber.length-3) + 'xxx')
