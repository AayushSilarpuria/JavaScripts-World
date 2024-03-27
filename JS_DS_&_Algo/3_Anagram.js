// Q3: Valid Anagram: 
// A Anagram is a word or phrase formed by rearranging the letter of
// different word or phrase, using all the letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>> output: true;
// Input: (s = "rat"), (t = "car"); ----->>>>> output: false;

function anag(n,m){
    n = n.split("").sort().join("");
    m = m.split("").sort().join("");

    return n === m;
}
console.log(anag("anagram", "nagaram"));




// Another Method:

const aangram = function (s,t){
    if(s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for(i=0; i<s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
        console.log("obj1: ", obj1);
        console.log("obj2: ", obj2);
    }

    for(const key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;
}

console.log(aangram("anagram", "nagaram"));

