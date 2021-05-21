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
        while(node) {
            if(counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null
    }

    insertAt(data, index) {
        // if list is empty
        if(!this.head) {
            this.head = new ListNode(data);
            return;
        }

        // if new node needs to be inserted at the front of list
        if(index === 0) {
            this.head = new ListNode(data, this.head);
        }

        const previous = this.getAt(index - 1);
        let newNode = new ListNode(data);
        newNode.next = previous.next;
        previous.next = newNode;
        return this.head;
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
list.insertNodeAtEnd(20);
list.insertNodeAtEnd(30);
list.insertNodeAtEnd(40);
console.log(list);