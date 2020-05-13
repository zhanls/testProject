interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// Declare a tuple type
let x: [string, void];
// Initialize it
x = ['hello', undefined]; // OK
// Initialize it incorrectly
console.log(x);

// export default welcome
