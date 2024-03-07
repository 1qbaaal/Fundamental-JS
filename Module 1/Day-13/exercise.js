// 2. Buatlah sebuah promise function untuk melakukan register user kedalam sebuah array of object. 
// Lakukan validasi untuk field username, email, password dan confirmPassword dengan ketentuan sbb:
// - Username:
        // - Cek username already use or not
        // - Have minimum character is 6
// - Email:
        // - Check Email already register or not
        // - Have @ character
// - Pass & Conf pass:
        // - Check both of them have same value

let RegisterUser = [
  {name: 'Leo Kecil', email: 'leokecil@gmail.com', pass: '1234567'},
  {name: 'Mumtaz', email: 'mumtaz@gmail.com', pass: '1029731927309'}
]

function ValidasiUser(data){
  return new Promise((res, rej) =>{
    setTimeout(() =>{
      try {
        const {name, email, password, confirmPassword} = data
        RegisterUser.forEach(item => {
          if(item.name === name || item.email === email){
            rej ('Username/Email Already in Use!')
          }
        })

        if(name.length < 6) rej('Username Have minimum 6 Character')
        if(!email.includes('@')) rej('Email Not Valid')
        if(password !== confirmPassword) rej('Password Doesnt Match')

        RegisterUser.push(name, email, password)
        res('Register Success')
      } catch (error) {
        rej(error)
      }
    }, 2000)
  })
}

  async function main(){
    try {
      const response = await ValidasiUser({
        name: 'jaungBinong',
        email: 'jaungkidiwn@gmail.com',
        password: 'asdasd123',
        confirmPassword: 'asdasd123'
      })
      console.log(response) // jangan lupa diconsole log juga
    } catch (error) {
      console.log(error)
    }
  }

main()

// Cara kedua menggunakan throw new Error untuk menggati reject

// let RegisterUser = [
//   {name: 'Leo Kecil', email: 'leokecil@gmail.com', pass: '1234567'},
//   {name: 'Mumtaz', email: 'mumtaz@gmail.com', pass: '1029731927309'}
// ]

// function ValidasiUser(data){
//   return new Promise((res, rej) =>{
//     setTimeout(() =>{
//       try {
//         const {name, email, password, confirmPassword} = data
//         RegisterUser.forEach(item => {
//           if(item.name === name || item.email === email){
//             throw new Error('Username/Email Already in Use!')
//           }
//         })

//         if(name.length < 6) throw new Error('Username Have minimum 6 Character')
//         if(!email.includes('@')) throw new Error('Email Not Valid')
//         if(password !== confirmPassword) throw new Error('Password Doesnt Match')

//         RegisterUser.push(name, email, password)
//         res('Register Success')
//       } catch (error) {
//         rej(error)
//       }
//     }, 2000)
//   })
// }

//   async function main(){
//     try {
//       const response = await ValidasiUser({
//         name: 'jaungBinong',
//         email: 'jaungkidiwn@gmail.com',
//         password: 'asdasd123',
//         confirmPassword: 'asdasd123'
//       })
//       console.log(response) // jangan lupa diconsole log juga
//     } catch (error) {
//       console.log(error)
//     }
//   }

// main()
