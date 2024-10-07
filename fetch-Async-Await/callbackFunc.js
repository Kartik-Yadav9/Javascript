

// let func= (callback, name)=>{
    
//     console.log("hii "+ name);
//     callback()
    
// }                                                            //callback function

// let call= ()=>{
//    console.log("bye"); 
// }

// func(call,"Kartik")











//callback hell

function first(second) {
    console.log("test 1");
    second();
}

function second(third) {
    console.log("test 2");
    third();
}

function third(fourth) {
    console.log("test 3");
    fourth();
}

function fourth(taskdone) {
    console.log("test 4");
    taskdone()
}

// Callback Hell Example
first(() => {
    second(() => {
        third(() => {
            fourth(()=>
                console.log("task done"));
        });
    });
});











// function sky(one, callback){
// callback()
// }

// sky(1,function(){
//     console.log("hii");
// })













// function myfunc(url,callback) {

//     fetch(url)
//     .then(raw=>raw.json())
//     .then(res=>callback(res.title))
//     .catch(err=>(err))
   
    
// }

// myfunc("https://fakestoreapi.com/products/1", function (res) {
//     console.log(res);
// })