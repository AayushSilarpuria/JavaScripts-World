// Datatype:
// nn bb ss u - Premitive Datatype
let a = null;
let b = 300;
let c = true;
let d = BigInt("567") + BigInt("3")
let e = "Ayush"
let f = Symbol("I am a number.")
let g = undefined// also write as (let g)
console.log(a,b,c,d,e,f,g)
console.log(typeof d)

// object in JS - Non-prementive datatype
const item = {
    "Ayush" : true,
    "Subh" : false,
    "alok" : 67,
    "lucky" : undefined
}
console.log(item["Ayush"])
console.log(item["lucky"])
console.log(item["alok"])