import LinkedList from "./classLinkedList.js";

const list = new LinkedList();

console.log(`Linked list size: ${list.size()}`)

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dog");

console.log(list.getList())
console.log(`Linked list size: ${list.size()}`)
console.log("First item in the list")
console.log(list.head())
console.log("Last item in the list")
console.log(list.tail())

console.log(list.toString())
