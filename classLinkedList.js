class LinkedList {
    constructor(){
        this.list = [];
    }

    getList(){
        return this.list;
    }

    addNode(node){
        this.list.push(node);
    }
};

export default LinkedList;
