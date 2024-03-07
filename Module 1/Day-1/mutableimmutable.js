// MUTABLE (Copy by Reference)
// Variabel yang value nya bisa berubah ketika di copy
let array1 = ['a','b','c']
let array2 = array1
array2[0]= 'd' // [0] sama dengan indek 0 atau sama dengan 'a'
console.log('Array1:')
console.log(array1)
console.log('Array2:')
console.log(array2)

let dataStudent1 = {
    name: 'Tatang',
    hobby: 'Makan'
}

let dataStudent2 = dataStudent1
dataStudent2.name = 'Suratatang'
console.log(dataStudent1)
console.log(dataStudent2)

// IMMUTABLE ARRAY
let arr1 = ['BSD', 'JKT']
let arr2 = [...arr1] // ... sama dengan Spread Operator // arr2 = ['BSD', 'JKT']
arr2[1]='BDG'
console.log(arr1)
console.log(arr2)

// IMMUTABLE (Copy by Value)
// Varible yang Valuenya tidak dapat di rubah
let str1 = 'Hello'
let str2 = str1
str2 = 'Hello Hai'
console.log(str1)
console.log(str2)