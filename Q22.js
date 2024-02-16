"use strict";
// <!--22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. -->
//  function to create a fruit object 
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
// create an array of fruits
const fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banana", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
    createFruit("Strawnerry", "Red", "Sweet"),
];
// Access an invalid index
const invalidIndex = 10;
//  there are only 4 elements in the array so this will cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
// Print the fruits
fruits.forEach((fruits) => {
    console.log(`Name:${fruits.name},Color: ${fruits.color},Taste: ${fruits.taste}`);
});
