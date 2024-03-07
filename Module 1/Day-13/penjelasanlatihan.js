// let animal = ['Kera', 'Lutung', 'Yipyip']

// function addData(addAnimal){ // parameter addAnimal diberikan supaya codingan lebih dinamis dimana dapat memasukan lebih dari 1 animal
//   return new Promise((res, rej) =>{
//     setTimeout(()=>{
//     animal.push(addAnimal)
//     res(animal)
//   }, 2000)
// })
// }

// function showData(){
//   return new Promise ((res, rej )=>{
//     setTimeout(()=>{
//       res(animal)
//     }, 1000)
//   })
// }

// async function main(){
//   await addData('Monyet');
//   await addData('Gorila');
//   await addData('T-rex');
//   const res = await showData()
//   console.log(res)
// }

// main()

// APABILA TERDAPAT DATA YANG SAMA

let animal1 = ['Kera Sakit', 'Lutung', 'Yipyip']

function addData(addAnimal){ 
  return new Promise((res, rej) =>{
    setTimeout(()=>{
      animal1.forEach((item) =>{
        if(item.toLowerCase() === addAnimal.toLowerCase()){ // jika data yang dimasukan sama maka kita dapat memberikan looping supaya tidak terdapat data yang double
          rej('Animal Already Exist!')
        }
        })

        animal1.push(addAnimal)
        res()
    }, 2000)
  })   
}

function showData(){
  return new Promise ((res, rej )=>{
    setTimeout(()=>{
      res(animal1)
    }, 1000)
  })
}

async function main(){
  try {
   
    await addData('Monyet');
    await addData('Gorila');
    await addData('Lutung'); // jika ada beberapa penambahan parameter, namun salah astu ada yang sama maka tetap akan keluar animal already exist
    const res = await showData()
    console.log(res)
  }catch (error) {
    console.log(error)
  }
}

main()