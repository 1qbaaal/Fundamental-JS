// 1. UPPERCASE EACH ALPHABET
// Ex. Input = 'abc'
//     Output = ['Abc', 'aBc', 'abC']

let alphabet = 'bca'
let Abc = [
  alphabet[0].toUpperCase() + alphabet.slice(1), 
  alphabet[0] + alphabet[1].toUpperCase() + alphabet.slice(2),
  alphabet.slice(0, 2) + alphabet[2].toUpperCase() 
]
console.log(Abc)
// ================================

let alpha = 'abc';
let output = [];

for(let i = 0; i < alpha.length; i++){
  output.push(alpha.replace(alpha[i], alpha[i].toUpperCase()))
}
console.log(output)

// =================================================

function huruf(input){
  let out = []

  for(let i = 0; i < input.length; i++){
    out.push(input.replace(input[i], input[i].toUpperCase()))
  }
  return out
}
// console.log(huruf('abc'))

// 2. REPEAT CHARACTER 
// Ex. Input : 'abc'
//     Output : ['A', 'Bb, 'Ccc']

// Cara asal-asalan
// let character = 'abc'
// let huruf = [
//   character.replace(character, 'A'),
//   character.replace(character, 'Bb'),
//   character.replace(character, 'Ccc')
// ]
// console.log(huruf)

// ==================================

// Cara yang bener
 function RepeatCharacter(word){
  let outcome = []

  for(let i = 0; i < word.length; i++){
    outcome.push(word[i].toUpperCase() + word[i].repeat(i))
  }

  return outcome
 }

 console.log(RepeatCharacter('ttd'))


