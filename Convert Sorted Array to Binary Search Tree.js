var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    let mid = Math.floor(nums.length/2);
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0,mid));
    node.right = sortedArrayToBST(nums.slice(mid+1));
    return node;
};

// 2nd


var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    let mid = Math.floor(nums.length/2);
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0,mid));
    node.right = sortedArrayToBST(nums.slice(mid+1));
    return node;
};


// 3rd


var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    let mid = Math.floor(nums.length/2);
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0,mid));
    node.right = sortedArrayToBST(nums.slice(mid+1));
    return node;
};