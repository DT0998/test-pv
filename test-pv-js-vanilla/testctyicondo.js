// may way create object in js
// const myObject = {
//     property1: value1,
//     property2: value2,
//     // other properties
// };

// const myObject = new Object();
// myObject.property1 = value1;
// myObject.property2 = value2;

function MyClass(property1, property2) {
  this.property1 = property1;
  this.property2 = property2;
}

const myObject = new MyClass(123, 456);
console.log(myObject);

const obj = {
  a: 123,
  b: {
    c: 123,
  },
};
const { b: nestedObj } = { ...obj };
console.log(obj === nestedObj);
console.log(nestedObj);
