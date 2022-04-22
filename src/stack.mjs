/* 
Implementation of a Stack as a linked list(LIFO)
*/
export const stack = () => {

    let size = 0;
    let head = null;
    /* 
    itereate through the list and then add the node to the last node in the list
    */
    function push(data) {
        let newNode = {
            data : data, 
            next : head
        };
        head = newNode;
        size++;
    }

    /* 
    Iterate through the list and grab the last item and remove it from list
    */
    function pop() {
        const oldHead = head;
        head = oldHead.next;
        size--;
        return oldHead.data;
    }

    /* 
    Conceptual descriptions of each of the next 2 functions
    */
    function top() {
        return head.data;
    }
    function getSize() {
        return size;
    }

    /* 
    Conceptual description
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

    return { push, pop, top, getSize, toArray };
}


stack()