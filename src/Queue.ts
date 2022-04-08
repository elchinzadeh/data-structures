class Queue {
    private list: Array<any>;
    capacity: number;

    constructor(capacity: number = 1000) {
        this.list = new Array();
        this.capacity = capacity;
    }

    public enqueue(value: any) {
        if (this.isFull()) {
            console.error("Queue is full");
            return;
        }

        this.list.push(value);
    }

    public dequeue() {
        if (this.isEmpty()) {
            console.error("Queue is empty");
            return;
        }

        const shifted = this.list.shift();
        return shifted;
    }

    public getFront() {
        if (this.isEmpty()) {
            console.error("Queue is empty");
            return;
        }
        return this.list[0];
    }

    public getRear() {
        if (this.isEmpty()) {
            console.error("Queue is empty");
            return;
        }
        return this.list[this.list.length - 1];
    }

    public isEmpty() {
        return this.list.length === 0;
    }

    public isFull() {
        return this.list.length === this.capacity;
    }
}

export default Queue;
