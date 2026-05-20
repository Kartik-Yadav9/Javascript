function ex (a,b, cb){
    let result= a+b
    cb(result)
}

ex(2,2, function(re){
    console.log(re);
    
})

// map, filter, reduce are examples