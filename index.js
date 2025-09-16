import LinkedList from "./classLinkedList.js";

const list = new LinkedList();

console.log(`Linked list size before adding any nodes: ${list.size()}`)

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dog");

console.log(`Linked list size after appending items: ${list.size()}`)
console.log("\nFirst item in the list")
console.log(list.head())
console.log("\nLast item in the list")
console.log(list.tail())

console.log(list.toString())

console.log(`\nRetrieve data at index 5: ${list.at(5)}`)

console.log("\nRemove last node.")
list.pop();
console.log(list.toString())

console.log(`\nIs value "dog" in list? ${list.contains("dog")}`)
console.log(`Is value "cow" in list? ${list.contains("cow")}`)

console.log(`\nPosition of "dog" value is ${list.find("dog")}`)
console.log(`Position of "cow" value is ${list.find("cow")}`)
console.log(`Position of "hamster" value is ${list.find("hamster")}`)

console.log(`\nInsert "cow" at position 3.`)
list.insertAt("cow", 3)
console.log(list.toString())
console.log(`Insert "first" at position 1.`)
list.insertAt("first", 1)
console.log(list.toString())
console.log(`Try inserting "plane" at position 99, which is out of bounds.`)
list.insertAt("plane", 99)
console.log(list.toString())
console.log(`\nRemove node at position 3.`)
list.removeAt(3)
console.log(list.toString())
console.log(`Remove node at position 1.`)
list.removeAt(1)
console.log(list.toString())
console.log(`Try removing node at position 99, which is out of bounds.`)
list.removeAt(99)
console.log(list.toString())
