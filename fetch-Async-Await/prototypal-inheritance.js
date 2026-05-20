// //by making one prototype, u cn access this method in all.





// function aaa(name,age){
//     this.newName= name
//     this.agge= age
//     // this.caste= function religion() {
//     //     console.log(this.newName);
//     // }
 
// }

// aaa.prototype.religion =function() {
//     console.log(this.newName);
// }

// let first1= new aaa('ksy', 24)
// let first2= new aaa('ksey', 25)
// console.log(first1);
// console.log(first2);

// let first3= new aaa('kartik', 2222)
// console.log(first3);

// first3.religion()











// Prototypal Inheritance is a feature in JavaScript where objects can inherit
// properties and methods from another object via the prototype chain.


function xyz(name,age){

    this.name= name
    this.age= age
}

xyz.prototype.myfunc= function(){                  //protype is using 
    console.log(`inside func: ${this.name}`);
}

xyz.prototype.yourfunc= function(){
    console.log(`inside func: ${this.name}`);
}


// prototype is a property of constructor functions (and classes) that is used to define properties 
// and methods that will be shared by all instances created from that function.


// prototype is where shared methods are stored, while __proto__ is the link that connects an object to its prototype.





let person1= new xyz("kartik",24)
console.log(person1);

let  person2= new xyz("bruno",2)    //now the method will come inside proto
person2.myfunc()




























