// CLASS
// Blueprint untuk membuat objek dengan property yang sama
// contoh

const products = [
    {name: 'Apel', Price: 10000}, // clas digunakan supaya tidak terjadi error ketika ada property yang tidak sama dan menyebabkan error
    {name: 'Jeruk', price: 10000}, // seperti contoh disamping Price pada apel diawali dengan kapital, sedangan yang lainnya tidak. itu bisa menyebabkan error ketika di jalanakn
    {name: 'Anggur', price: 10000} 
]

class Products{
    name='';
    price= 0;

    constructor(name, price){ //constructor digunakan untuk meng-assignt value dan memunculkan parameter
        this.name= name;
        this.price= price;
    }
}
const product1 = new Products('Apel', 10000) // supaya constructor berjalan maka perlu ditambah kata (new) pada setiap class
const product2 = new Products('Jeruk', 10000)
console.log(product1)

const arrProduct = [
    new Products ('Apel', 10000),
    new Products ('Jeruk', 10000)
]
console.log(arrProduct)

// contoh 2
class Student{
    constructor(name, age, address, school){
        this.name= name;
        this.age= age;
        this.address = address;
        this.school= school
    }
}
const student1 = new Student('Jaung', 28, 'Binong', 'UNIS')
console.log(student1)

// Case. Class
// Di sebuah supermarket, terdapat beberapa product kategori. Mulai dari Electronic, fashion, dan snack.
// Setiap product category memiliki identitas yang berbeda-beda, seperti product name, product stock, dll.
// 1. Jabarkan apa saja identitas yang dimiliki untuk masing-masing product category!
// 1. Jabarkan apa saja identitas yg dimiliki untuk masing-masing product category!
// Electronic
//  - Product Name, Product Brand, Product Price, Product Stock, Product Create, Product Serial, Product Guarantee
// Fashion
//  - Product Name, Product Brand, Product Price, Product Stock, Product Color, Product Size, Product Material
// Snack
//  - Product Name, Product Brand, Product Price, Product Stock, Product Flavour, Product Expiry, Product Netto
// 2. Buatkan class untuk setiap product category!

// cara nya bisa di jadikan 2 macam, pertama memakacai cara yang agak panjang

class Electronic{
    constructor(productName, productBrand, productPrice, productStock, productCreate, productSerial, productGuarantee){
        this.productName = productName;
        this.productBrand = productBrand;
        this.productPrice = productPrice;
        this.productStock = productStock;
        this.productCreate = productCreate;
        this.productSerial = productSerial;
        this.productGuarantee = productGuarantee;
    }
}
const electronic1 = new Electronic('Sikansen','Philip', 25, '14122020', 11223344, ' 14012020')
console.log(electronic1)
class Fashion{
    constructor(productName, productBrand, productPrice, productStock, productColor, productSize, productMaterial){
        this.productName = productName;
        this.productBrand = productBrand;
        this.productPrice = productPrice;
        this.productStock = productStock;
        this.productCreate = productColor;
        this.productSerial = productSize;
        this.productGuarantee = productMaterial;
    }
}
class Snack{
    constructor(productName, productBrand, productPrice, productStock, productFlavour, productExpiry, productNetto){
        this.productName = productName;
        this.productBrand = productBrand;
        this.productPrice = productPrice;
        this.productStock = productStock;
        this.productCreate = productFlavour;
        this.productSerial = productExpiry;
        this.productGuarantee = productNetto;
    }
}


// karena ada beberapa category yang sama dari setiap product, maka bisa di per simpel menggunakan inheritance (pewarisan)
// inheritance bertujuan untuk mewariskan jika ada kategory yang sama pada setiap class

// contoh inheritance

class Products{ // kita harus membut kategory produk yang sama di class
    productName = '';
    productBrand = '';
    productPrice = 0;
    productStock = 0; 
    
    constructor(productName, productBrand, productPrice, productStock){
        this.productName = productName;
        this.productBrand = productBrand;
        this.productPrice = productPrice;
        this.productStock = productStock; 
    }
}

class Electronic extends Products{ // untuk menjalankan inheritance menggunakan'extends' dan memanggil class yang sudah di buat 
    productCreate = '';
    productSerial = 0;
    productGuarantee = '';

    constructor(productCreate, productSerial, productGuarantee){
        super(productName, productBrand, productPrice, productStock) // untuk kategori produk yang sama tidak perlu menjabarkan menggunakan (this.) satu persatu, diganti menggunakan (super) 
        this.productCreate = productCreate;
        this.productSerial = productSerial;
        this.productGuarantee = productGuarantee;
    }
}

class Fashion extends Products{
    productColor = '';
    productSize = '';
    productMaterial = '';

    constructor(productColor, productSize, productMaterial){
        super(productName, productBrand, productPrice, productStock)
        this.productSize = productSize;
        this.productMaterial = productMaterial;
    }
}

class Snack extends Product{
    productFlavour = '';
    productExpiry = '';
    productNetto = 0;

    constructor(productFlavour, productExpiry, productNetto){
        super(productName, productBrand, productPrice, productStock)
        this.productFlavour = productFlavour;
        this.productExpiry = productExpiry;
        this.productNetto = productNetto;
    }
}

// ENCAPSULATION: Prses Bundling Data Menjadi 1 ke dalam sebuah class
// Public property
// Private property

// contoh Public Property
class Users{
    username= '';
    email= '';
    password='';

    constructor(username, email, password){
        this.username= username;
        this.email= email;
        this.password= password;
    }
}
const user1 = new Users('Buday', 'buday123@gmail.com', 'kencot1122')
console.log(user1)

// contoh Private Property
class User{
    username= '';
    #email= ''; // untuk menjadikan class menjadi private tinggal ditambahkan (#) didepan property yang ingin dijadikan privat
    #password='';

    constructor(username, email, password){
        this.username= username;
        this.#email= email; // jangan lupa command disini harus mengikuti property diatas
        this.#password= password;
    }
}
const user2 = new User('Jaay', 'jaay123@gmail.com', 'aselole123')
console.log(user2)

// SETTER & GETTER
// SETTER: Untuk memvalidasi property
// Contoh

class pengguna{
    uname= '';
    #email= '';
    katasandi= '';

    constructor(uname, email, katasandi){
        this.uname= uname;
        this.#email= email;
        this.katasandi= katasandi;
    }

    set emailValidation(email){// jika menggunakan setter atau getter maka parameter di atas tidak perlu dimasukan
        if(email.includes('@')){
            this.#email = email;
        }else{
            console.log('Email Not Valid!')
        }
    }
}