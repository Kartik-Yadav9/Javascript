// function upper(){
//     let val= 26;
//     let init= function(){
//        console.log( `val is taken from lexical scope,${val}`)
//     }
//         return init()
//  }



//  let c= upper()
//  console.log(c)








// Closure in JavaScript is a function that remembers the variables from its outer 
// scope even after the outer function has finished executing.

function upper(){
    let val= 25;
   
   
   return  function init(){
       console.log( `val is taken from lexical scope,${val}`)
    }
   
   
    // console.log(val);    //this will not work because written after return
        
 }

 let d= upper()
d()




// function a(){

//     let no= 23

//     return function e(){
//         console.log(`this is ${no}`);    
//     }


// }

// let ans= a()
// ans()





