import { queue } from '../src/queue.mjs'

describe('enqueues', function() {
    it('correctly enqueues data', function() {

        const myQueue = queue();
        myQueue.enQueue(1);
        myQueue.enQueue(2);
        myQueue.enQueue(3);
       
        const myBack = myQueue.back();
       
        expect(myBack).toEqual(3);
    })
})

describe('dequeues', function() {
    it('correctly dequeues data', function() {

        const myQueue = queue();
        myQueue.enQueue(1);
        myQueue.enQueue(2);
        myQueue.enQueue(3);
        const myData = myQueue.deQueue();
        
        expect(myData).toEqual(1);
    })
})

describe('enqueue size', function() {
    it('correctly gets size after enqueues', function() {

        const myQueue = queue();
        const size = 100;

        for( let i = 1; i <= size; i++ ) {
            myQueue.enQueue(i);
        }

        const mySize = myQueue.getSize();    
        expect(mySize).toEqual(size);
    })
})

describe('dequeue size', function() {
    it('correctly gets size after dequeues', function() {

        const myQueue = queue();
        const size = 100;

        for( let i = 1; i <= size; i++ ) {
            myQueue.enQueue(i);
        }

        for( let i = 1; i <= size / 2; i++ ) {
            myQueue.deQueue();
        }

        const mySize = myQueue.getSize();
        expect(mySize).toEqual(size / 2);
    })
})

describe('enqueue array', function() {
    it('correctly gets array after enqueue', function() {

        const myQueue = queue();
        const size = 10;

        for( let i = 1; i <= size; i++ ) {
            myQueue.enQueue(i);
        }

        const thisQueue = myQueue.toArray();
        expect(thisQueue).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    })
})

describe('dequeue array', function() {
    it('correctly gets array after dequeue', function() {

        const myQueue = queue();
        const size = 10;

        for( let i = 1; i <= size; i++ ) {
            myQueue.enQueue(i);
        }

        for( let i = 1; i <= size / 2; i++ ) {
            myQueue.deQueue();
        }

        const thisQueue = myQueue.toArray();
        expect(thisQueue).toEqual([6, 7, 8, 9, 10]);
    })
})