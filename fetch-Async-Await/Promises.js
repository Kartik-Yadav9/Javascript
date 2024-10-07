// let prms= new Promise((resolve,reject)=>{

// const { reject } = require("async")

//     resolve('this is resolves'),reject('this is rejected')
// })

// prms
// .then((res)=>{
//     console.log(res)
// })
// .catch((error)=>{
//     console.log(error);
// })





let naew = new Promise((resolve,reject)=>{
    resolve('done'), reject('no')
})

naew.then((res)=>console.log(res))
.catch((err)=>console.log(err))


 



// let prms= new Promise((resolve,reject)=>{

//     resolve('this is resolves'),reject('this is rejected')
// })

// prms
// .then((res)=>{
//     console.log(res)                                                     //to use multiple then, u have to use return
//     return res;
// }).then((res)=>{
//     console.log(res)
//     return res;
// }).then((res)=>{
//     console.log(res)
//     return res;
// }).then((res)=>{
//     console.log(res)
//     return res;
// }).then((res)=>{
//     console.log(res)
// }).catch((res)=>{
//     console.log(res)
// })













// Simulate an asynchronous task using a promise
// function asyncTask(message, delay) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log(message);
//         resolve(message);
//       }, delay);
//     });
//   }
  
//   // Chain the promises
//   asyncTask('Task 1', 1000)
//     .then(result => {
//       console.log('Completed:', result);
//       return asyncTask('Task 2', 2000);
//     })
//     .then(result => {
//       console.log('Completed:', result);
//       return asyncTask('Task 3', 1500);
//     })
//     .then(result => {
//       console.log('Completed:', result);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
  











// function xyz(){
//     return new Promise((resolve, reject)=>{
//         resolve("resolved"), reject("rejected")
//     })
// }

// xyz().then((res)=>{
// console.log(res,"0")
// return xyz()})

// .then((nes)=>{
//     console.log(nes, "1")
//     return xyz()
// })

// .catch(err=>console.log("error"))