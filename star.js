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

//    let str= " "
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

// let n=5;

// for(let i=1; i<=n; i++){
//     let str= ""
//     for(let j=1; j<=i; j++){
//         str += j
//     }

//     console.log(str);

// }

// let n=5

// for(let i=1; i<=n; i++){
//     let str= 0

//     for(let j=1; j<=i; j++){
//         str= str+j
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
// 2 2
// 3 3 3
// 4 4 4 4

//  let no=4
//  let count=0

//  for(let i=1; i<=no; i++){
//    let str= " "

//    for(let j=1; j<=i; j++){
//       str+= 1 + count
//    }
//    console.log(str);
//    count++
//  }

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let n=1

// for(let row=1; row<=4; row++){
//    let line= ""
//    for(col=0; col<row; col++){
//       // console.log(col);
//       line+= n+" "
//       n++

//    }
//    console.log(line);

// }

// var str="Hello world";

// let lngth= str.length
// for(let i= lngth-1; i>=0; i--){
//     console.log(str[i]);

// }

// const func=(start,digits)=>{

// let num= start
// let result= ""

//     for(let j=1; j<=digits; j++){
//         result+= num  ;
//         num=num-1
//     }

//     return result;
// }

// let rv= func(7,3);
// console.log(rv);

// * * * * *
// *       *
// *       *
// *       *
// * * * * *

// let n=5;

// for(let i=1; i<=n; i++){
//    let str= ""

//    for(let j=1; j<=n; j++){
//       if(i==1 || i==5 || j==1 || j==5 ){
//          str+= "* "
//       }

//       else{
//          str += "  "
//       }
//    }

//    console.log(str);
// }

//reverse
// const arr = [1, 2, 3, 4, 5];

// let lgth= arr.length

// for(let i= lgth-1; i>=1; i--){
// console.log(arr[i]);

// }

// Find the largest number in an array
// let arr = [4, 1, 8, 5, 7];

// let lar = 0;
// for (let i = 1; i <= arr.length; i++) {
//   if (arr[i] > lar) {
//     lar = arr[i];
//   }
// }
// console.log(lar);

// Find the second largest number

// let arr = [9, 1, 4, 5, 3];

// let largest = 0;
// let secondLar = 0;

// for (let i = 0; i < arr.length; i++) {
//   console.log(largest, "1----", arr[i]);
//   if (arr[i] > largest) {
//     secondLar= largest //updating accord to shifness of 1st to second
//     largest = arr[i];
//   } else if (arr[i] > secondLar && arr[i] !== largest) {
//     secondLar = arr[i];
//   }
// }

// console.log(secondLar);
// console.log(largest);
//========================================================
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//

//
//
//
//
//
//
//
//==========================================================
// Most frontend interview questions come from arrays.

// Practice Problems

// Remove duplicates from array

// let  arr= [1,6,4,3, 7, 4]

// let ans= arr.filter((item,index)=>
//     arr.indexOf(item)===index
// )

// console.log(ans);

// Group array of objects by property---------

// let users = [
//   { name: "Aman", city: "Delhi" },
//   { name: "Rohit", city: "Mumbai" },
//   { name: "Priya", city: "Delhi" },
//   { name: "Neha", city: "Mumbai" },
//   { name: "Karan", city: "Pune" },
// ];

// let separate = users.reduce((item,user)=>{
//     if(!item[user.city]){
// item[user.city]= []
//     }
// item[user.city].push(user)
//     return item
// }, {});

// console.log(separate);

// Find missing number in array-----------
// let arr = [1, 2, 3, 5];
// let n=5
// for(let i=1; i<=n; i++){
//    if(!arr.includes(i))
//    console.log(i);

// }
//--------------------------------------------------------
// let totalsum = 0;
// let expected = 0;

// for (let i = 0; i < arr.length; i++) {
//   totalsum += arr[i];
// }

// for (let i = 1; i <= n; i++) {
//   expected += i;
// }

// let ans = expected - totalsum;

// console.log(ans);

// Rotate array k times
// Chunk array into groups
// Sort array of objects by property

