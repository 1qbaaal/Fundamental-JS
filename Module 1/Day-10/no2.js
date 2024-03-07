function singleNum(num){
  const object = {}
// object = {
//   '2': 1 + 1,
 //   '1': 1
// }
  for(let item of num){
    if(object[item] == undefined){
      object[item] = 1 ;
    }else{
      object[item]++;
    }
  }

  for(let key in object){
    if(object[key] === 1)
    return parseInt(key)
  }
}

console.log(singleNum([2,2,1]))
console.log(singleNum([4,1,2,1,2]))
console.log(singleNum([1]))

// ==================================
// Cara Barent
function findSingleNum(nums){
  for(let i of nums ){
    if(nums.indexOf(i) == nums.lastIndexOf(i)){
      return i;
    }
  }

  return 0;
}

console.log(findSingleNum([4,1,2,1,2]))

