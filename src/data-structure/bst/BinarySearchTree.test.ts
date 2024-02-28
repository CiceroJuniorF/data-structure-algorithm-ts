import BinarySearchTree from "./BinarySearchTree";
import NodeNumber from "./NodeNumber";

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
    });
});