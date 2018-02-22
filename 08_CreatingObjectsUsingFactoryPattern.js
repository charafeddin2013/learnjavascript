//Creating objects using Factory pattern

//The following function behaves as a factory to create objects
personFactory=function(firstName,lastName,birthPlace){
	//create un empty object
	var temp= new Object;
	//adding some properties
	temp.firstName=firstName;
	temp.lastName=lastName;
	temp.birthPlace=birthPlace;
	temp.printPerson=function(){
		console.log(this.firstName+" "+this.lastName+" 			"+this.birthPlace);
	};
	return temp;
};

//creating new person
var person1=personFactory("Masha","petitefille","Toulouse");
var person2=personFactory("Mishka","bonOurs","Toulouse");

//printing the person details
person1.printPerson();
person2.printPerson();
