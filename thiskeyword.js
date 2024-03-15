


// console.log(this);      //this keyword using global
                            //returns window  object





// function hi(){
//     console.log(this);  //this keyword using function
// }                        //returns window object

// hi()





// let obj= {
//     name: 'kartik',                   //this keyword using method es5
//     fun : function(){                //returns parent
//         console.log(this);
//     }
// }
// obj.fun()


// let obj= {
//         name: 'kartik',        //this keyword using method es5, function into function
//         fun : function(){                //returns window object
//            function inner(){
//             console.log(this)
//            }
//            inner();
//         }
        
//     }
//     obj.fun()
    





// let obj2= {
//     age:'24',                            //this keyword using method es6
//     some: ()=>{                           //returns window object
//         console.log(this);
//     }
// }
// obj2.some()





let obj3= {
    age:'24',           
    some: ()=>{              //this keyword using method es6, function into function
                            //returns window object
       let tri=()=>{
        console.log(this);
     } 
     tri()  
    }
}
obj3.some()