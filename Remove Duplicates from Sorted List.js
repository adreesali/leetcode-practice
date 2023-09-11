var deleteDuplicates = function(head) {

    if(head == null)
    return null;

   let curr = head;
    while(curr.next != null){
    
        if(curr.val == curr.next.val){
          let next_next = curr.next.next;
          let nodeToDelete = curr.next;
          delete(nodeToDelete);
          curr.next = next_next;
        }
        else
        { 
          curr = curr.next;
        }
       
    }
return head;
};


// 2nd


var deleteDuplicates = function(head) {

    if(head == null)
    return null;

   let curr = head;
    while(curr.next != null){
    
        if(curr.val == curr.next.val){
          let next_next = curr.next.next;
          let nodeToDelete = curr.next;
          delete(nodeToDelete);
          curr.next = next_next;
        }
        else
        { 
          curr = curr.next;
        }
       
    }
return head;
};


// 3rd



var deleteDuplicates = function(head) {

    if(head == null)
    return null;

   let curr = head;
    while(curr.next != null){
    
        if(curr.val == curr.next.val){
          let next_next = curr.next.next;
          let nodeToDelete = curr.next;
          delete(nodeToDelete);
          curr.next = next_next;
        }
        else
        { 
          curr = curr.next;
        }
       
    }
return head;
};