// 2. String Logic

// Very common in interviews.

// Reverse a string
// Check palindrome------------------

// let word= "swiss"

// let lg= word.length
// for(let i=0; i<lg; i++){
//     let count=0
//     for(let j=0; j<lg; j++){
//         if(word[i]===word[j]){
//             count++
//         }
        
            
//         }
//         if (count === 1) {
//           console.log(`first letter that doesn't repeat, ${word[i]}`);
//           break
          
//         }
// }


// Find Prime Numbers from 1 to N----------

// n=80
// for(let i=1; i<=n; i++){
//     let prime=0
//     for(let j= 1; j<=i; j++){
//         if(i%j===0){
//             prime++
//         }
//     }

//     if(prime===2){
//         console.log(i);
        
//     }
// }

// const a = "madams"

// const l=a.length

// let str=""

// for(let i=l-1; i>=0; i--){
//   str+= a[i]

// }
// console.log(str);
// if(str===a){
//     console.log(true);

// }else{
//     console.log(false);

// }

// Count vowels----------

// let a = "are you";

// let vowels = 0;
// for (let i = 0; i < a.length; i++) {
//   if (
//     (a[i] == "a") ||
//     (a[i] == "e") ||
//     (a[i] == "i") ||
//     (a[i] == "o") ||
//     (a[i] == "u")
//   ) {
//     vowels++;
//   } else {
//     a[i];
//   }
// }
// console.log(vowels);



// Find first non repeating character--------
// Check anagram
// Remove duplicate characters
// Capitalize first letter of each word
// Longest word in sentence

// Example:

// let str = "hello";

// let reversed = str.split("").reverse().join("");

// console.log(reversed);
// 3. Object Based Problems (Very Important for React)

// Since React works heavily with objects and APIs.

// Example Data:

// const users = [
//  {name:"Rahul", age:22},
//  {name:"Amit", age:25},
//  {name:"Neha", age:20}
// ]

// Practice:

// Sort by age
// Filter age > 21
// Get only names
// Convert array to object
// Count occurrences

// Example:

// const names = users.map(user => user.name);
// 4. Higher Order Functions (Most Important for React)

// Practice deeply:

// map
// filter
// reduce
// some
// every
// find

// Example:

// const numbers = [1,2,3,4,5];

// const even = numbers.filter(n => n % 2 === 0);

// console.log(even);
// 5. Real Frontend Logic Questions

// These are React developer level problems.

// Example Problems
// Debounce function
// function debounce(fn, delay){
//  let timer;

//  return function(...args){
//    clearTimeout(timer);
//    timer = setTimeout(()=>{
//       fn(...args)
//    }, delay)
//  }
// }
// Throttle function
// Implement Promise.all
// Deep Clone Object
// Flatten Object

// Example:

// const obj = {
//  a:1,
//  b:{c:2,d:3}
// }

// Convert to

// {
//  a:1,
//  "b.c":2,
//  "b.d":3
// }
// 6. DOM Based Questions

// Very important for frontend developers.

// Examples:

// Implement event delegation
// Create modal popup using JS
// Implement infinite scroll
// Implement search debounce
// Implement tabs component
// 7. React Logic Questions

// You should practice problems like:

// Build Todo App logic
// Implement custom hook
// Implement useDebounce hook
// Implement useLocalStorage hook
// Build pagination logic
// Build accordion component
// 8. Advanced JS Logic (Interview Level)

// Start practicing:

// Currying function
// Polyfill for map
// Polyfill for filter
// Polyfill for reduce
// Closures
// Memoization
// Event Loop questions

// Example:

// function add(a){
//  return function(b){
//    return a + b
//  }
// }

// console.log(add(5)(3))
// Recommended Practice Order

// 1️⃣ Arrays
// 2️⃣ Strings
// 3️⃣ Objects
// 4️⃣ map/filter/reduce
// 5️⃣ Closures & promises
// 6️⃣ Debounce & throttle
// 7️⃣ React logic problems

// Best Practice Websites

// Practice here:

// LeetCode
// HackerRank
// CodeWars
// GeeksforGeeks
