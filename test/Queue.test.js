import {DS} from '../src/index.js';
describe('Tests on Queue data structure',()=>{
    let queue;
    beforeEach(()=>{
        queue=new DS.Queue();
    });
    test('The Queue must start empty',()=>{
        expect(queue.isEmpty).toBeTruthy();
        expect(queue.size).toBe(0);
    });
    test('enqueue must add items to queue at rear',()=>{
        queue.enqueue(100);
        queue.enqueue(200);
        queue.enqueue(300);
        expect(queue.size).toBe(3);
    });
    test('Dequeue throws error when the queue is empty',()=>{
        expect(queue.isEmpty).toBeTruthy();
        expect(()=>queue.dequeue()).toThrow(`Operation not permitted on empty Queue`);
    });
    test('Dequeue must remove items at front',()=>{
        queue.enqueue(100);
        queue.enqueue(200);
        expect(queue.size).toBe(2);
        expect(queue.dequeue()).toBe(100);
        expect(queue.size).toBe(1);
         expect(queue.dequeue()).toBe(200);
        expect(queue.size).toBe(0);
    });
    test('Peek throws when the queue is empty',()=>{
        expect(queue.isEmpty).toBeTruthy();
        expect(()=>queue.peek()).toThrow(`Operation not permitted on empty Queue`);
    });
    test('peek return the front item without removing the item',()=>{
         queue.enqueue(100);
        queue.enqueue(200);
        expect(queue.size).toBe(2);
        expect(queue.peek()).toBe(100);
        expect(queue.size).toBe(2);
         expect(queue.peek()).toBe(100);
        expect(queue.size).toBe(2);
    });
    test('toArray return array with the queue items',()=>{
        expect(queue.toArray()).toEqual([]);
        queue.enqueue(100);
        queue.enqueue(200);
        expect(queue.toArray()).toEqual([100,200]);
    });
    test('size return the number of items in the queue',()=>{
        expect(queue.size).toBe(0);
        queue.enqueue(100);
        expect(queue.size).toBe(1);
        queue.enqueue(200);
        expect(queue.size).toBe(2);
    });
    test('clear remove all the queue items',()=>{
        queue.enqueue(100);
        queue.enqueue(200);
        queue.enqueue(300);
        expect(queue.size).toBe(3);
        queue.clear();
        expect(queue.size).toBe(0);
    })
});