var city="Toulouse";
//When adding string to number, Javascript will convert number to string type
console.log(city+12); //will print Toulouse12

//Evalution of expressions always start from left to right
console.log(3+6+city+12); //will print 9Toulouse12

//Javascript also makes type conversion when using 	"equal to" operator (==)
//We will get true 
if(5=="5")
  console.log("true");
else
  console.log("false");

//strict "equal to" operator (===)
//We will get false 
if(5==="5")
  console.log("true");
else
  console.log("false");
