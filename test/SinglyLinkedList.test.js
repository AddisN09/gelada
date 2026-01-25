import{DS} from '../src/index.js';
describe('Test on singlyLinkedList data structure',()=>{
    let list;
    beforeEach(()=>{
        list=new DS.SinglyLinkedList();
    });
    test('The list must start empty',()=>{
        expect(list.isEmpty).toBeTruthy();
        expect(list.size).toBe(0);
    });
    test('size will return the length of the list',()=>{
        expect(list.size).toBe(0);
        list.append(100);
        expect(list.size).toBe(1);
        list.append(200);
        expect(list.size).toBe(2);
        list.append(300);
        expect(list.size).toBe(3);
    })
    test('toArray return array with list data',()=>{
           list.append(100);
        list.append(200);
        list.append(300);
        expect(list.toArray()).toEqual([100,200,300]);
    })
    test('append add new node at the end of the list',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        expect(list.toArray()).toEqual([100,200,300]);
    });
    test('prepend add new node at the start of the list',()=>{
        list.prepend(100);
        list.prepend(200);
        list.prepend(300);
        expect(list.toArray()).toEqual([300,200,100]);
    });
    test('insertAt add a new node any where in the list',()=>{
        list.append(100);
        list.append(300);
        list.append(500);
        list.insertAt(200,1);
        list.insertAt(400,3);
        expect(list.toArray()).toEqual([100,200,300,400,500]);
    });
    test('if the index value > list.size or less than 0 it throws',()=>{
        expect(()=>list.insertAt(100,-1)).toThrow();
         list.append(100);
        list.append(200);
        expect(list.size).toBe(2);
        expect(()=>list.insertAt(300,3)).toThrow();
    });
    test('if the index is not whole number it throws',()=>{
        list.insertAt(100,0);
        list.insertAt(200,1);
        expect(()=>list.insertAt(300,'two')).toThrow();
    });
    test('removeStart will delete a node from the start of the list',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        expect(list.size).toBe(3);
        expect(list.removeStart()).toBe(100);
        expect(list.size).toBe(2);
    });
    test('if the list is empty removeStart will throw',()=>{
         list.append(100);
        list.append(200);
        list.append(300);
        expect(list.size).toBe(3);
        expect(list.removeStart()).toBe(100);
        expect(list.size).toBe(2);
        expect(list.removeStart()).toBe(200);
        expect(list.size).toBe(1);
        expect(list.removeStart()).toBe(300);
        expect(list.size).toBe(0);
        expect(list.isEmpty).toBeTruthy();
        expect(()=>list.removeLast()).toThrow();
    });
    test('removeEnd will delete a node from the end of the list',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        expect(list.size).toBe(3);
        expect(list.removeEnd()).toBe(300);
    });
    test('if the list is empty removeEnd will throw',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        expect(list.size).toBe(3);
        expect(list.removeEnd()).toBe(300);
        expect(list.size).toBe(2);
        expect(list.removeEnd()).toBe(200);
        expect(list.size).toBe(1);
        expect(list.removeEnd()).toBe(100);
        expect(list.size).toBe(0);
        expect(list.isEmpty).toBeTruthy();
        expect(()=>list.removeEnd()).toThrow();
    });
    test('removeAt remove a node at specfic position in the list',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        list.append(400);
        list.append(500);
        expect(list.size).toBe(5);
        expect(list.removeAt(2)).toBe(300);
         expect(list.size).toBe(4);
         expect(list.removeAt(3)).toBe(500);
         expect(list.size).toBe(3);
          expect(list.removeAt(0)).toBe(100);
         expect(list.size).toBe(2);
    });
    test('removeAt will throw if the list is empty',()=>{
           list.insertAt(100,0);
           expect(list.size).toBe(1);
           expect(list.removeAt(0)).toBe(100);
           expect(list.size).toBe(0);
           expect(list.isEmpty).toBeTruthy();
           expect(()=>list.removeAt(0)).toThrow();
    });
    test('removeAt will throw if the input index is not a number',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        list.append(400);
        list.append(500);
        expect(()=>list.removeAt('three')).toThrow();
        expect(()=>list.removeAt(true)).toThrow();
    });
    test('removeAt will throw if the index < 0 and index >=list.size',()=>{
         list.append(100);
        list.append(200);
        list.append(300);
        list.append(400);
        list.append(500);
        expect(list.size).toBe(5);
        expect(()=>list.removeAt(5)).toThrow();
        expect(()=>list.removeAt(6)).toThrow();
        expect(()=>list.removeAt(-1)).toThrow();
        expect(()=>list.removeAt(-2)).toThrow();
    });
    test('removeValue will remove a node with the first match of value',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        list.append(400);
        list.append(200);
        expect(list.toArray()).toEqual([100,200,300,400,200]);
        expect(list.size).toBe(5);
        expect(list.removeValue(200)).toBe(200);
         expect(list.toArray()).toEqual([100,300,400,200]);
        expect(list.size).toBe(4);
    });
    test('if the list is empty removeValue will throw',()=>{
        list.append(100);
        list.append(200);
        expect(list.size).toBe(2);
        list.removeValue(200);
        expect(list.size).toBe(1);
        list.removeValue(100);
        expect(list.size).toBe(0);
        expect(list.isEmpty).toBeTruthy();
        expect(()=>list.removeValue(200)).toThrow();
    });
    test('find return the first match of a value in the list',()=>{
        list.append(100);
        list.append(200);
        list.append(300);
        list.append(400);
        list.append(500);
        expect(list.size).toBe(5);
        expect(list.find(400)).toBe(400);
        expect(list.size).toBe(5);
        expect(list.find(200)).toBe(200);
        expect(list.size).toBe(5);
    });
    test('if the list is empty find will return undefind',()=>{
        list.append(100);
        list.append(200);
        expect(list.removeStart()).toBe(100);
        expect(list.removeStart()).toBe(200);
        expect(list.find(200)).toBeUndefined();
    });
    test('sort will arrange the list in acending order and return the list',()=>{
        list.append(200);
        list.append(500);
        list.append(100);
        list.append(600);
        list.append(300);
        list.prepend(400);
        list.prepend(700);
        expect(list.size).toBe(7);
        expect(list.toArray()).toEqual([700,400,200,500,100,600,300]);
        let newList=list.sort();
        expect(newList.toArray()).toEqual([100,200,300,400,500,600,700]);
        expect(list.size).toBe(7);
    });
    test('travers will expect callback function',()=>{
        expect(()=>list.travers()).toThrow();
        expect(()=>list.travers('function')).toThrow();
    });
    test('travers execute the callback function by iterating over each node of the list',()=>{
         list.append(100);
        list.append(200);
        list.append(300);
        let stringStore='';
        list.traverse(value=>{
           stringStore+=`${value}-->`;
        })
        expect(stringStore).toBe(`100-->200-->300-->`);
    });
})