const mymap=new Map([
    ["key1",123],
    [34,"js"]
])

console.log(mymap.get(34));
console.log(mymap.get("key1"));

// add new element
mymap.set("key2","java");
mymap.set("key3",101.58);
console.log(mymap.get("key2"));
console.log(mymap.get("key3"));

// print complete map;
console.log(mymap);
// all keys of map
console.log(mymap.keys());
