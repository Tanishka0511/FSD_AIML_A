const myset=new Set();
console.log(myset)     //Set(0) {}
myset.add(23);
myset.add(24);
myset.add(23);
myset.add(26);
myset.add(28);
myset.add(28);
myset.add(24);
console.log(myset);   // Set(2) { 23, 24 }



const num=[23,24,25,26,27,28];
// filter..
const evennumber =num.filter((n)=>(n%2 ==0))
console.log(evennumber)
// second way..
const evennumber1 =num.filter((n)=>{return (n%2 ==0)})
console.log(evennumber1)


// map
const mult1 =num.map((n)=>{return (2*n)})
console.log(mult1)


// reduce..
const red=num.reduce((s=0,n)=>{return (s =s+n)})
console.log(red)



