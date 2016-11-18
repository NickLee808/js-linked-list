/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;

  function getHead(){
    return head;
  }

  function getTail(){
    let curNode = head;
    while(curNode !== null){
      if(curNode.next !== null){
        curNode = curNode.next;
      } else {
        return curNode;
      }
    }
    console.log("this is the getTail", curNode);
    return curNode;
  }

  function add(newValue){
    let tail = getTail();
    let newNode = {
      value: newValue,
      next: null,
    };
    if (head === null){
      head = newNode;
    }else if(head === tail){
      head.next = newNode;
    }else if(tail.next === null){
      tail.next = newNode;
    }

/*
    if (gotTail !== null){
      if (gotTail.next === null){
        gotTail.next === }
    }*/
    console.log("this is the head", head);
    console.log("this is the tail", newNode);
    return newNode;
  }

  function remove(){
  }

  function get(){
  }

  function insert(){
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  };
}

var ll = linkedListGenerator();

var head = ll.getHead();

//ll.add("cat");