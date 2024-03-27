// Q5 : Best time to buy and sell stocks.
// You are given an array prices where prices[i] is the price of a given stock3 on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];      ----->>>>> Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>> Output: 0;

// Brute Force Method:

const maxprofit = (prices) =>{
    let profit = 0;
    for(let i=0; i <=prices.length-1; i++){
        for(let j= (i+1); j <= prices.length; j++){
            
            const priDiff = (prices[j] - prices[i]); 

            if(priDiff > profit ){
                profit = priDiff;
            }
            
        }
    }
    
    return profit;
}

console.log(maxprofit([7, 1, 5, 3, 6, 4]));


// Greedy Algorithm: 

const new_maxprofit = function (prices2){

    let minstockprice = prices2[0] || 0;
    let profit3 = 0;

    for(let i1 = 1; i1 < prices2.length; i1++){
        if(prices2[i1] < minstockprice){
            minstockprice = prices2[i1];
        }

        profit3 = Math.max(profit3, prices2[i1] - minstockprice);
    }
    return profit3;
}
console.log(new_maxprofit([7, 1, 5, 3, 6, 4]));

