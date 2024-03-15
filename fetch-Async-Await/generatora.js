function* geno(){

    // for(let i=1; i<5; i++){
    //     yield 1,
    //     yield 2,
    //     yield 3,
    //     yield 4
    // }

        i=0
    
            yield 1,
            yield 2,
            yield 3,
            yield 4
            
        
    }


let result= geno()
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next().value);


