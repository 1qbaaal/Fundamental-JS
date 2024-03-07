let num = [1, 2, 3, 4, 5, 6, 7]

function addData(nomor){
  return new Promise((res, rej) =>{
    setTimeout(()=>{
    num.push(nomor)
    res(num)
  }, 2000)
})
}

function showData(){
  return new Promise ((res, rej )=>{
    setTimeout(()=>{
      res(num)
    }, 1000)
  })
}

async function main(){
  await addData(11);
  await addData(15);
  await addData(20);
  const res = await showData()
  console.log(res)
}

main()