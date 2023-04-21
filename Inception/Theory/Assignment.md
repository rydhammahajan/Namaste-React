# Assignment

### What is Emmet ?
Emmet is a free add-on for your text editor that allows you to type the shortcuts that are then expanded into full pieces of code.

### Difference between Library and framework ?
The very basic difference between both of them is that, it takes minimum efforts to add library to our code than a framework. We can consider the example of adding a Carousel library to our code.
#### Library : 
A library is basically a collection of pre written helper functions that we use in our code for adding some functionality.
#### Framework :
A framework is basically a complete skeleton with tools for fast development. A framework includes almost everything that we require to build application.

Talking about React and Angular, between both React is a library whereas Angular is a Framework.

### What is a CDN? Why we use it?
CDN basically stands for `Content Delivery Network`. It is a group of geographically distributed servers that speed up the delivery of the web content by bringing it closer to where the users are.

CDN cache content like web pages , images , videos in proxy servers. This allows us to access content without waiting for it to download.
 

### Why is React known as React
It’s called React because it reacts. It was developed by `Facebook` (a site that CONSTANTLY updates their data) to improve the user interface development and more effectively change (REACT to) what the user sees when they’re doing things like mouse clicking, submitting and typing.”

Hence, because of the ability of react to react or respond dynamically to the changes in the data , it is called as `React`

### What is crossorigin in script tag?

`
    <script 
        crossorigin 
        src="">
    </script>
`

The attribute `crossorigin` in the script tag sets the mode of the request to the HTTP CORS request.

`CORS` stands for `Cross Origin Resource Sharing` and is mechanism that allows resources on a web page to be requested from another server / domain. 

### What is diference between React and ReactDOM

`React.js` is a Javascript library that is mainly used to create user interfaces in web development. It is known for its component based architecture.

`ReactDOM` is an another javascript library that is used to render React applications on the browser.`ReactDOM`functionality used to be the part of the React.js but because React is not only used by the browser i.e. (React Native), iy has been moved to the separate library.

### What is difference between react.development.js and react.production.js files via CDN?

Before understanding the difference, lets first understand what `Minification` is ?

So, `Minification` is a major component of Frontend Engine Optimization. It is a set of tools and techniques that reduce the file sizes and the number of web pages request.

`React.development` is an uncompressed version of the React library for development while `React.production` is a compresses or `minified` version of the react library for production and includes extra performance optuimizations.
