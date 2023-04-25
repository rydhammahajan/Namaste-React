# Assignment

### What is JSX?

JSX stands for Javascript XML. JSX is a HTML liike syntax written inside the Javascript file not the HTML inside  Javascript file.
Using JSX simplifies our task of creating elements in our React application. In the following example , `mainContainer` is a `JSX element.`

```
const mainContainer = (

    <div>

        <h1>Namaste React</h1>
        <Introduction></Introduction>
        <ul>
            <li>Home</li>
            <li>Support</li>
            <li>About Us</li>
        </ul>
    </div>

)

```
We can use the above JSX element using `{mainContainer}` anywhere inside our code in js file .

As everything is component in React, So we can easily create functional and class components in React using JSX. Following is the example of `Functional Component`

```
const Introduction = () => {

    const num = 3 ; 
    return (
        <div className="title">                                           
            <h2>This is a Lecture No. : {num}</h2>      
        </div>
    )
}

```
We cab access the functional component anywhere in the code using `<Introduction>` or `<Introduction></Introduction>`

The syntax of JSX is so similar to HTML that we can add attributes , class and also css styling in almost the same way , only with slight difference.

Talking about how JSX executes behind the scenes, JSX is converted by `Babel` to` React.createElement` code which itself gives an object. On rendering this object , it becomes the part of the HTML DOM. 

### Superpowers of JSX


`Superpowers of JSX`

- Makes it easier to create and manipulate the structure of a web page within the JavaScript code, as you can write HTML-like tags and elements directly in the JavaScript code without needing to concatenate strings or use complex DOM manipulation techniques like createElement.

- The another powerful features of JSX is that it allows you to embed JavaScript expressions and statements directly into your HTML-like code. This means that you can use variables, functions, loops, conditional statements, and other JavaScript expressions and statements inside JSX.


### Role of type attribute in script tag? What options can I use there?

The` type attribute` identifies the content between the <script> and </script> tags.
The type attribute is not required in HTML5 for JavaScript files, as the default type is`text/javascript`.
- text/javascript : It is the basic standard of writing javascript code inside the <script> tag.
```
<script type="text/javascript"></script>
```
- text/ecmascript : this value indicates that the script is following the EcmaScript standards.
- module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- text/babel : This value indicates that the script is a babel type and required bable to transpile it.
- text/typescript: As the name suggest the script is written in TypeScript.


### {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

`{TitleComponent}` -> This syntax is used when we want to render a JSX element. 

` {<TitleComponent/>}  and {<TitleComponent></TitleComponent>}`-> Both the syntax are used to render the Functional Components in the react. The only difference is that,  we can use the second syntax when we want to pass some children to the component or we want to use it as a container for other elements
