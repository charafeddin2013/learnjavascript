//Function declaration:

//defining fullname function
function fullname1(fname, lname){
console.log("Welcome "+ fname + " "+ lname);
};
fullname1("Bell","Bois");

//in javaScript functions are flexible with arguments
fullname1("Bell");
fullname1();

// returning value from a function
function fullname2(fname, lname){
return("Welcome "+ fname + " "+ lname);
};
var greetings=fullname2("Anne","Bois");
console.log(greetings);


//Function expression:

//In Javascript we can assign a funtion to a variable directely
var result1= function sayHello(name){
            return "Hello " + name;
};
console.log(result1("Masha"));


//Anonymous function expression
//we can assing a nameless function to a variable
var result2= function (name){
            return "Hello " + name;
};
console.log(result2("Michka"));
