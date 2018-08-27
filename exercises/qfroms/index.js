// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

// const Stack = require('../stack');

class Stack {
    constructor() {
        this.data = [];
    };

    push (record) {
        this.data.push(record);
    };

    pop() {
        return this.data.pop();
    };

    peek() {
        return this.data[this.data.length - 1];
    }
}

// Queue is first in first out (FIFO)
// Stack is first in last out (FILO)
class Queue {
    constructor() {
        this.first = [];
        this.second = [];
    };

    add (record){
        this.first.push(record);
    }

    remove() {
        // use peek function to check if there are still values in the first stack
        while (this.first.peek()){
            // push each thing poped from the first stack and push to the second
            this.second.push(this.first.pop());
        };

        // Put everything back to the first stack
        const record = this.second.pop();
        while ( this.second.peek()){
            this.first.push(this.second.pop())
        };

        return record
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }

        return record;
    }
}

    const q = new Queue();
    q.add(1);
    q.add(2);
    q.peek();
    q.remove();
    q.remove();

module.exports = Queue;
