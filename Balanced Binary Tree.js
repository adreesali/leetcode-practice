var isBalanced = function(root) {
    // yeh function line is balance ko declare krti hai keh jo aik binary tree ko input laita hai oor check krta hai ke tfree balanced ha ya nhi hai 
    function height(root) {
        // function "height" declare karta ha jo ke vales ki height ko nikalta ha
        if(root == null) return 0
        // Yeh dekhta hai ke agar di gai root khali (null) hai to uski height zero hoti ha
        
        return 1+Math.max(height(root.left), height(root.right));
        //  yeh element ki height nikalta hai, ismai node ke left aur right subtrees mein se jo zyada height wala hai, woh select kia jata hai aur ek unit (1) add kiya jata hai
    }
    if(root == null)
        return true;
    // yeh dekhta ha ke agar di gai value khali (null) hai to usko  balanced samjha jata ha

    
    let leftH = height(root.left);
    // Yeh  value ke left subtree ki height ko "leftH" mein rakhta ha
    let rightH = height(root.right);
    // Yeh  value ke right subtree ki height ko "rightH" mein store krta ha
    
    return Math.abs(leftH - rightH) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true;
    //  Yeh dekhta hai ke current root ke left aur right subtrees balanced hain aur unki heights mein zyada se zyada aik unit ka difference ha ya nhi Agar yeh condition puri hoti hai, to current value ko bhi balanced maan liya jata hai
};



// 2nd


var isBalanced = function(root) {
    
    function height(root) {
        
        if(root == null) return 0
        
        return 1+Math.max(height(root.left), height(root.right));
    }
    
    if(root == null) 
        return true;
    
    let leftH = height(root.left);
    let rightH = height(root.right);
    
    return Math.abs(leftH - rightH) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true;
};
