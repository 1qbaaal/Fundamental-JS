// OBJECT
// Pair Key & Value

// Case. Products: Name, Price

// name, price, stock discount disebut dengan key
// 'Apel', 10000, 10, 0 disebut dengan value
// key & value disebut dengan property
const products1 = {
    name:'Apel',
    price: 10000,
    stock: 10,
    discont: 0
}

const products = [
    {
        name:'Apel',
        price: 10000,
        stock: 10,
        discont: 0
    },
    {
        name:'Jeruk',
        price: 15000,
        stock: 10,
        discont: 10
    }
]
console.log(products)

//CRUD (Create, Read, Update, Delete)

// CREATE : Cara membuat object
const student ={
    name: 'Komeng',
    addres: 'Jawa Barat'
}
// console.log(student)

// READ : Cara Membaca Object
console.log(student.name) // untuk membaca object kita hanya perlu menggunakan ( . ) dalam key
console.log(student.addres)
console.log(student['name']) // atau bisa juga menggunakan array string

// UPDATE : Cara mengupdate Object
student.name = 'Adul'
console.log(student)

// DEELTE
delete student.name
console.log(student)

// METHODE
// Sebuah function yang dimasukan ke dalam object
// this ---> Untuk mengaskses apapun yang ada di dalam object
// contoh

const print = {
    nama: 'Iqbal',

    greeting(addres){
        console.log(`Helo, ${this.nama}! ${addres}`)
    },
    output: () => {
        console.log(`Helo JCWD ${this.nama}`)
    }
}
print.greeting('Kuningan')
print.output()

// Chaining Condition
// contoh
const profile = {
    name: {
        firstName: 'Tatang'
    }
}
console.log(profile?.lastname?.a) // ?. merupakan optional chaining: untuk memprogram opsi chaining condition


// DESTRUCTURING ASSIGNMENT
// Konversi property object menjadi variabel

const stundentData= {
    name: 'Eboy',
    addres: 'Tangerang'
}
const {name, addres}= stundentData
console.log(name)
console.log(addres)

// Looping Object(For In)
for(let key in stundentData){
    console.log(key)
    console.log(stundentData[key])
 }

