import BinarySearchTree from "./BinarySearchTree";
import NodeNumber from "./NodeNumber";
import { Traverse } from "./constants/Traverse";

describe("BinarySearchTree", ()=> {
    describe("BinarySearchTreeNumber", ()=> {
        test("should be create a BST with Nodes number", ()=>{
            const root = NodeNumber.create(1);
            const bst = new BinarySearchTree(root);
            expect(bst.root).toBe(root);
        });

        test("should add a new node to the right of the root", ()=>{
            const root = NodeNumber.create(1);
            const bst = new BinarySearchTree(root);
            bst.insert(2);
            expect(bst.root.right.key).toEqual(2);
        });

        test("should add a new node to the left of the root", ()=>{
            const root = NodeNumber.create(10);
            const bst = new BinarySearchTree(root);
            bst.insert(2);
            expect(bst.root.left.key).toEqual(2);
        });

        test("should add a new node to the right at the second level to the right of the root", ()=>{
            const root = NodeNumber.create(1);
            const bst = new BinarySearchTree(root);
            bst.insert(2);
            bst.insert(3);
            const level_one = bst.root.right;
            const level_two = level_one.right
            expect(level_two.key).toEqual(3);
        });

        test("should add a new node to the left at the second level to the left of the root", ()=>{
            const root = NodeNumber.create(10);
            const bst = new BinarySearchTree(root);
            bst.insert(3);
            bst.insert(2);
            const level_one = bst.root.left;
            const level_two = level_one.left
            expect(level_two.key).toEqual(2);
        });

        test("should return in-order", ()=>{
            const root = NodeNumber.create(10);
            const bst = new BinarySearchTree(root);
            bst.insert(3);
            bst.insert(2);
            bst.insert(5);
            bst.insert(7);
            bst.insert(70);
            bst.insert(71);
            expect(bst.traverse(Traverse.IN_ORDER)).toEqual([2, 3, 5, 7, 10, 70 ,71]);
        });

        test("should return correct tree", ()=>{
            const root = NodeNumber.create(10);
            const bst = new BinarySearchTree(root);
            bst.insert(3);
            bst.insert(2);
            bst.insert(5);
            bst.insert(7);
            bst.insert(70);
            bst.insert(71);
            expect(bst.root.left.key).toEqual(3);
            expect(bst.root.left.left.key).toEqual(2);
            expect(bst.root.left.left.left?.key).toBeUndefined();
            expect(bst.root.left.right.key).toEqual(5);
            expect(bst.root.left.right.right.key).toEqual(7);
            expect(bst.root.right.key).toEqual(70);
            expect(bst.root.right.right.key).toEqual(71);
        });

        test("should return pre-order", ()=>{
            const root = NodeNumber.create(10);
            const bst = new BinarySearchTree(root);
            bst.insert(3);
            bst.insert(2);
            bst.insert(5);
            bst.insert(7);
            bst.insert(70);
            bst.insert(71);
            expect(bst.traverse(Traverse.PRE_ORDER)).toEqual([10, 3, 2, 5, 7, 70, 71]);
        });

        test("should return pos-order", ()=>{
            const root = NodeNumber.create(10);
            const bst = new BinarySearchTree(root);
            bst.insert(3);
            bst.insert(2);
            bst.insert(5);
            bst.insert(7);
            bst.insert(70);
            bst.insert(71);
            expect(bst.traverse(Traverse.POST_ORDER)).toEqual([2, 7, 5, 3, 71 ,70, 10]);
        });


    });
});