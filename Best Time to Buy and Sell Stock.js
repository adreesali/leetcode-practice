const maxProfit = (prices) => {
//  yeh define kiya gaya hai jiska naam maxProfit ha, Yeh function ek array prices ko input mein leta hai.
    let left = 0; // Buy
    // yeh "Buy" ko represent kry ga, jab ham pehli currency ko kharidte hain.
    let right = 1; // sell
    //  yeh "Sell" ko represent kry ga, jab ham doosri currency ko bechte hain.
    let max_profit = 0;
    // yeh sab se ziyada profit ko store kiya jayega,oor yeh 0 se start hota hai.
    while (right < prices.length) {
        //   is loop right value prices array ke length se choti rehti hain,  hum is  array ke har element par check karenge.
      if (prices[left] < prices[right]) {
          let profit = prices[right] - prices[left]; // our current profit
          // Yeh wali condition dekhti ha ke agar left position par ki gaye currency ki price right position  ki currency ki price se kam hai,
          //  profit ko calculate kia jata ha, means  "Sell" price se "Buy" price ko subtract kiya jata ha.  
  
        max_profit = Math.max(max_profit, profit);
          // calculate kie gye profit ko  max_profit ke saath compare kia jata ha oor jiska profit ziyada hota hai, woh max_profit mein store ho jata hai
      } else {
        left = right;
       // Agar left price right price se ziyada hoti ha to left ko right ke equal kar diya jata hai. means ke new  "Buy" point ko set kiya jata hai.
      }
      right++;
         // yeh right ko increment krta hai taa keh hum agli currency pair per move kar saken
    }
    return max_profit;
    // yeh  loop khatam hone par, code max_profit ko return karta hai, jo ki sabse zyada profit  represent krta ha
  };
