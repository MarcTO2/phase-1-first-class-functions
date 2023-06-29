const chai = require("chai")
const spies = require("chai-spies")
chai.use(spies);


function receivesAFunction(callback) {
    if (typeof callback === "function" ) {
        callback();
        
    }else {
        console.log("Error: The provided parameter is not a function");
    }
}

function myCallback() {
    console.log("Callback function called!");
}

receivesAFunction(myCallback);



function returnsANamedFunction() {
    function Namedfunction() {
        console.log("This is a named function");
        
    }

    return Namedfunction
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function"); 
    }
    
}