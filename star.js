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




// let n =5
// let nos=4
// let nstr=1


// for(let row=1; row<=n; row++){
//    let str=  ""
   
//    for(let col=1; col<= nos; col++ ){
//       str = str+ "\t"
//    }

//       for(let j=1; j<= nstr ; j++){
//          str= str+ "*\t\t"
//       }

   

//    console.log(str);
//    nstr= nstr+1
//    nos=nos-1
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













 



// *				*	 
// *	*		*	*	 
// *		*		*	 
// *				*	 
// *				*	


// let n= 5

// for(let row=1; row<= n; row++){
//    let str= ""

//    for(let col=1; col<=n; col++){
//      if (col==1) {
//       str= str+"*\t"
//      } 
     
//      else if(col==5){
//       str= str+"*\t "
//      }

//      else if (col==2) {
//       if (row==2) {
//          str= str+"*\t"
//       } else {
//          str= str+"\t"
//       }
//      }

//      else if(col==4){
//       if (row==2) {
//          str= str+"*\t"
//       } else {
//          str= str+"\t"
//       }
//      }

//      else if(col==3){
//       if (row==3) {
//          str= str+"*\t"
//       } else {
//          str= str+"\t"
//       }
//      }
//    }

//    console.log(str);
// }






















// * 
// * * 
// * * * 
// * * 
// * 

// n=5
// nstr=1
// nos= 5

// for(let row=1; row<=n; row++){
// let str =""

//    for(let col=1; col<=nstr; col++){
//       str= str+ "* "
//    }

//    console.log(str);
//    if (row<3) {
//       nstr=nstr+1
//    }
//    else{
//       nstr= nstr-1
//    }

// }















// *     * * * *
// *     *
// *     *
// * * * * * * *
//       *     *
//       *     *
// * * * *     *

// let n= 7

// for(let row=1; row<=n; row++){
//    let str =""

//    for(let col=1; col<=n; col++){
//       if (row==1) {
//          if (col==1 || col>=4) {
//             str =str +"*\t"
//          } else {
//             str =str +"\t"
//          }
//       }
      
//       else if(row<4) {
//          if (col==1 || col==4) {
//             str =str +"*\t"
//          } else {
//             str =str +"\t"
//          }
//       }

//       else if (row==4) {
//          str =str +"*\t"
//       }

//       else if (row<7) {
//         if (col==4 || col==7) {
//          str =str +"*\t"
//         } else {
//          str =str +"\t"
//         } 
//       }

//       else{
//          if (col <= 4 || col==7) {
//             str =str +"*\t"
//          } 
//          else {
//             str =str +"\t"
//          }
//       }
 
//    }
   
//    console.log(str);
  
// }





















// *	*	*	*			*	
// 			*			*	
// 			*			*	
// *	*	*	*	*	*	*	
// *			*				
// *			*				
// *			*	*	*	*	


// let n= 7

// for(let i=1; i<= n; i++){
//    let str=""

//     for(let j=1; j<=n; j++){
//        if(i==1){
//          if(j<=4 || j==7){
//             str= str+ "*\t"
//          }else(
//             str= str+"\t"
//          )
//        }
       
//        else if(i<4){
//          if (j==4 || j==7) {
//             str= str+ "*\t"
//          } else {
//             str= str+ "\t"
//          }
//        }
//        else if(i==4){
//          str= str+ "*\t"
//        }
       
//        else if(i<n){
//          if (j==1 || j==4) {
//             str= str+ "*\t"
//          } else {
//             str= str+ "\t"
//          }
//        }
       
//        else{
//          if (j==1 || j>=4) {
//             str= str+ "*\t"
//          } else {
//             str= str+ "\t"
//          }
//        }
//     }
      
      // str= str+"\n"
//    console.log(str);

// }


















//   *	*	*				*	*	*		
// *	*	*	*	*		*	*	*	*	*	
// *	*	*	*	*	*	*	*	*	*	*	
// 	*	*	*	*	*	*	*	*	*		
// 		*	*	*	*	*	*	*			
// 			*	*	*	*	*				
// 				*	*	*					
// 					*	

// n=8
// nstr=11

// for(let row=1; row<=n; row++){
//    let str= ""

//    for(let col=1; col<= nstr; col++){
//       if (row==1) {
//          if (col==2 || col==3 || col==4 || col==8 || col==9 || col==10 ) {
//             str= str+ "*\t"
//          } else {
//             str= str+ "\t"
//          }
         
//       } else if(row==2) {
//          if (col==6) {
//             str= str+ "\t"
//          } else {
//             str= str+ "*\t"
//          }
//       }

//       else if(row==3){
//          str= str+ "*\t"
//       }

//       else if(row==4){
//          if (col==1 || col==11) {
//             str= str+ "\t"
//          } else {
//             str= str+ "*\t"
//          }
//       }

//       else if(row==5){
//          if (col==1 || col==2 || col==10 || col==11) {
//             str= str+ "\t"
//          } else {
//             str= str+ "*\t"
//          }
//       }

//       else if(row==6){
//          if (col==1 || col==2 || col==3 || col==10 || col==11 || col==9) {
//             str= str+ "\t"
//          } else {
//             str= str+ "*\t"
//          }  
//       }

//       else if(row==7){
//          if (col==1 || col==2 || col==3 || col==4|| col==8|| col==10 || col==11 || col==9) {
//             str= str+ "\t"
//          } else {
//             str= str+ "*\t"
//          } 
//       }

//       else if(row==8){
//          if (col==6) {
//             str= str+ "*\t"
//          } else {
//             str= str+ "\t"
//          } 
//       }
//    }

//    console.log(str);
// }




// 1
// 2 3
// 4 5 6
// 7 8 9 10


// let n=4
// let nnum= 1

// for(let i=1; i<=n; i++){

//    let num= " "

//    for(let j=1; j<=i; j++){
//       num= num+nnum
//       // nnum++
//       nnum= nnum+1     
//    }
   
//    console.log(num);
  
   
// }





n=5


for(let row=1; row<=n; row++){
   let num= 0
   for(col=1; col<=incr; col++){
      // console.log(col);
      num+=col


   }
   console.log(num);
   incr=incr+
}