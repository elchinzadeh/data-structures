class LinkedListNode {
    public data: any;
    public next: LinkedListNode | null;

    constructor(
        data: LinkedListNode["data"],
        next: LinkedListNode["next"] = null
    ) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    private head: LinkedListNode | null;
    private tail: LinkedListNode | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public insertFirst(data: LinkedListNode["data"]) {
        const newHead = new LinkedListNode(data, this.head);

        if (this.head === null) {
            this.tail = newHead;
        }

        this.head = newHead;
        this.size++;
    }

    public insertLast(data: LinkedListNode["data"]) {
        const newTail = new LinkedListNode(data);

        if (this.tail) {
            this.tail.next = newTail;
        } else {
            this.head = newTail;
        }
        this.tail = newTail;
        this.size++;
    }

    public insertAtIndex(index: number, data: LinkedListNode["data"]) {
        if (index < 0 && index > this.size) {
            return;
        }

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        if (index === this.size) {
            this.insertLast(data);
            return;
        }

        let leftNode;
        let rightNode;
        let current = this.head;

        for (let step = 0; step < index; step++) {
            if (step === index - 1) {
                leftNode = current;
                rightNode = current?.next;
            }

            current = current?.next || null;
        }

        const newNode = new LinkedListNode(data, rightNode);
        if (leftNode) leftNode.next = newNode;

        this.size++;
    }

    public getAt(index: number) {
        if (index < 0 || index >= this.size) {
            return;
        }

        let step = 0;
        let current = this.head;

        while (step < index) {
            current = current?.next || null;
            step++;
        }

        return current;
    }

    public deleteAt(index: number) {
        if (index === 0) {
            this.head = this.head?.next || null;
            this.size--;
            return;
        }

        const leftNode = this.getAt(index - 1);
        if (leftNode) {
            leftNode.next = leftNode.next?.next || null;

            if (index === this.size - 1) {
                this.tail = leftNode.next;
            }

            this.size--;
        }
    }

    public clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public getSize() {
        return this.size;
    }

    public print() {
        let current = this.head;
        const list = [];

        while (current) {
            list.push(current.data);
            current = current.next;
        }

        return list;
    }
}

export default LinkedList;
