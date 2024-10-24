//DOM

// const { reject } = require("async")


// let div = document.querySelector('div')

// div.addEventListener('click', ()=>{        //event bubbling
//     console.log('div');
    
// })








// let div = document.querySelector('div')
// let button = document.querySelector('button')

// div.addEventListener('click', ()=>{        //event capturing
//     console.log('div');
// }, true)

// button.addEventListener('click', ()=>{        
//     console.log('button');
// }, true)















// let num= "Hello, world"

// console.log(num.length);






// let num= [1,2,3,4]

// let ans= num.splice(1,2,'hi')
// console.log(num);







//add


//  let num= [1,2,3,'hi']

//  let ans=0

//  for(let i=0; i< num.length; i++){ 
//     ans= ans+ num[i]
//  }
//  console.log(ans);
 



// let num= [1,2,3]

// let num2= [1,1,1,1]

// console.log(num.concat(num2));

// console.log(...num,...num2);









//foreach

let num= [1,2,3,4,5,6,7,8,9]

let ans= num.forEach((number,index)=>(console.log(number, "index: ", index)
))







// const numbers = [10, 20, 30, 40, 50];

// let ans= numbers.indexOf(20)

// console.log(`index is ${ans}`);



//remove duplicates

// const numbers = [10, 20, 20, 30, 40, 40, 50];

// let uniqueSet= new Set(numbers)    //spread changes set into new array ...Set(5) { 10, 20, 30, 40, 50 }

// let num= [...uniqueSet]

// console.log(num);







//find max and min

// let arr = [10, 20, 30, 40, 50]

// let max= Math.max(...arr)    // spread to unpack array into individual
// console.log(max);


// let min= Math.min(...arr)
// console.log(min);













//array sort

// let arr = [10, 20, 30, 40, 50]

// let ans= arr.sort((a,b)=>{
//     return a-b              //asscend
// })

// console.log(ans);



// let arr = [10, 20, 30, 40, 50]

// let ans= arr.sort((a,b)=>b-a)   //descend
// console.log(ans);











//flattened a nested array

// let arr = [10, [20, [30, 19], 40], 50]

// let ans= arr.flat(2)
// console.log(ans);







//How do you check if a value exists in an array?
// Use includes(), indexOf(), or find().

// let arr = [11, 12, 13];
// let val=2


// let re= arr.indexOf(val)
// console.log('index0f', re);




// let ans1= arr.includes(3);   // true
// let ans2= arr.indexOf(2);    // -1 (not found)
// let ans3= arr.find(item => item === 3); // 3 (returns the element if found)

// console.log('includes', ans1);
// console.log('index0f', ans2);
// console.log('includes', ans3);








//while loop


// let pswd= ""

// while(pswd !== 'kartik'){
//   pswd=  prompt('enter a password')
// }

// alert('yes')
















// let a=(test)=>{
      
//         return "kartik"
//         console.log(`today is my ${test}`);   
// }

// a('exam')
// let re= a('result')
// console.log(re);

















// const numbers = [1, 2, 3, 4, 5];

// let ans= numbers.forEach((item)=>
//     console.log((item*item))
//     )














// let obj= {
//     name: 'kartik',
//     class: 2,
//     func: function(){           //window in method es-5
//         console.log(this);
        
//     }
// }

// obj.func()











// let a= {
//     name: 'kartik',
//     funn: ()=>{
//         console.log(this);     //es6 method
        
//     }
// }

// a.funn()
















//call apply bind


let user1= {
    name:'kartik',
    age: 25
}



let b = function (male){
    console.log(`Myself ${this.name}, age ${this.age}, ${male}`);    
}

b.call(user1, 'male')




let user2= {
    name: 'bruno',
    age: 3
}

b.call(user2, 'female')

b.apply(user2, ['apply'])


let bindfunc= b.bind(user1, 'bind')
bindfunc();  //this is a function



















//generator

// function* id(){

//     for(let i=0; i<5 ; i++){
//         yield i
//     }
// }


// let rslt= id()
// console.log(rslt.next());
// console.log(rslt.next());
// console.log(rslt.next());
// console.log(rslt.next());
// console.log(rslt.next());
// console.log(rslt.next().value);











//Promises

// let ex= new Promise((resolve, reject)=>{
//    resolve('done'), reject('error')
// })

// ex.then((res)=>console.log(res))
// .catch((error)=>console.log( error)
// )




//prototypal inheritance

// function Func(name, age){
//     this.x= name,
//     this.y= age
// }

// Func.prototype.proto= function() {
//     console.log(`My ${this.x} and my ${this.y} `);
    
// }

// let p1= new Func('kartik', 21)
// console.log(p1);



// p1.proto()


function Cons(name){
    this.name= name
}

Cons.prototype.func=function(){
    console.log(`My name is ${this.name}`);
    
}

let e1= new Cons('bruno')
console.log(e1);


e1.func()


























//constructor


// function Cons(first, second){

//     this.name= first
//     this.lname= second
// }

// let re= new Cons('kartik', 'yadav')
// console.log(re);






//closures

// function parent(){
//     let val= 10
    

//     function child(){
//         console.log(val);
//     }
//        return child
// }

// let ans =parent()
// ans()





