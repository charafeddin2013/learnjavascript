/*
In Javascrip there are three primitive data types:
String,Number,Boolean
*/

//We donot need to declare the variable type

//declare number variables
var number=10;
console.log("my number is "+number);

//declare booleans
var bool=true;
console.log("i am a boolean variable and my value is " + bool);

// create strings
var greetings = "Hello world";

//string length
var len=greetings.length;
console.log("The length of \""+ greetings +"\" is: " +len);

// get the type of variables
console.log(typeof number + " " +typeof bool + " " +typeof greetings);

// to erase the contents of a variable, use null value
bool=null;
console.log("now bool variable type is: ",typeof bool); 
