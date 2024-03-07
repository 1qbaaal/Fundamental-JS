// 1. Create a function to check if two objects are equal 
    // ● Example
    // ○ Input : { a: 2 } & { a: 1 }
    // ○ Output: false
    // ● Example
    // ○ Input : { a: “Hello” } & { a: 1 }
    // ○ Output: false
    // ● Example
    // ○ Input : { a: 1 } & { a: 1 }
    // ○ Output: true

    function objectEquals(obj1, obj2) {
        for(let key in obj1) {
          if (obj2[key] != obj1[key]) {
            return false; // return: untuk menyimpan hasil ke dalam function
          }
        }
        return true;
      }
      
      const objectA = {a: 1,
      b: 2};
      const objectB= {a: 1};
      console.log(objectEquals(objectA, objectB));

    //   ===================================================


      

// 2. Create a function to get the intersection of two objects
// ● Example
// ○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// ○ Output: { a: 1 }

function objectIntersect(obj1, obj2) {
    const obj3 = {};
    for(let key in obj1) { //pakai obj1 sebagai acuan
      if (obj2[key] == obj1[key]) { // comparing values 
        obj3[key] = obj2[key];
        //key     = //value
      }
    }
    return obj3;
  }
  
  const objectC = {a: 1, b:2}
  const objectD = {a: 1, c:3}
  console.log(objectIntersect(objectC,objectD));



// 3. Create a function to merge two array of student data and remove duplicate data
// ● Student data : name & email
// ● Example : 
        // Array1 → [
        // { name: ‘Student 1’, email : ‘student1@mail.com’ }, 
        // { name: ‘Student 2’, email : ‘student2@mail.com’ }
        // ]
        // Array2 → [
        // { name: ‘Student 1’, email : ‘student1@mail.com’ }, 
        // { name: ‘Student 3’, email : ‘student3@mail.com’ }
        // ]



// 4. Create a function that can accept input as an array of objects and switch all values into property and 
// property into value
// ● Example : 
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

function switcher(a) {
    for (let i of a) {
      const array1 = Object.entries(i); // cara bikin object menjadi array | i adalah object => hasilnya array
      // bikin variabel "obj"
      // array dari object i
      // console.log("i",i);
      // console.log("array1",array1);
  
      for (let j of array1) {
        let temp = j[0] //simpen keys
        j[0] = j[1]; // nuker key jadi value
        j[1] = temp; // nuker value jadi keys
      }
      return [Object.fromEntries(array1)] // cara bikin array menjadi object | array1 adalah array => hasilnya object
    }
  }
  
  const arr = [{name: 'David', age: 20}];
  console.log(switcher(arr))

  // ====================================

  function SwapProperty(arr){

  }

// 5. Create a function to find a factorial number using recursion
// Example
// ○ Input : 5
// ○ Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

function factorial(x){
    if(x === 0){
        return 1
    }else{
        return x * factorial(x-1);
    }
}
console.log(factorial(7))

// ===================================

