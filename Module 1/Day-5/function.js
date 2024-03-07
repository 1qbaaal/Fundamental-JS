// FUNCTION
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//





// 1. Build 
function loopingNumber(){ // Cara membuat Function
    const n=5;
    for(let i=1; i<=n; i++){
        console.log(i)
    }
}

// 2. call
loopingNumber(); // Cara memanggil Function
loopingNumber();
loopingNumber();


// FUNCTION TYPE
// - Function Declaration
print1() // output dapat dilakukan sebelom inisialisati atau sebelom perintah dibuat
function print1(){
    console.log('Hello, World')
}


// - Function Expression
const output = function (){ // output tidak dapat dilakukan sebelum perintah dibuat
    console.log('Helo, JCWD!')
}
output()

// Arrow Function
const result = () => { // output untuk mempersingkat function, *Note:Function ditandai dengan ()
    console.log('Helo, iqbal')
}
result()


// FUNCTION WITH PARAMETER
function looping(n){ // n > merupakan parameter, jadi bisa diganti apapun
    for(let i=1; i<=n; i++){
        console.log(i)
    }
}
looping(6) // karna menggunakan parameter, jadi kita harus menggunakan argument untuk menentukan nilainya (6), angka 6 merupakan argument yang dimasukan untuk mendapat nilai parameter
looping(4)

function ouputProfile (nama, hobi, alamat){ // paramater bisa lebih dari satu, namun urutannya harus sesuai
    console.log(`Nama Saya: ${nama}. Hobi Saya: ${hobi}. Alamat Saya: ${alamat}`)
}
ouputProfile('Iqbal', 'Sekarang sih lagi suka ngoding', 'Menteng')


// FUNCTION WITH RETURN

function Penjumlahan(_num1, _num2){ // num1 berarti 3 dan num2 berarti 5
    return _num1 + _num2 // return disini untuk mencari hasil operator > yang arti nya 3 + 5
}

function Pengurangan(_num1, _num2){ // kenapa dibikin 2 function, supaya kode tidak terlalu banyak.
    return _num1 - _num2
}

function calculator(num1, num2, operator){ // num1 = 3, num2 = 5, operator = '+'
    if(operator === '+'){
        return Penjumlahan(num1, num2) // ini juga bisa langsung menggunakan console.log(Penjumlahan (num1, num2))
    }else if( operator === '-'){
        return Pengurangan(num1, num2)
    }
}
console.log(calculator(3,5,'+'))

// FUNCTION WITH DEFAUL PARAMETER

function PrintOut(name = 'Anonim'){ // jika tidak ada default dari para meter hasil akan undefine maka dari itu harus di tambah = 'nama apapun untuk menjadi default' apabila tidak ada argument
    return `Hello My Name is Iqbal ${name}`
}
console.log(PrintOut())
console.log(PrintOut('Iqbal'))

// FUNCTION WITH REST PARAMETER
function Output(a, b, c, d, e, ...ManyMore){ // many more merupakan parameter jika untuk yang tidak ada argument
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(ManyMore) // untuk yang berada di manymore karena tidak termasuk dalam console log makan hasil nya akan menjadi array
}
Output(1,2,3,4,5,6,7,8,9,10)

// CLOSURE FUNCTION: Inner function yang dapat mengakses variabel di outer function
function outer(name){
    function inner(){
        return `My Name is ${name}` // walaupun parameter dipanggil dalam function inner, kode akan tetap berjalan
    }
}
outer('gee')

// RECURSIVE FUNCTION
// Function Perulangan

function rec(num){
    console.log(num) // jadi parameter yang akan dihasilkan 0, 1, 2, 3
    if(num < 3){
        rec(num+1) // cara kerja 0+1, 1+1, 2+1; 
    }
}
rec(0)