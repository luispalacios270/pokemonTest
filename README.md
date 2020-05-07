# Questions

1. Explain the difference between a var, a let, and a const
   R: Const and let are block scope... So, when you declare a variable on a function using var and let are pretty much the same... one example: You have a function with a If scope insidethe function, if you declare a variable insede the If scope using VAR it's pretty much the same as declaring the variable outside the scope but if you use let or const that declaration it's only available in that scope.

2. What are the differences between declaring a function with the keyword function against creating it with an arrow function?
   R: Well... An arrow function doesn't create a context. The bottom line would be when you're using an arrow function, you won't create a "THIS" it would use the "This" of its parent.

3. What is a closure, and how/why would you use one?
   R: A closure it's pretty much a function inside another function, this is the way we usedto create private properties before EcmaScript6 because you can create classes now.

4. How would you turn a method with a callback argument into a promise? In a way you return “info” in the Promise and use the callback function there
   R: Ok, do you want me to remove the callback from the parameters and use a promise instead. I mean... I think the easiest way would be... Something like this... I writing it down... Ok, there you go. I don't know if this is what you were asking me to do?

Code:

```javascript
const fnCallback = async () => {
  const info = '';
  return info;
};
const resp = await fnCallback();
console.log(resp);
```
