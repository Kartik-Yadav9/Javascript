//--------------------------------------Easy way------------------------------------------

// class Bodmas{

//     val= 0

//     add(added) {
//         this.val = this.val + added;  // `this.val` refers to the `val` property of the current instance
//         console.log(this.val);  // Log the updated value of `val`
//         return this;  // Return the entire object (e.g., `ans`), enabling method chaining
//     }

//     subtract(subs) {
//         this.val = this.val - subs;  // `this.val` is modified
//         return this;  // Return the entire object again for chaining
//     }


//     divide(div){
//         this.val= this.val / div
//         console.log(`ans: ${this.val}`);
        
//         return this
//     }
// }


// let ans= new Bodmas()                         // Create an instance of `Bodmas`
// ans.add(4).subtract(2).divide(2)





















//-------------------------------------------little bit difficult-------------------------------------------------


class Bodmas{

    constructor(val=0){
        this.val= val
    }

    add(add){
        this.val= this.val + add
        console.log(this.val);
        return this   
    }

    subs(sub){
        this.val= this.val - sub
        console.log(this.val , 'sub');
        return this
        
    }

    multiply(mul){
        this.val= this.val * mul
        console.log(`final-> ${this.val}`);
        
        return this
    }
}

let ans = new Bodmas()
ans.add(5).subs(2).multiply(2)