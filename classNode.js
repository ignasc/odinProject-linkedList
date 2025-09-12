class Node {
    constructor(data = null, next = null){
        this.data = data;
        this.next = next;
    }

    getNode(){
        return {
            "data": this.data,
            "next": this.next,
        };
    }
};

export default Node;
