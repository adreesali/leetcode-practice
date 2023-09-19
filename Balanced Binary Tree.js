

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



//  isBalanced Function:

// Yeh function   ek binary tree ke balance hone ko check karta hai.
// root parameter ke through input binary tree diya jata hai.
// 2. height Function:

// Yeh ek nested function hai jo binary tree ke height (ya depth) ko calculate karta hai.
// Agar root null hai, toh 0 return hota hai.
// Agar root null nahi hai, toh left aur right subtrees ke height mein se maximum ko chun kar 1 add kiya jata hai.
// 3. isBalanced Function ka Kaam 
// Agar input tree null hai, toh yeh function true return karega kyunki null tree balance hota hai.
// 4. Tree ke Heights ka Calculation
// leftH mein left subtree ki height store ki jati hai.
// rightH mein right subtree ki height store ki jati hai.
// 5. Balance Check
// Math.abs(leftH - rightH) <= 1 se check kiya jata hai ke left aur right subtrees ke heights ka difference 1 se zyada nahi hai.
// isBalanced(root.left) == true aur isBalanced(root.right) == true se left aur right subtrees ko bhi check kiya jata hai, yani ke woh bhi balanced hain ya nahi.
// Code Ka Use:

// Yeh code binary trees ke balance hone ko check karne ke liye istemal hota hai. Agar binary tree balance hai to true return hota hai, otherwise false.
// Is code ko use karke aap dekh sakte hain ke kisi tree mein left aur right subtrees ka height difference 1 se zyada hai ya nahi.
// Future Use Cases:

// Is code ka istemal future mein kisi bhi application mein kiya ja sakta hai jahan par binary trees ke balance hone ki zarurat hoti hai. For example:
// Binary search trees (BSTs) ke balance ko maintain karne ke liye.
// Decision trees ke analysis mein.
// Data structure ke design mein, jaise ke AVL trees ya Red-Black trees.
// Algorithms mein, jaise ke binary tree traversal.
// Competitive programming challenges mein.
//  i think apko understand hua hoga
