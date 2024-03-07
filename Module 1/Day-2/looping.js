// LOOPING : Perulangan
// Case. Client request dibuatkan aplikasi menampilkan kata "Hello, JCWD" sebanyak 10x

const txt = 'Hello, JCWD'
console.log(txt)
console.log(txt)
console.log(txt)
console.log(txt)
console.log(txt)
console.log(txt) // kelamaan pake ginian

// WHILE 
// Start; End; Exit Way
/*
    while(condition){
        Block of Code
    }
*/

let start = 1
while(start <= 10){ // untuk mengulangi kata sebnayak 10x 
    console.log(txt)
    start++ // supaya tidak terjadi infinite looping atau pengulangan terus-menerus, ++ diartikan setelah penambahan 1 while dimulai
}

let  init = 1 
while(init < 3){
    console.log(init)
    init++
}

let counter = 1
while(counter <= 10){
    console.log(counter)
    counter++
}

// DO WHILE
/*
    do{
            Block Of Code
    }
*/

let initVal = 1
do{
    console.log(initVal)
    initVal+= 2 // arti dari += 2 yaitu hasil setelah looping ditambahkan 2, contoh 1 --> 3 --> 5
}while(initVal <= 5)

let initCount = 1
do{
    console.log(initCount)
    initCount++
}while(initCount < 1) // tetap di hitung 1 karena dilakukan terlebih dahulu baru di cek melalui while

// FOR LOOP : Simplify dari While Loop
/*
    for(start; conditon; exitway){
        Block Of Code
    }
*/

for(let i=1; i<=5; i++){ // hasilnya seperti while loop namun lebih simple
    console.log(i)
}

// BREAK & CONTINUE
// BREAK : Menghentikan Sebuah Proses
// CONTINUE : Melompati sebuah Proses

// Contoh
for(let i=1; i<5; i++){
    if(i === 2) continue; // akan melompati sebuah proses jika hasil tersebut true (kasus disamping 1 = 2 , maka langsung di lompati ke angka 3 dst)
    console.log(i)
}

for(let i= 1; i<5; i++){
    if(i !== 1) break; // akan menghentikan proses jika sudah ditemukan hasil true
    console.log(i) 
}