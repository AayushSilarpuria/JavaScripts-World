// Q4: Sum  of two number:
// Given an array of integer num and an integer target,
// return indices of two number such that they add up to target.

// Input: nums = [2,7,11,15], target = 9;
// output: [0,1] or [2,7]

//1.  Brute Force Method: 
// it is method in which we take 1st value and compaire it all other values of an array.

const twosum = (nums, target)=>{
    const result = [];
    for(i=0; i< nums.length; i++){
        
        for(j=i; j<nums.length; j++ ){
            
            const suming = nums[i] + nums[j];
            if( suming === target){
                result.push([nums[i],nums[j]]);
            };
        }
    }
    return result;
}

console.log(twosum([2,7,11,15,4,5,6,3], 9));



// 2. Another Method:

function twoSum2(curNum, target1){
    const numMap = {};

    const result2 = [];

    for(let i1 = 0; i1 < curNum.length; i1++){
        const complement = target1 - curNum[i1];

        if(numMap[complement] !== undefined){
            result2.push([curNum[i1],complement]);
        }

        numMap[curNum[i1]] = i1;
    }

    return result2;

}

console.log(twoSum2([2,7,11,15,4,5,6,3], 9));


// 3. Another Method: 

const twosum3 = function (numb, targ){
    var obj3 = {};

    result3 = [];

    for(let i2=0; i2 <= numb.length; i2++){

        var n1 = numb[i2];

        if(obj3[targ - n1] >= 0 ){
            result3.push( [(targ - n1), n1]);
        }
        else{
            obj3[n1] = i2;
        }

    }
    
    return result3;
}

console.log(twosum3([2,7,11,15,4,5,6,3], 9));