


let RegisterUser = [
  {name: 'LeoKecil', email: 'leokecil@gmail.com', pass: 1234567},
  {name: 'Mumtaz', email: 'mumtaz@gmail.com', pass: 1029731927309}
]
function ValidasiUsername(){
  return new Promise((res, rej) => {
    for(let item of RegisterUser){
      if(item.toLowerCase() == name.toLowerCase()){
        res('Username Ready to Use!')
      }else{
        rej('Username Already Use!')
      }
    }
  })
}
ValidasiUsername()
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err)
})  