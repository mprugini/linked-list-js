class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }  
    
    clear() {
        this.head = null;
    }

    getLastNode() {
        let lastNode = this.head;
        if(lastNode) {
            while(lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode
    }

    getFirstNode() {
        return this.head;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
    }

    insertNodeAtStart(data) {
        // create new node
        let newNode = new ListNode(data);

        // let new node point to head
        newNode.next = this.head;

        // make new node a head
        this.head = newNode;
        return this.head;
    }

    insertNodeAtEnd(data) {
        // create new node
        let newNode = new ListNode(data);
        
        // if list is empty make new node a head
        if(!this.head) {
            this.head = newNode;
            return this.head;
        }

        // otherwise loop until you find last node
        // and make it point to new node
        let tail = this.head;
        while(tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    }
}

let list = new LinkedList()
console.log(list);
list.insertNodeAtStart(10);
list.insertNodeAtStart(10);
console.log(list);