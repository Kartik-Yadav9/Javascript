

async function kartik(){
  try{
    let x= await axios.get('https://fakestoreapi.com/products/1')
    console.log(x.data.title);
    return x

  } catch(error){
   console.log( error.message)}
}

console.log('test1');
console.log('test2');


async function result(){
    let y=  await kartik()
    console.log(y.data.price)


console.log('test3-----');                  //test3 and test4 will run after result bcoz we have placed
console.log('test4-----');                  //it in a async function

}
// 
result()











// console.log('upper')
// console.log('upper')


// async function xyz(){
//     await fetch('https://fakestoreapi.com/products/1')
// .then(res=>res.json())
// .then(res=>console.log(res.category))

// console.log('in async lower')

// }
// xyz()
// console.log('out async lower')














// function kartik(){
//     let x= axios.get('https://fakestoreapi.com/products/1')    
//     return x
// }

// console.log('test1');
// console.log('test2');


//  function result(){
//     let y=   kartik()
//     console.log(y.title)


// console.log('test3-----');                  //test3 and test4 will run after result bcoz we have placed
// console.log('test4-----');                  //it in a async function

// }
// // 
// result()












// console.log('upper')
// console.log('upper')


//  let noo= setInterval(() => {
    
//     async function xyz(){
//         await fetch('https://fakestoreapi.com/products/1')
//         .then(res=>res.json())
//         .then(res=>console.log(res.category))
    
//         console.log('in async lower')
    
//     }
//     xyz()
//     clearInterval(noo)

//  },1000); 

// console.log('out async lower')











// let clr =setInterval(()=>{
//     function ax(){
//         axios.get('https://fakestoreapi.com/products/1').then((res)=>(
//            console.log(res.data.price)
           
//        ))
//    }

//    ax()
//    clearInterval(clr)

//    console.log('axios used');
   

// },3000)





