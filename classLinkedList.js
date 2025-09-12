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

    prepend(data){
        if(!this.head){
            this.head = new Node(data);
        } else {
            let currentNodes = this.head;
            this.head = new Node(data);
            this.head.nextNode = currentNodes;
        };
    }
};

export default LinkedList;
