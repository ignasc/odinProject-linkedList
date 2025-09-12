import Node from "./classNode.js";

class LinkedList {
    constructor(){
        this.headNode = null;
        this.tailNode = null;
    }

    getList(){
        return this.headNode;
    }

    append(data){
        if(!this.headNode){
            this.headNode = new Node(data);
        } else {
            let currentNode = this.headNode;
            while(currentNode.nextNode){
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = new Node(data);
        };
    }

    prepend(data){
        if(!this.headNode){
            this.headNode = new Node(data);
        } else {
            let currentNodes = this.headNode;
            this.headNode = new Node(data);
            this.headNode.nextNode = currentNodes;
        };
    }

    size(){
        if(!this.headNode){return 0};
        let size = 1;
        let currentNode = this.headNode;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
            size++;
        };
        return size;
    }

    head(){
        return this.headNode.data;
    }

    tail(){
        if(!this.headNode){return null};
        let tailNode = null;
        let currentNode = this.headNode;
        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        };
        return currentNode.data;
    }

    index(index){
        console.log("index to be implemented")
    }

    pop(){
        console.log("pop to be implemented")
    }

    contains(value){
        console.log("contains to be implemented")
    }

    find(){
        console.log("find to be implemented")
    }

    toString(){
        console.log("toString to be implemented")
    }

    insertAt(index){
        console.log("insertAt to be implemented")
    }

    remoteAt(index){
        console.log("remoteAt to be implemented")
    }
};

export default LinkedList;
