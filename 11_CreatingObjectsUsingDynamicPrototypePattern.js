//Dynamic prototype pattern
//this pattern is the best because it creates lightweight objects

personDynamicPrototype=function(firstName,lastName,birthPlace){
	//adding some properties
	this.firstName=firstName;
	this.lastName=lastName;
	this.birthPlace=birthPlace;
   //we add the function only one time to the person prototype
if(typeof this.printPerson!=='function'){
	personDynamicPrototype.prototype.printPerson=function(){
		console.log(this.firstName+" "+this.lastName+" 			"+this.birthPlace);
	}; 
}//end if
};

//creating new persons
var person1=new personDynamicPrototype("Masha","petitefille","Toulouse");
var person2=new personDynamicPrototype("Mishka","bonOurs","Toulouse");

//printing the person details
person1.printPerson();
person2.printPerson();
