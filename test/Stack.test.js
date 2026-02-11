import{DS} from '../src/index.js';
describe('Test on Stack data structure',()=>{
    let stack;
    beforeEach(()=>{
        stack=new DS.Stack();
    });
    test('The stack must start empty',()=>{
        expect(stack.isEmpty).toBeTruthy();
        expect(stack.size).toBe(0);
    });
    test('push add new item at the top',()=>{
        stack.push(100);
        stack.push(200);
        stack.push(300);
        expect(stack.size).toBe(3);
    });
    test('pop throws for empty stack',()=>{
        expect(stack.isEmpty).toBeTruthy();
        expect(()=>stack.pop()).toThrow(`Operation not permitted on empty Stack`);
    });
    test('pop removes elements from the top',()=>{
        stack.push(100);
        stack.push(200);
        expect(stack.pop()).toBe(200);
        expect(stack.pop()).toBe(100);
    });
     test('peek throws for empty stack',()=>{
        expect(stack.isEmpty).toBeTruthy();
        expect(()=>stack.peek()).toThrow(`Operation not permitted on empty Stack`);
    });
    test('peek return the top without rmoving the item',()=>{
          stack.push(100);
        stack.push(200);
        expect(stack.size).toBe(2);
        expect(stack.peek()).toBe(200);
        expect(stack.peek()).toBe(200);
           expect(stack.size).toBe(2);
    });
    test('size return the number of items in the stack',()=>{
        stack.push(100);
        expect(stack.size).toBe(1);
         stack.push(200);
        expect(stack.size).toBe(2);
    });
    test('clear remove all item of stack and make it empty',()=>{
        stack.push(100);
        stack.push(200);
        stack.push(300);
        expect(stack.size).toBe(3);
        stack.clear();
        expect(stack.size).toBe(0);
    });
    test('toArray return an array with the stack items',()=>{
        expect(stack.toArray()).toEqual([]);
        stack.push(100);
        stack.push(200);
        stack.push(300);        
         expect(stack.toArray()).toEqual([100,200,300]);                  
    });
});