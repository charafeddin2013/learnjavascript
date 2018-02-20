//declaring an empty object

var student={};

//it will print {}
console.log(student);

//adding some properties to student object
student.id=100;
student.firstName="fred";
student.lastName="sunny"

//it will print {id: 100, firstName: "fred", lastName: "sunny"}
console.log(student);

//printing the firstname property
console.log(student.firstName);

//declaring a book object with some properties
var book={title:"Math", author:"Anne", year:2000};
console.log(book);

//objects can contain inner objects
var coffeeshop={name:"Toulouse coffee shop", owner:"Fred", address:{
streetNo:123, street:"Allee François verdier", codepostal:31000}};
console.log(coffeeshop);
