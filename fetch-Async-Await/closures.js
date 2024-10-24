// function upper(){
//     let val= 26;
//     let init= function(){
//        console.log( `val is taken from lexical scope,${val}`)
//     }
//         return init()
//  }



//  let c= upper()
//  console.log(c)










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





