var obj = {
    name : "Javascript" 
}

function normalFunction(){
    console.log(this) ; 
}

normalFunction()            //Output will be the window object
normalFunction.call(this)   //Output will be the window object
normalFunction.call(obj) ; //Output will be the object obj


function f1() {
    function f2() {
        var f3 = () => {
            console.log(this) ;  //Output will be the window object  for f2() but it will be obj for  f2.call(obj) 
        }
        f3()
    }
    f2() ;  
    f2.call(obj) ; 
}

f1() ; 

var f4 = () => {
    console.log(this) ;  
}
f4() ;  //This will print window object on console 
f4.call(obj) ; //This will still print the window object on the console. A bind call will have no effect on them. 
               //Arrow functions use lexical this
