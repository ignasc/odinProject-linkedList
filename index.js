import LinkedList from "./classLinkedList.js";

const list = new LinkedList();

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("dog");

console.log(list.getList())
