class Node {
  constructor(value, left=null, right=null) {
    // add your Node class code
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [1, 4, 7]
function oneToSeven() {
  // manually create the BST
  // then return the root node
  let one = new Node(1);
  let seven = new Node(7);
  let four = new Node(4, one, seven);

  return four;
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  let ten = new Node(10);
  let fortyFive = new Node(45);
  let fifty = new Node(50);

  let forty = new Node(40, ten, fortyFive);
  let fortySix = new Node(46, forty, fifty);

  return fortySix;
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  let negTwenty = new Node(-20);
  let negNineteen = new Node(-19, negTwenty);
  let negFifteen = new Node(-15);
  let negSeventeen = new Node(-17, negNineteen, negFifteen);

  let one = new Node(1);
  let ten = new Node(10);
  let two = new Node(2, one, ten);

  let zero = new Node(0, negSeventeen, two);
  return zero;




}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive
};

// Please add your pseudocode to this file
// And a written explanation of your solution
