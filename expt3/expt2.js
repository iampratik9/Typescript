// Union Types
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log("Union type string");
console.log(combine("James", "Bond"));
console.log("Union type Number");
console.log(combine(10, 40));
// Map
var fruits = new Map();
fruits.set(1, "Apple");
fruits.set(2, "Banana");
fruits.set(3, "Orange");
console.log("Fruits Map:");
fruits.forEach(function (value, key) {
    console.log(key, ":", value);
});
// Tuple   (The order also matter in case of tuple )
var employee;
employee = [101, "John Doe", true];
console.log("\nEmployee Details:");
console.log("ID:", employee[0]);
console.log("Name:", employee[1]);
console.log("Active:", employee[2]);
