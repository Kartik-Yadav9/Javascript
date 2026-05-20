


let user1= {                                      // In JavaScript, call, apply, and bind are methods available
    name: "suraj",                                // on functions that allow you to explicitly set the
    age: 23,                                      // value of this and pass arguments to a function.   
}

let test= function(city){               
    console.log(this.name,this.age, city);
}

test.call(user1,', delhi call')              //call use

test.apply(user1,[", kanpur apply"])          //apply use in array is done


let binding= test.bind(user1);
binding( ", Mumbai bind")                    //bind use



let user2= {
    name: "chand",
    age: 27
}

test.apply(user2,[", lucknow apply"])                 //apply use in array




























// let user1= {
//     name: "suraj",
//     age: 23,                        
//     test: function(){               
//         console.log(this.name);
//     }
    
// }

// user1.test()


// let user2= {
//     name: "chand",
//     age: 27
// }

// user1.test.call(user2)                 //using func in user2 from inside user1

// let bind= user1.test.bind(user2)
// bind();






