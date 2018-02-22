//Constructor pattern

//The following function behaves as a constructor to create objects
personConstructor=function(firstName,lastName,birthPlace){
	//adding some properties
	this.firstName=firstName;
	this.lastName=lastName;
	this.birthPlace=birthPlace;
	this.printPerson=function(){
		console.log(this.firstName+" "+this.lastName+" 			"+this.birthPlace);
	};
};

//creating new person
var person1=new personConstructor("Masha","petitefille","Toulouse");
var person2=new personConstructor("Mishka","bonOurs","Toulouse");

//printing the person details
person1.printPerson();
person2.printPerson();
