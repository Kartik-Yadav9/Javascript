//---------------------directly calling method from class without constructor-----------------------------



// class Form {                                //class serving as template for different users
           

//     name(names){
//         this.name= names
//         alert(`My name is ${this.name}`)    //This means the property you are updating is called name
//     }


//     age(umar){
//         this.age= umar
//         alert(`My age is ${this.age}`)    ///This means the property you are updating is called age
//     }

// }

// let kartik= new Form()
// kartik.name('kartik')                                //directly calling from methods u cn call arguments here
// kartik.age('25')

// let nalin= new Form()
// nalin.name('Nalin')
// nalin.age("15")




















// -----------------------------------------------------using constructor, extend(inheritance) and super keyword-----------------------------------------


// class First{

//     constructor(username){
//         this.name= username;
//     }

//     test1(){                                           //unsaid function
//         console.log(`my name is ${this.name}`);
//     }
// }

// class Second extends First{

//     constructor(username,password,age){
//         super(username)                            //this is working behind the scene
//         this.password= password
//         this.age = age
//     }

//     test2(){
//         console.log(`my name is ${this.name} and my age ${this.age}`);
//     }
// }


// let fir= new First('first')                        //using constructor u have to pass arguments here
// fir.test1()

// let sec= new Second('second','pswd' , 2)
// sec.test2()

















//----------------------------using overriding method using extend and super--------------------------------


class Parent{

    constructor(umar){
        this.name= umar
    }

    age(saal){
        console.log(`My name is ${this.name} and age is ${saal}`);   
    }

}





class Child extends Parent{

constructor(umar){
    super(umar)
}

defineAge(saal){
    super.age(saal)    //to call method it should be inside method
}

}


let ans= new Child('kartik')
ans.defineAge(15)


