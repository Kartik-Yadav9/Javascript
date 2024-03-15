// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))



// fetch('https://fakestoreapi.com/products/1')
// .then(rel=>rel.json())                                              //trying fetch
// .then(res=>console.log(res.description))















// async function kartik(){
//     let x= await fetch ('https://fakestoreapi.com/products/1')
//     let data=x.json()
//     return data
// }



// console.log('test1');
// console.log('test2');


// async function result(){
//     let y=  await kartik()
//     console.log(y.title)


// console.log('test3-----');                  //test3 and test4 will run after result bcoz we have placed
// console.log('test4-----');                  //it in a async function

// }

// result()








// async function xyz(){
//     let x= await fetch('https://fakestoreapi.com/products/1')
// .then(res=>res.json())
//     console.log(x.category);
// }

// console.log('test')
// console.log('test')

//  async function abc(){                                       //same async await practice
//     await xyz()
// console.log('test')
// console.log('test')}

// abc()






// const yy= new Promise(function(resolve,reject){
//     fetch('https://fakestoreapi.com/products/1')
//     .then(res=>res.json())
//     .then(ress=>{
//         if(ress.price>100){
//             resolve()
//         }                                                                   //use of promise resolve and reject
//             else{
//                 reject()
//             }})
// })

// yy.then(function(){console.log('true')})
// .catch(function(){console.log('false')})











// function bye(a,b){
//     console.log('bye');
//    b() 
// }                                               // call back function
// bye(1, function ww(){
//     console.log('byeeeeeeeee');
// })



function demo(url, callback){
    fetch(url)
    .then(res=>res.json())
    .then(result=>callback(result))

}

demo('https://fakestoreapi.com/products/1', function demos(result){
    console.log(result);
})