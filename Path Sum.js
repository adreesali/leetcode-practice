
var hasPathSum = function (root, targetSum) {
    if (!root)
        return false
    if (root.val === targetSum && (!root.left && !root.right))
        return true

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)

};


// 2nd


var hasPathSum = function (root, targetSum) {
    if (!root)
        return false
    if (root.val === targetSum && (!root.left && !root.right))
        return true

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)

};