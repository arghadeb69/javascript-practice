

console.log(a); // -- undefined

console.log(testfunc); //-- undefined


 var a = 10;
 var testfunc= function() { 
    console.log(this);
    return "hello"; 
}   // Function declaration
