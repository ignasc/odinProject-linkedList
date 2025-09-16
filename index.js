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

console.log(`Retrieve data at index 5: ${list.at(5)}`)

console.log("Remove last node.")
list.pop();
console.log(list.toString())

console.log(`Is value "dog" in list? ${list.contains("dog")}`)
console.log(`Is value "cow" in list? ${list.contains("cow")}`)

console.log(`Position of "dog" value is ${list.find("dog")}`)
console.log(`Position of "cow" value is ${list.find("cow")}`)
console.log(`Position of "hamster" value is ${list.find("hamster")}`)

console.log(`Insert "cow" at position 3.`)
list.insertAt("cow", 3)
console.log(list.toString())
console.log(`Insert "first" at position 1.`)
list.insertAt("first", 1)
console.log(list.toString())
console.log(`Try inserting "plane" at position 99, which is out of bounds.`)
list.insertAt("plane", 99)
console.log(list.toString())
console.log(`\n\nRemove "cow" at position 3.`)
list.removeAt(3)
console.log(list.toString())
console.log(`Remove "dog" at position 1.`)
list.removeAt(1)
console.log(list.toString())
console.log(`Try removing "plane" at position 99, which is out of bounds.`)
list.removeAt(99)
list.removeAt(1)
console.log(list.toString())
