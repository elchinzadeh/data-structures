class Stack {
    list: Array<any>;
    stackSize: number;
    topIndex: number;

    constructor(size: number = 1000) {
        this.topIndex = -1;
        this.stackSize = size;
        this.list = Array(this.stackSize);
    }

    public push(value: any) {
        if (this.topIndex === this.stackSize - 1) {
            console.error("Stack overflow");
            return;
        }

        this.list[this.topIndex + 1] = value;
        this.topIndex++;
        return true;
    }

    public pop() {
        if (this.topIndex === -1) {
            console.error("Stack underflow");
            return;
        }

        const popped = this.list[this.topIndex];
        this.list[this.topIndex] = undefined;
        this.topIndex--;
        return popped;
    }

    public peek() {
        if (this.topIndex === -1) {
            console.error("Stack underflow");
            return;
        }

        return this.list[this.topIndex];
    }

    public isEmpty() {
        return this.topIndex === -1;
    }

    public print() {
        return Array.from(this.list.slice(0, this.topIndex + 1));
    }
}

export default Stack;
