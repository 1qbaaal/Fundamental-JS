// PROMISE

// function SimplePromise(){
//   return new Promise((resolve, reject) => { // promise terdiri dari 2 parameters
//     //Resolve: Promise Success
//     //Reject: Promise Failed

//     if(1 === 1){
//       resolve('Succes')
//     }else{
//       reject('Failed')
//     }
//   })
// }

// SimplePromise()
// .then((res) => {
//   console.log(res) // .then merupakan syntax untuk memamnggil resolve
// })
// .catch((err) =>{
//   console.log(err) // sedangkan .catch syntax untuk memanggil reject
// })

// Contoh Soal

let number = [1, 2, 3, 4, 5, 6]

function DeleteData(){ 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      number.pop()
      resolve(number)
    }, 3000)
  })
}

function ShowData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number)
    }, 2000)
  })
}

DeleteData() 
.then(() => { // .then yang pertama untuk mengabil data yang berasal dari delete data
  return DeleteData()
})
.then(() => { 
  console.log(res)
  return DeleteData()
})
.then(() => { 
  console.log(res)
  return ShowData()
})
.then(() => {
  return ShowData()
})
.then((res) => { //.then yang disini adalah untuk mengambil data yang berasal dari showData
  console.log(res)
})
.catch((err) => {
  console.log(err)
}) // hal yang dilakukan diatas ini merupakan -> Promise Chaining

