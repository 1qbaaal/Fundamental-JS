// SCOPE
// Pembatas, ada 2 jenis scope yaitu lokal dan global

// VAR
// - Boleh Memiliki nama yang sama
// - Valuenya bisa di update
// - Tidak Mengenal Scope

// LET
// - Tidak Boleh memiliki nama yang sama
// - Valuenya bisa diupadate
// - Mengenal Scope

// CONST
// - Tidak boleh memiliki nama yang sama
// - Valuenya tidak bisa diupdate
// - Mengenal Scope

// {


// }

// Contoh Var

var student = 'Iqbal'

{
    var student = 'Tazz'
}

console.log(student) // karena var tidak mengenal scope, maka yang akan tampil adalah perintah yang terakhir dikeluarkan

// contoh let

let campus = 'BSD'

{
    let campus = 'BDG'
}
console.log(campus) // karena perintah console log berada di global scope maka perintah yang akan diambil adalah perintah yang sama2 berada di global scope

{
    let classPWd = 'JCDM'
    {
        let classPwd = 'JCVD'
    }
    console.log(classPwd)
}