// ASYNCAWAIT

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

async function Main(){
  await DeleteData()  // perintah disamping merupakan perintah untuk medelete data, delete data digunakan tergantung seberapa banyak kamu akan delete data
  await DeleteData()
  await DeleteData()

  const res = await ShowData() // untuk memunculkan hasilnya maka kita harus membuat variabel baru 
  console.log(res)
}

Main()

async function Main(){
  try {
    await DeleteData()
    await DeleteData()
    await DeleteData()

    const res = await ShowData()
    console.log(res)
    
  } catch (error) {
    console.log(error)
  }
}
Main ()