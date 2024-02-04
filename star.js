// let n =5;
// for(let row=1;row<=n;row++){
//     for(let col=1;col<=row;col++){
//         // console.log("*")
//         process.stdout.write("*\t")
//     }
//     console.log()
// }

















// let n=5;
// let nos= n-1;
// let nstr= 1;


// for(let i=1; i<=n; i++){
    

//     for(let j=1; j<=nos; j++){
//         process.stdout.write("\t") 
//         // console.log(" s");
//     }

//     for(let k=1; k<=nstr; k++){
//         process.stdout.write("*\t")
//         // console.log("* ");
//     }

//  console.log( );
//  nos= nos-1;
//  nstr=nstr+1

// }









//     *
//    ***
//   *****
//  *******
// *********


// let n=5
// let nos= n-1
// let nstr =1

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=nos; j++){
//         // console.log("\t");
//         process.stdout.write("\t")
//     }

//     for(let k=1; k<=nstr; k++){
//         // console.log("*\t");
//         process.stdout.write("*\t")
//     }

//     console.log();
//     nos=nos-1
//     nstr=nstr+2
// }










//   * 
//  * * 
// * * * 
//  * * 
//   * 


// let n=5
// let nos= n-1
// let nstr =1

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=nos; j++){
//         // console.log("\t");
//         process.stdout.write(" ")
//     }

//     for(let k=1; k<=nstr; k++){
//         // console.log("*\t");
//         process.stdout.write("* ")
//     }

//     console.log();

//     if(i<3){
//         nos=nos-1
//         nstr= nstr+1
//     }
//     else{
//         nos=nos+1
//         nstr=nstr-1
//     }
// }











            // _ _ _ _ *
            // _ _ _ *
            // _ _ *
            // _ *
            // *

            // let n=5
            // let nos= n-1
            // let nstr=1

            // for(let i=1; i<=n; i++){

            //     for(let j=1; j<=nos; j++){
            //         // console.log("space");
            //         process.stdout.write("  ")
            //     }

            //     for(let k=1; k<=nstr; k++){
            //         // console.log("*");
            //         process.stdout.write("*")
            //     }

            //     console.log();
            //     nos=nos-1
            // }








// *
//   *
//     *
//       *
//         *


// let n=5
// let nos= 0
// let nstr=1

// for(let i=1; i<=n; i++){

//     for(let j=1; j<=nos; j++){
//         // console.log("s");
//         process.stdout.write("  ")
//     }

//     for(let k=1; k<=nstr; k++){
//         // console.log("*");
//         process.stdout.write("*")
//     }

//     console.log();
//     nos=nos+1
// }
  



// for(let i=1; i<=n ; i++){
//    let  str= ""

//     for(let j=1; j<= nos; j++){
//         str= str+"  "
//     }

//     for(let k=1; k<= nstr; k++){
//         str= str+"*"
//     }

//     console.log(str);
//     nos= nos+1
    

// }












// 1
// 12
// 123
// 1234
// 12345

// let n=5

// for(let i=1; i<=n; i++){
//     let str= 0
    
//     for(let j=1; j<=i; j++){
//         str= str+j
//     }
//     console.log(str);
    
// }

















    
// n=5

// for(let i=1; i<=n; i++){
//     let str= ""
    
//     for(let j=1; j<=i; j++){
//         str= str+ j
       
//     }

//     console.log(str);
// }









// fibonacci


// n=5
// let str =0

// for(let i=1; i<=n; i++){
//     str= str+i
//     console.log(str);
   
// }

















// *      *

//   *  *  

//     *    

//   *  *  

// *      *


// let n=5


// for(let i=1; i<=n; i++){
//     let str= " "

//     for(let j=1; j<=n; j++){
//         if (i==j || n+1==i+j) {
//             str= str+"*"
//         } else {
//               str=  str+ "  "
//          }
//     }

//     console.log(str);
// }





























// * 
// * * 
// * * * 
// * * 
// * 


// let n=5
// let nos=2
// let nstr= 1

// for(let i=1; i<=n; i++){
//    let str = ""

//     for(let j=1; j<= nos; j++){
//         str= str+""
//     }

//     for(let k=1; k<= nstr; k++){
//         str= str+"* "
//     }

//     console.log(str);
//     if (i<3) {
//         nos= nos-1
//         nstr= nstr+1
//     } else {
//         nos=nos+1
//         nstr=nstr-1
//     }
// }














// *     * * * *
// *     *
// *     *
// * * * * * * *
//       *     *
//       *     *
// * * * *     *



let n= 7

for(let i=1; i<= n; i++){
   let str=""

    for(let j=1; j<=n; j++){
       if (i===4 ||  j===7) {
        str= str+ "* "  
       } else {
        str= str+ " "
       }
      
    }
   str= str+"\n"
   console.log(str);
}

