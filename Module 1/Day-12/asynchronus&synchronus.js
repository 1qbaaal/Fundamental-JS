// Case. 
// Delete Data 3s
// Show Newest Data

// contoh soal

let numbers = [1, 2, 3, 4, 5, 6]

function DeleteData(){
  setTimeout(() => {
    numbers.pop() // .pop artinya menghapus angka yang paling belakang
  }, 3000) // 3000 merupakan arti dari 3000 ms atau 3 detik
}
                            // jika terdapat case seperti ini, ini akan terjadi overlooping yang mana hasil yang akan di tampilkan selalu showData karena ia merupakan synchronus data. 
function ShowData(){
  console.log(numbers)
}

DeleteData()
ShowData() 

// lalu bagaimana cara untuk menjadikan asyncrhonus terlihat seperti synchronus data?
// kita dapat menggunakan callback, callback berguna untuk menjadikan asychronus terlihat seperti synchronus data

let number = [1, 2, 3, 4, 5, 6]

function DeleteData(cb){ // tambahkan parameters untuk meng callback data
  setTimeout(() => {
    numbers.pop()
    cb()
  }, 3000) 
}

function ShowData(){
  console.log(numbers)
}

DeleteData(ShowData) // karena kita menggunakan call back, maka javascript akan menyelesaikan terlbih dahulu data asynchronus karena telah di callbak lalu baru akan menyelesaikan synchronus data



