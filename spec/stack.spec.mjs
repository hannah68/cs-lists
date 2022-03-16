import { stack } from '../src/stack.mjs'

describe('push', function() {
    it('correctly pushes data', function() {

        const myStack = stack();
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
       
        const thisStack = myStack.toArray();    

        expect(thisStack).toEqual([3, 2, 1]);
    })
})

describe('pop', function() {
    it('correctly pops data', function() {

        const myStack = stack();
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);

        const myData = myStack.pop();   

        expect(myData).toEqual(3);
    })
})

describe('top', function() {
    it('correctly gets top of stack', function() {

        const myStack = stack();
        myStack.push(1);
        myStack.push(2);
        myStack.push(3);
       
        const top = myStack.top();
       
        expect(top).toEqual(3);
    })
})

describe('push stack size', function() {
    it('correctly gets size after pushes', function() {

        const myStack = stack();
        const size = 100;

        for( let i = 1; i <= size; i++ ) {
            myStack.push(i);
        }

        const mySize = myStack.getSize();    
        expect(mySize).toEqual(size);
    })
})

describe('pop stack size', function() {
    it('correctly gets size after pops', function() {

        const myStack = stack();
        const size = 100;

        for( let i = 1; i <= size; i++ ) {
            myStack.push(i);
        }

        for( let i = 1; i <= size / 2; i++ ) {
            myStack.pop();
        }

        const mySize = myStack.getSize();
        expect(mySize).toEqual(size / 2);
    })
})

describe('push array', function() {
    it('correctly gets array after pushes', function() {

        const myStack = stack();
        const size = 10;

        for( let i = 1; i <= size; i++ ) {
            myStack.push(i);
        }

        const thisStack = myStack.toArray();
        expect(thisStack).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    })
})

describe('pop array', function() {
    it('correctly gets array after pops', function() {

        const myStack = stack();
        const size = 10;

        for( let i = 1; i <= size; i++ ) {
            myStack.push(i);
        }

        for( let i = 1; i <= size / 2; i++ ) {
            myStack.pop();
        }

        const thisStack = myStack.toArray();
        expect(thisStack).toEqual([5, 4, 3, 2, 1]);
    })
})
