//Prototype pattern

//first we create an empty object
personProto=function(){

};

//Then, we add some prototype properties and methods
personProto.prototype.firstName="notAssigned";
personProto.prototype.lastName="notAssigned";
personProto.prototype.birthPlace="notAssigned";
personProto.prototype.printPerson=function(){
		console.log(this.firstName+" "+this.lastName+" 			"+this.birthPlace);
	};

//creating new person
var person1=new personProto();
person1.firstName="Masha";
person1.lastName="petitefille";
person1.birthPlace="Toulouse";

//creating another person
var person2=new personProto();
person2.firstName="Mishka";
person2.lastName="bonOurs";
person2.birthPlace="Toulouse";

//creating third person without firstName property and prototype firstName value will be assigned to it
var person3=new personProto();
person3.lastName="leTigre";
person3.birthPlace="Toulouse";

//printing the person details
person1.printPerson();
person2.printPerson();
person3.printPerson();
