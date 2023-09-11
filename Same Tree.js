var isSameTree = function(p, q) {
    let output = true;
    const dfs = (tree1, tree2) => {
        if (tree1?.val !== tree2?.val) {
            return output = false;
        }

        if (tree1?.left !== undefined && tree2?.left !== undefined ) {
            dfs(tree1?.left, tree2?.left);
        } else if (!tree1?.left && tree2?.left) {
            return output = false;
        } else if (tree1?.left && !tree2?.left) {
            return output = false;
        }

        if (tree1?.right !== undefined && tree2?.right !== undefined ) {
            dfs(tree1?.right, tree2?.right);
        } else if (!tree1?.right && tree2?.right) {
            return output = false;
        } else if (tree1?.right && !tree2?.right) {
            return output = false;
        }
    }

    dfs(p, q);

    return output;
};


// 2nd



var isSameTree = function(p, q) {
    let output = true;
    const dfs = (tree1, tree2) => {
        if (tree1?.val !== tree2?.val) {
            return output = false;
        }

        if (tree1?.left !== undefined && tree2?.left !== undefined ) {
            dfs(tree1?.left, tree2?.left);
        } else if (!tree1?.left && tree2?.left) {
            return output = false;
        } else if (tree1?.left && !tree2?.left) {
            return output = false;
        }

        if (tree1?.right !== undefined && tree2?.right !== undefined ) {
            dfs(tree1?.right, tree2?.right);
        } else if (!tree1?.right && tree2?.right) {
            return output = false;
        } else if (tree1?.right && !tree2?.right) {
            return output = false;
        }
    }

    dfs(p, q);

    return output;
};



// 3rd





var isSameTree = function(p, q) {
    let output = true;
    const dfs = (tree1, tree2) => {
        if (tree1?.val !== tree2?.val) {
            return output = false;
        }

        if (tree1?.left !== undefined && tree2?.left !== undefined ) {
            dfs(tree1?.left, tree2?.left);
        } else if (!tree1?.left && tree2?.left) {
            return output = false;
        } else if (tree1?.left && !tree2?.left) {
            return output = false;
        }

        if (tree1?.right !== undefined && tree2?.right !== undefined ) {
            dfs(tree1?.right, tree2?.right);
        } else if (!tree1?.right && tree2?.right) {
            return output = false;
        } else if (tree1?.right && !tree2?.right) {
            return output = false;
        }
    }

    dfs(p, q);

    return output;
};