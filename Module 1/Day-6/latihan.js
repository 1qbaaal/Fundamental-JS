/*
    Case. Buatlah Program untuk merubah price dari number menjadi price IDR dari data berikut:
        Data: [
                {name: 'Jeruk', price: 10000}
                {name: 'Anggur', price: 15000}
                {name: 'Semangka', price: 20000}
        ]

        Output: [
                    {name: 'Jeruk', price: 'Rp. 10.000'}
                    {name: 'Anggur', price: 'Rp. 15.000'}
                {   name: 'Semangka', price: 'Rp. 20.000'}
        ]
 */

const produk = [
                {name: 'Jeruk', price: 10000},
                {name: 'Anggur', price: 15000},
                {name: 'Semangka', price: 20000}
]

for(let i=0; i<produk.length; i++){
    console.log(produk[i].price)
    produk[i].price = `Rp. ${produk[i].price.toLocaleString('id-ID')}`
}
console.log(produk)


for(let item of produk){
    item.price = item.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})
}

class User{
    Username = '';
    Email = '';
    #Password = '';
    Age = 0;

    constructor(Username, Email, Password, Age){
        this.Username = Username;
        this.Email = Email;
        this.#Password = Password;
        this.Age = Age
    }

    get Password(){
        return ` ***${this.#Password.slice(3, this.#Password.length)}`
    }   
}
const user1 = new User('Barent', 'temeniqbal@gmail.com','jcwd2702bsd','1999/12/12')
console.log(user1.Username)
console.log(user1.Email)
console.log(user1.Password)
console.log(user1.Age)


