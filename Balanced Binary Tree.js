

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

// height function: Yeh function ek binary tree ke height ko calculate karta hai. Agar input root null hota hai, toh iska height 0 hota hai. Agar root null nahi hai, 
//toh function recursive tarike se left aur right subtrees ke maximum height ko lekar usme 1 add karke return karta hai.

// isBalanced function: Yeh function binary tree ke balance hone ko check karta hai.
// Sabse pehle, function check karta hai ki agar root null hai toh yeh tree balanced hai, kyun ki null tree ka height 0 hota hai, aur height difference 0 bhi hota hai, toh true return kiya jata hai.
// Agar root null nahi hai, toh function root ke left aur right subtrees ke heights ko calculate karta hai.
// Fir, function check karta hai ki left subtree aur right subtree ke heights ka absolute difference 1 se kam hai ya nahi (Math.abs(leftH - rightH) <= 1).
// Uske baad, function recursive tarike se left subtree aur right subtree ke liye isBalanced function ko call karta hai. Yani, function left subtree aur right subtree ke liye bhi yehi checks lagata hai ki woh balanced hai ya nahi.
// Agar dono subtrees balanced hai, toh true return kiya jata hai, nahi toh false return kiya jata hai.
// Overall, yeh code binary tree ke har node ke liye balance hone ko check karta hai. Agar har node ke liye balance check hota hai aur tree bhi balanced hai, toh true return hota hai, nahi toh false return hota hai.
