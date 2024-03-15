function aaa(name,age){
    this.newName= name
    this.agge= age
    // this.caste= function religion() {
    //     console.log(this.newName);
    // }
 
}

aaa.prototype.religion =function() {
    console.log(this.newName);
}

let first1= new aaa('ksy', 24)
let first2= new aaa('ksey', 25)
console.log(first1);
console.log(first2);

let first3= new aaa('kartik', 2222)
first3.religion()