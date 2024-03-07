async function API(){
  const respone = await fetch("https://jsonplaceholder.typicode.com/posts")
  const test = await respone.json()
  console.log(test)
}
API()

// ==============

async function FetchData(){
  try {
    let res = await fetch 
  } catch (error) {
    
  }
}