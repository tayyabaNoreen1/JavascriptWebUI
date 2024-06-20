function sum(a, b) {
  a + b;
  //return a + b;
}

console.log(sum(10, 10));

function product(a, b) {
  return a * b;
}

console.log(product(12, 12));

const bigProduct = product(5353, 134534);

console.log(bigProduct);

setTimeout(function () {
  console.log('Hey! You rock!!');
}, 1000);   //Anonymous function dont have name and callback is a function that can be used as input to other function

setTimeout(() => console.log('Hey! You rock!!'), 2000); //Single line arrow function does not need paranthesis and return keyword
