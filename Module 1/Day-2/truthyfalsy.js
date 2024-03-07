// TRUTHY FALSY
// Nilai non-Boolean yang akan dikonversi menjadi Boolean ketika Bertemu dengan Conditional Statement

console.log(Boolean(0))
console.log(Boolean(NaN)) // ada di modul 1 ppt 2
console.log(Boolean(1))
console.log(Boolean(' ')) // untuk setiap yang tak bernilai atau kosong itu akan menjadi falsy, untuk setiap yang bernilai (bahkan 1 spasi saja akan menjadi true)


// Case. Validasi Input Apakah Kosong atau Tidak

const input = ''

if(input.length === 0){ // jika tidak ada nilai atau kosong maka dianggap false
    console.log('Input Harus Diisi')
}else{
    console.log('Input Sudah Benar')
}

if(!input){ 
    console.log('Input Sudah Benar')
}else{
    console.log('Input Harus Diisi')
}

if(input){ // jika tidak ada tanda seru maka variable dianggap true
    console.log('Input Sudah Benar')
}else{
    console.log('Input Harus Diisi')
}