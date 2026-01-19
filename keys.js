const computer = {
    laptop : "MacBook Pro",
    desktop : "iMac",
    tablet : "iPad Pro",
    price : 65000,
    warranty : "1 year"
}
const values = Object.values(computer);
console.log(values);
// Output: [ 'MacBook Pro', 'iMac', 'iPad Pro', 65000, '1 year' ]
console.log(Object.keys(computer));
// Output: [ 'laptop', 'desktop', 'tablet', 'price', 'warranty' ]