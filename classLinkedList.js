import Node from "./classNode.js";

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    getList(){
        return this.head;
    }

    append(data){
        if(!this.head){
            this.head = new Node(data);
        } else {
            let currentNode = this.head;
            while(currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new Node(data);
        };
    }
};

export default LinkedList;
