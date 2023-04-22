# Arrow Functions

Functions are the heart of the Javascript. Mainly the function declaration and defination takes place as follows : 
 
#### Syntax

```javascript
function functionName(params) {

    //Code inside 

}
```

This represents the function statement or function declaration. Both are the same thing. 

In `Javascript` we also have `function expressions` which represents, assigning a function to a variable. Yes! it's possible in javascript.

```javascript
var functionName  = function(params) {

    //Code inside 

}
```
So, here we are assigning the function to the variable `functionName`. Now to call this function we simply use:
`functionName()` 
Since, this function doesn't have any name assigned to it, so this kind of functions are called `Anonymous functions`

Like function expressions, we also have `Arrow functions` which comes under the category of Anonymous functions. The arrow functions are part of `ES6` and are nothing but a different way of writing function. 

```javascript
var functionName  = (params) => {

    //Code inside 

}
```

The main difference between arrow functions and other functions is the value of `this`

The arrow functions use lexical this and a bind call will have no effect on them while in case of other functions, the value of this depends upon how the function is being called. 

```javascript
var obj = {
    name : "Javascript" 
}

function normalFunction(){
    console.log(this) ; 
}

normalFunction()            //Output will be the window object
normalFunction.call(this)   //Output will be the window object
normalFunction.call(obj) ; //Output will be the object obj

```

## Related

For more material, please refer

[Arrow functions(MDN docs)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
