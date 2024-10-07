// function* geno(){

    // for(let i=1; i<5; i++){
    //     yield 1,
    //     yield 2,
    //     yield 3,
    //     yield 4
    // }

        // i=0
    
            // yield 1,
            // yield 2,
            // yield 3,
            // yield 4
            
        
    // }


// let result= geno()
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next().value);














function* genn(){

    for(let i=5; i<=9; i++){
        yield i
    }

  
     
}

let re= genn()  // This does not run myGenerator's code immediately, re is an iterator


console.log(re.next());
console.log(re.next());
console.log(re.next());
console.log(re.next());
console.log(re.next());  //done is false because still more values are present
console.log(re.next());























function* gen() {
    try {
        yield 1;
        yield 2;
    } catch (e) {
        console.log('Caught:', e);
    }
}

const g = gen();
console.log(g.next().value); // 1
console.log(g.throw('Errorc!')); // Caught: Error!
