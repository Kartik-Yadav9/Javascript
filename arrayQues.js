// find the largest and smallest element



// const arr = [2, -2, 6, 7, 8];

// let largest= Math.max(...arr)
// console.log(largest);

// let smallest= Math.min(...arr)
// console.log(smallest);



// let largest= arr[0];

// for(let i=0; i<arr.length; i++){
//     if (arr[i]>largest) {
//        largest= arr[i] 
//     }
//     console.log("---",largest);
// }

// console.log(largest);


















// find the  smallest element


// const arr = [3, -2, 1, 5, 8];

// let smallest= arr[0]

// for(let i=0; i<arr.length; i++){
//     if (arr[i]< smallest) {
//         smallest= arr[i]
//     }
    
// }console.log(smallest);
















// Reverse the elements of the array in place.

// const arr = [1, 2, 3, 4, 5];

// let re= arr.reverse()
// console.log(re);










// let a= [1,2,3,4]

//  let ans= a.filter(item=>item>2)

//  console.log(ans);
 



// let ans= a.filter((i)=>{
//     return i<4
// })

// console.log(ans);









// let a= ['A','B', 'W', 'X' , 'Y', 'Z']


// let ans= a.slice(2,4)
// console.log(ans);








// let nas= a.splice(2,  1 , 22)

// console.log(a);









// let a= ['A','B', 'W', 'X' , 'Y', 'Z']

// let ans= a.slice(1,4)

// console.log(ans);























// const a= [1,3,4,5,6]

// let ans= a.reduce((accu, curr)=>(accu+ curr),0)
// console.log(ans);





// let ans= a.reduce((arrays, currentvalue)=>{
//     return arrays+ currentvalue
// }, 0)

// console.log(ans);










// the sum of all elements in the array.


// const arr = [1, 2, 3, 4, 5];


// let tot=0

// for(let i=0; i<arr.length; i++){
//     tot += arr[i]
// }

// console.log(tot);













// Determine if a given value exists in the array.

const arr = [1, 2, 3, 44, 5];
const value = 44;



// let ans= arr.indexOf(44)
// console.log(ans);

// let ans= arr.findIndex((item)=> item === value)
// console.log('aa',ans);







// for(let i=0; i<arr.length; i++){
//     if (value==arr[i]) {
//         console.log ('yes, the ans is ', arr[i]);
//     }
    
// }












// Remove duplicate elements from an array

// const arr = [1, 2, 2, 3, 6, 6, 4, 4, 5];


// // you've provided utilizes the Set object in JavaScript to remove duplicates from an array. 

// let re= new Set(arr)
//  let ans= [...re];//Using Set along with the spread operator is a modern and efficient way to remove duplicates from an array in JavaScript.
// console.log(ans);













// Reverse a String:

// const str = "hello world from kartik"; 

// let res= str.split(" ").reverse().join(' ')
// console.log(res);




// different way

// let lngth= str.length
// let oneline= ""

// for(let i=lngth-1; i>=0; i--){
//     oneline  += str[i]
// }

// console.log(oneline);


















// Count Vowels and Consonants

// const str = "hello world";

// lengt= str.length

// let vowels=0;
// let consonants=0

// for(let i=0; i<lengt; i++){

//     if(str[i]=== 'a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//          vowels++;
       
//     }

//     else if(str[i]=== " "){
       
//          consonants += 0
//     }

//     else{
//           consonants++
         
//     }
// }


// console.log(`vowels: ${vowels}`);


// console.log(`consonants: ${consonants}`);















// Find the first character in a string that does not repeat.




// const str = "swiss";


// for (let i = 0; i < str.length; i++) {
//     let isUnique = true;
    
//     for (let j = 0; j < str.length; j++) {
//         if (i !== j && str[i] === str[j]) {
//             isUnique = false;
//             break;
//         }
//     }
    
//     if (isUnique) {
//         console.log(str[i]);
//         break;
//     }
// }
