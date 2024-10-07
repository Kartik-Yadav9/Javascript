 
 class Animal{

    constructor(name, second){
        this.name= name
        this.second= second
    }

         run() {
        console.log(`${this.name} is running with ${this.second}`);
    }
 }



//use of extend in children
class Monkey extends Animal{

    eat(){
        console.log(`${this.name} is eating ${this.second}`);
    }
}




 let ani= new Animal('bruno', 'stark')
 ani.run()


 // children
 let mon= new Monkey('he', 'banana')
 mon.eat()

 //using parents property
 let taken= new Animal('she', 'me')
 taken.run()














// class Practice{

//     fname= 'kartik'
//     lname="yadav"
//     age= 24
//     yo(){
//         return this.fname+ " "+ this.lname
//     }
// }

// let prct= new Practice
// console.log(prct);















// class People{

//     // fname= 'kartik'
//     // lname="yadav"
//     // age= 24

//     constructor(x,y,z){
//         this.fname= x,
//         this.lname= y,
//         this.age= z

        
//     }

//     // yo(){
//     //     return this.fname+ " "+ this.lname
//     // }
// }

// let prct= new  People("kartik", "yadav",24)               //constructor will work only when instance or object
// console.log(prct);                                         // will be made,  class will get memory after making obj.

// let prct2= new People("Iswar", "Singh", 25)
// console.log(prct2);



















//     let People =class{                  //class expression, class can be stored in variable. 

//     // fname= 'kartik'
//     // lname="yadav"
//     // age= 24

//     constructor(x,y,z){
//         this.fname= x,
//         this.lname= y,
//         this.age= z

        
//     }

//     // yo(){
//     //     return this.fname+ " "+ this.lname
//     // }
// }

// let prct= new People("kartik", "yadav",24)               
// console.log(prct);                                         //same as upper one

// let prct2= new People("Iswar", "Singh", 25)
// console.log(prct2);












// class names {
//     constructor(name, age){
//         this.name= name
//         this.age= age
//     }

//     me(){
//         console.log(`i am ${this.name} , ${this.age}`);
//     }
// }

// const name1= new names("kartik", 25)
// name1.me()