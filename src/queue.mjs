/* 
Implementation of a Queue as a double linked list
*/

export const queue = () => {

    let size = 0;
    let head, rear = null;

    /*
    Conceptual description:enqueue, which adds an element to the end (tail) of the collection

    */
    function enQueue(data) {
        let newNode = {
            data : data, 
            next : null, 
            previous: rear
        };

        if (!head) {
            head = newNode;
            rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }

        size++;
    }

    /*
    Conceptual description:dequeue, which removes an element from the front (head) of the collection
    */
    function deQueue() {
        const thisHead = head;
        const nextHead = head.next;
        head = nextHead;
        size--;
        return thisHead.data;
    }

    /* 
    Conceptual descriptions of each of the next 3 functions
    */
    function front() {
        return head.data;
    }
    function back() {
        return rear.data;
    }
    function getSize() {
        return size;
    }

    /*
    Conceptual description:
    */
    function toArray() {
        const list = [];
        let current = head;
        while (current) {
            list.push(current.data);
            current = current.next;
        }
        
        return list;
    }

    return { enQueue, deQueue, front, back, getSize, toArray };
}