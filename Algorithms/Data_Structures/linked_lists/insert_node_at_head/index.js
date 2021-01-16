function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    if(head == null){
      head = newNode
    } else {
        newNode.next = head
        head = newNode
    }
    return head
  }




// Creates a new LinkedList Node 
  class SinglyLinkedListNode {
      constructor(nodeData){
          this.data = nodeData;
          this.next = null;
      }
  }

