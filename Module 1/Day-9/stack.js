// STACK
// LIFO: LAST IN - FIRST OUT > Terahkir masuk - Paling awal keluar

class Stack{
  maxSize = 5;
  container = [];
  push(data){
    if(this.container.length < this.maxSize){ // untuk memasukan data page.
      this.container.push(data)
    }
  }
  pop(){
    this.container.pop() // untuk mengeluarkan data yang ada pada page. ex: pada page browser
  }
}
let newStack = new Stack()
newStack.push('Page-01')
newStack.push('Page-02')
newStack.push('Page-03')
newStack.pop() // pop disini artinya mengeluarkan page 3
newStack.push('Page-04')
newStack.push('Page-05')

console.log(newStack)


// // QUEUE
// // FIFO: FIRST IN - FIRST OUT

class Queue{ 
  maxSize = 5;
  container = [];
  enqueue(element){
    if(this.container.length < this.maxSize){ 
      this.container.push(element)
    }
  }
  dequeue(){
    return this.container.shift() // shift berfungsi untuk menghapus data yang pertama kali masuk
  }
  getElement(){
    return this.container
  }
}


let newQueue = new Queue()
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
// console.log(newQueue.getElement())
newQueue.dequeue()
console.log(newQueue.getElement())

// // SET

const fruits = ['Banana', 'Orange', 'Starfruit']

const newFruits = new Set(fruits)
newFruits.add('banana') // karena js agak sensitif besar dan kecil huruf maka, kalau menambahkan dengan nama yang sama tidak akan bertambah namun jika menambhakan nama yang sama namun alfabet ada yang berbeda baru di tambah.
newFruits.add('Durian') // fungsi add untuk menambahkan data pada set
newFruits.delete('banana') // fungsi delete untuk menghapus data pada set
console.log(newFruits.has('Banana')) // fungsi has untuk mengecek apakah data tersebut benar ada di dalam set

newFruits.clear()  // --> fungsi clear untuk menghapus semua data yanga ada pada set

const campus = ['BSD', 'JKT', 'BDG'] 
const setCampus = new Set(campus)
const campusEntries = setCampus.entries() // fungsi entries untuk mengubah array menjadi key & value

let text = ''
for(const entry of campusEntries){
  text += entry
}

setCampus.forEach((item) => {
  console.log(item)
})

setCampus.forEach((item, index) => {
  console.log(item, index)
})


// LINKED LIST : yang digunakan untuk menyimpan dan mengelola data secara dinamis. Struktur data ini memungkinkan kita untuk dengan mudah membuat tempat baru untuk menyimpan data kapan saja dibutuhkan.

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        }
      }
    }
  }
}
console.log(list.head)
console.log(list.head.next) // untuk langsung next ke object 2, jadi tidak melalui object 1


class Node{
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor (){
    this.head = null;
    this.size = 0;
  }

 // add an element at the end of the list
 add(element) {
  // creates a new node
  let node = new Node(element);
  // node = {
  //     element: 'B',
  //     next: undefined
  // }

  // to store current node
  let current;

  // if the list is empty, add the element and make it head
  if (this.head == null) {
      this.head = node;
      // head = {
      //     element: 'A',
      //     next: undefined
      // }
  } else {
      current = this.head;
      // current = {
      //     element: 'A',
      //     next: undefined
      // }

      // iterate to the end of the list
      // note : end of the list -> next === null
      while (current.next) {
          current = current.next
      }

      // add node
      current.next = node;
  }

  this.size += 1;
}

    printList() {
        const curr = this.head;
        while (curr) {
            console.log(curr.element);
            curr = curr.next;
        }
    }

    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            return console.log("Please enter a valid index.")
        } else {
            // creates a new node
            const node = new Node(element);
            let curr = this.head;

            // add the element to the first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let prev;
                let it = 0;

                while (it < index) {
                    it++;
                }
            }

            // iterate over the list to find the position to insert
            for (let i = 0; i < index; i++) {
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            prev.next = node;
            node.next = curr;
        }

        this.size += 1;
    }

    // removes an element at the specific index
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return console.log("Please enter a valid index.");
        } else {
            let curr = this.head;
            let prev = curr;

            // deleting first element
            if (index == 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to find the
                // position to remove
                for (let i = 0; i < index; i++) {
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }

            this.size -= 1

            // return the remove element
            return curr.element;
        }
    }

    removeElement(element){
      let current = this.head;
      let prev = null;

      while(current != null){
        if(current.element === element){
          if(prev == null){
          this.head = current.next;
        }else {
          prev.next = current.next;
        }

        this.size -= 1;

        return current.element;
      }

      prev = current;
      current = current.next;
    }
    return null;
}

indexOf(element){
  let count = 0;
  let current = this.head;

  while(current != null){

    if(current.element === element){
      return count;
    }

    count += 1;
    current = current.next;
  }
  
  return -1;
}
}


const linkedList = new LinkedList();
linkedList.add('A');
linkedList.add('B');
linkedList.add('C');
linkedList.add('D');
linkedList.insertAt('NewValue', 2);
linkedList.removeElement('B');
linkedList.removeAt(3);

linkedList.printList();

console.log(linkedList.indexOf('NewValue'))