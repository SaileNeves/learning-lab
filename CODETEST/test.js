 let myArray = [];

for (let i = 0; i < 5; i++) {
  let myObject = {
    obj1: { property1: "value1", property2: "value2" },
    obj2: { property1: "value3", property2: "value4" }
  };
  myArray.push(myObject);
}

console.log(myArray);

/* let myArray2 = [];

for (let i = 0; i < 5; i++) {
  let innerArray = [
    { property1: "value1", property2: "value2" },
    { property1: "value3", property2: "value4" }
  ];
  myArray2.push(innerArray);
}

console.log(myArray2);
  */



let myArray2 = [];

// Loop through a specific number of times (e.g., 5 times)
for (let i = 0; i < 5; i++) {
  // Create an object with two properties (e.g., 'property1' and 'property2')
  let myObject = {
    property1: "value1",
    property2: "value2"
  };

  // Add the object to the array
  myArray2.push(myObject);
}

// Check the content of the array
console.log(myArray2);