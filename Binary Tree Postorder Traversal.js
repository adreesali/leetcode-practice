var postorderTraversal = function(root) {
    // empty tree case:
    if (root === null) return res;
    let stack = [];
    
    stack.push(root);
    while (stack.length !== 0) { 
        let cur = stack.pop();
        res.push(cur.val); 
        if (cur.left) stack.push(cur.left);
        if (cur.right) stack.push(cur.right);
    }
    
    return res.reverse();
};