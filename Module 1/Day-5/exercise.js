// EXERCISE 1
// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

function arrNum(num){
    let rendah = num [0]
    let tinggi = num [0]
    let rata2 = num [0]
    
    for(let i=0; i<num.length; i++){
        if (num[i] < rendah){
            rendah = num[i]
        }
        if (num[i] > tinggi){
            tinggi = num[i]
        }
        rata2 += num [i]
    }
    const average = rata2 / num.length
    return {
        rendah : rendah,
        tinggi : tinggi,
        average : average
    }
}
let num = [12, 5, 23, 18, 4, 45, 32]
let hasil = arrNum(num)
console.log(hasil)
// ======================================================
function LowestHighAvg(arrNum){
    let lowest = arrNum [0]
    let high = arrNum [1]
    let total = []

    for(let item of arrNum){
        if(item < lowest) lowest = item
        if(item > high) high = item
        total += item
    }

    return [lowest, high, total/arrNum.length]
}
console.log(LowestHighAvg([12, 5, 23, 18, 4, 45, 32]))

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

function SeparatesComma(arrStr){
    return arrStr.slice(0, arrStr.length -1). join(', ') + ', and ' + arrStr[arrStr.length-1]
}
console.log(SeparatesComma(['Apple', 'Banana', 'Manggis']))

// 3. Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

function str(name){
    return name.split(' ')
}
let name = 'Hello World'
console.log(str(name))


// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function SumTwoArray(arr1, arr2){
    let total = []

    for(let i=0; i<arr1.length; i++){
        total.push(arr1[i] + arr2[i])
    }
    return total
}
console.log(SumTwoArray([3,2,1], [1,2,3]))
// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

function FilterNewDataArray(arr, newElement){
    if(!arr.includes(newElement)){ // di negasi jika element tersebut tidak ada di parameter
        arr.push(newElement)
    }
    return arr
}
console.log(FilterNewDataArray([3,4,5,1], 7))
// EXERCISE 2

// 1. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : numbers = [1, 2, 3, 4, 5, 6] → [2, 4, 6] 

function EvenNum(Odd){
    let arrEven = []
    for(let item of Odd){
        if(item % 2 === 0) arrEven.push(item)
    }

    return console.log(arrEven);
}

EvenNum([1, 2, 3, 4, 5, 6])
// =========================
function EvenNumber(oddNum){
    let evenArr = []
    for(let i=0; i<oddNum.length; i++){
        if(oddNum[i] % 2 === 0)
            evenArr.push(oddNum[i])
    }
    return evenArr
}
console.log(EvenNumber([5,6,7,8,9,10,11,12]))

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements). 
// a. Example : 
//  maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
//  The function will return [5, 10, 24, 3, 6]


// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] 

function combineArr(arr1, arr2){
    return arr1.concat(arr2)
}
console.log(combineArr([1, 2, 3],[4, 5, 6]))



// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] 


// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

// EXERCISE 3

// 1. Based on the array below write a function that will return primitive data types only. 
 
// let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

// 2. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2

function SecondSmallest(arr){
    arr.sort((a, b) => a-b)
    return arr[1]
}
console.log(SecondSmallest([5, 3, 1, 7, 2, 6]))

// 3. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

// 4. Write a function from the below array of number that will return sum of duplicate values. let 
// arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

// 5. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick 
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
