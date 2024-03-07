// Case. Odd/Even Array
// Ex. Input : [1, 4, 5, 8, 10]
// output : ['Odd', 'Even', 'Odd', 'Even', 'Even;]

const input = [1, 4, 5, 8, 10]
const output = []
for(let i=0; i<input.length; i++){
    if(input[i] % 2 === 0){
        output.push('Even')
    }else{
        output.push('Odd')
    }
}
console.log(output)

// Case. Filtering type of String Only
// Input ; ['hello', 123, true, undefined, 'jcwd']
// Ouput ; arrString = ['hello','jcwd']
//          totalData = 2

const dataRandom = ['hello', 123, true, undefined, 'jcwd']
const arrData = []

for(let i=0; i<dataRandom.length; i++){
    if(typeof dataRandom[i] === 'string') arrData.push(dataRandom[i])
}
console.log(arrData)
console.log(arrData.length)

