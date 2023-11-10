function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkedList() {
    this.head = null;
}
LinkedList.prototype.add = function (data) {
    const newNode = new Node(data);
    if (this.head === null) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        }
};

LinkedList.prototype.remove = function (data) {
    if (this.head === null) {
        return;
    }
    if (this.head.data === data) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while (current.next !== null) {
        if (current.next.data === data) {
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }
};

LinkedList.prototype.print = function () {
    let current = this.head;
    const elements = [];
    while (current !== null) {
        elements.push(current.data);
        current = current.next;
    }
    console.log(`LinkedList{${elements.join(',')}}`);

};

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);

linkedlist.print(); 
linkedlist.remove(2);

linkedlist.print(); 
