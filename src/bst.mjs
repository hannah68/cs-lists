/* 
Implementation of a binary search tree (BST)
*/ 

import { queue } from './queue.mjs'

class Node {

    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export const bst = () => {
    
    let root = null;

    function insertNode(node, newNode) {

        if (newNode.data < node.data) {

          if (!node.left) {
            
            node.left = newNode;

          } else {

            insertNode(node.left, newNode);
          }   
                
        } else {

          if (!node.right) {

            node.right = newNode;

          } else {
  
            insertNode(node.right, newNode);
          }
        }
    }

    function removeNode(node, data) {
            
        if (!node) {
          
          return null;

        } else if (data < node.data) {

          node.left = removeNode(node.left, data);
          return node;

        } else if (data > node.data) {

          node.right = removeNode(node.right, data);
          return node;

        } else {

          // deleting node with no children
          if (!node.left && !node.right) {
            return null;
          }
  
          // deleting node with one child
          if (!node.left) {

            node = node.right;
            return node;

          } else if (!node.right) {
            
            node = node.left;
            return node;
          }
  
          // Deleting node with two children
          const temp = findMinimum(node.right);
          node.data = temp.data;    
          node.right = removeNode(node.right, node.data);
          return node;
        }    
    }
      
    function add(data) {

        const newNode = new Node(data);  

        if (!root) {

          root = newNode;

        } else {

            insertNode(root, newNode);
        }
    }  

    function remove( data) {

      root = removeNode(root, data);
    }

    /*
    Conceptual descriptions of the two functions below
    */
    function findMinimum(node) {}
    function findMaximum(node) {}
    
    function getRoot() {
      return root;
    }    
  
    function search(node, data) {
      
        if (!node) {

          return null;

        } else if (data < node.data) {

          return search(node.left, data);

        } else if (data > node.data) {

            return search(node.right, data);

        } else {

            return node;
        }
    }

    function getSize(node) {

      if (node) {

        return 1 + getSize(node.left) + getSize(node.right);
      }
      return 0;
    }

    //Breadth first traversal
    function getBreadthFirst (node) {

      const myQueue = queue();
      myQueue.enQueue(node);
      const values = [];

      while (myQueue.getSize()) {
        const currentNode = myQueue.deQueue();
        values.push(currentNode.data);
        if (currentNode.left) {
          myQueue.enQueue(currentNode.left)
        }
        if (currentNode.right) {
          myQueue.enQueue(currentNode.right)
        }
      }

      return values;
    }
    
    // Inorder traversal (Left-Root-Right)
    function getOrdered(node, thisArray = []) {
      
      if (node) {

        getOrdered(node.left, thisArray);
        thisArray.push(node.data);
        getOrdered(node.right, thisArray);

      } 

      return thisArray;
    }

    //Postorder traversal (Left-Right-Root)
    function getPostOrdered(node, thisArray = []) {
      
      if (node) {

        getPostOrdered(node.left, thisArray);
        getPostOrdered(node.right, thisArray);
        thisArray.push(node.data);
      } 

      return thisArray;
    }

    // Preorder traversal (Root-Left-Right)
    function getPreOrdered(node, thisArray = []) {
      
      if (node) {

        thisArray.push(node.data);
        getPreOrdered(node.left, thisArray);
        getPreOrdered(node.right, thisArray);
      } 

      return thisArray;
    }

    return { 
      add, 
      remove, 
      getRoot, 
      findMinimum, 
      findMaximum, 
      search, 
      getSize, 
      getBreadthFirst,
      getOrdered, 
      getPostOrdered, 
      getPreOrdered
    }
  }