// ABDCEFvr -> vrFEDCBA
let s = "ABDCEFvr"
let c = Array.from(s).sort().reverse().join("")
console.log(c)