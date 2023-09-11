var climbStairs = function(n) {
    let memo = {};
    const rec = (n)=>{
     
    if(n===1 || n===2){
        return n;
    }
    else if(memo[n]){
        return memo[n];
    }else{
        memo[n] = rec(n-1) + rec(n-2);
        return memo[n];
    }
    }
    const ans = rec(n);
     return ans;

    };



  // 2nd 



  var climbStairs = function(n) {
    let memo = {};
    const rec = (n)=>{
     
    if(n===1 || n===2){
        return n;
    }
    else if(memo[n]){
        return memo[n];
    }else{
        memo[n] = rec(n-1) + rec(n-2);
        return memo[n];
    }
    }
    const ans = rec(n);
     return ans;

    };


// 3rd 






var climbStairs = function(n) {
    let memo = {};
    const rec = (n)=>{
     
    if(n===1 || n===2){
        return n;
    }
    else if(memo[n]){
        return memo[n];
    }else{
        memo[n] = rec(n-1) + rec(n-2);
        return memo[n];
    }
    }
    const ans = rec(n);
     return ans;

    };


