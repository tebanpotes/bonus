
const treeNode = require('./node');
const prompt = require('prompt-sync')();


// let newBT = new treeNode(20);

// let leftChild = new treeNode(15);


// let rightChild = new treeNode(25);

// newBT.leftChild = leftChild;

// newBT.rightChild = rightChild;

// newBT.leftChild.leftChild = new treeNode(13);
// newBT.leftChild.rightChild = new treeNode(18);

// newBT.rightChild.rightChild = new treeNode(30);

//Recorrido preorder: root , left right


// function preOrder(rootNode){
//     if(!rootNode){
//         return;
//     }
//     console.log(rootNode.data);
//     preOrder(rootNode.leftChild);
//     preOrder(rootNode.rightChild);
// }

// console.log("Recorrido pre-order:", preOrder(newBT));

// //Recorrido en orden: left, root, right

// function inOrder(rootNode){
//     if(!rootNode){
//         return;
//     }
//     inOrder(rootNode.leftChild);
//     console.log(rootNode.data);
//     inOrder(rootNode.rightChild);
// }

// console.log("Recorrido in Order: ", inOrder(newBT));


// //Recorrido post order: left, right, root

// function postOrder(rootNode){
//     if(!rootNode){
//         return;
//     }

//     postOrder(rootNode.leftChild);
//     postOrder(rootNode.rightChild);
//     console.log(rootNode.data);
// }

// console.log("Recorrido in post order: ", postOrder(newBT));


var root= null;

    function printLevelOrder() {
        var h = height(root);
        var i;
        for (i = 1; i <= h; i++)
            printCurrentLevel(root, i);
    }


    function height(root) {
        if (root == null)
            return 0;
        else {
            var lheight = height(root.left);
            var rheight = height(root.right);
 
  
            if (lheight > rheight)
                return (lheight + 1);
            else
                return (rheight + 1);
        }
    }


    function printCurrentLevel(root , level) {
        if (root == null)
            return;
        if (level == 1)
            console.log(root.data + " ");
        else if (level > 1) {
            printCurrentLevel(root.left, level - 1);
            printCurrentLevel(root.right, level - 1);
        }
    }



    root = new treeNode(1);
        root.left = new treeNode(2);
        root.right = new treeNode(3);
        root.left.left = new treeNode(4);

    printLevelOrder();