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
    } else if (head === tail){
      head.next = newNode;
    } else if (tail.next === null){
      tail.next = newNode;
    }
    return newNode;
  }

function get(num){
      let curNode = head;
      for (let i = 0; i < num; i++) {
        if(curNode.next === null){
          return false;
        }
        else{
          curNode = curNode.next;
        }
      }
        return curNode;
      }

/*  function get(num){
    let curNode = head;
    if (num === 0){
      return curNode;
    } else {
      for (curNode=0; curNode<=num; curNode++){
        return curNode;
      }
    }
  }*/

  function remove(kill){
    kill = get();
    
    let prevNode.next = kill.next;
  }

/*  function _getLength(){
    let length = 0;
    let node = head;
    while (node.next !== null){
      length++;
      node = node.next; 
    }
    return length;
  }*/

  function insert(value, index){
/*    if (index < 0, _getLength()){
      return false;
    }
    let newNode = {
      value: value,
      next: null,
    };
    let nextNode = getHead;
    let prevNode = get(index-1); 
    let nextNode = prevNode.next;
    // curNode (the val being added) becomes prevNode's next
    let curNode = {
      value: value,
      next: null, };
    prevNode.next = curNode;
    curNode.next = nextNode;*/
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert,
  };
}