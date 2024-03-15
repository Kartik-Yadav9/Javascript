function num(n,b){


let sum=0
let p=1

while(n>0){

    let digit=n%2
n=Math.floor( n/2)
sum+=digit*p
p=p*10
}  
                             //decimal to binary....divide the number by base and then multiply by decimal base 
return sum

}

let result=num(24,2)
console.log(result);