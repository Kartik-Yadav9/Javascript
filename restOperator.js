let a=(...values)=>{
    console.log(values);

    let r=values.map(item=>item+1)
    console.log(r,'inner');
}

// a(1,2)
a(4,5,6)






// let b= ['sam','peter', 'daniel']

// let re= b.map(item=>item.toUpperCase())
// console.log(re);







// let emp= [
//     {name:'ka', class:'2'},
//     {name:'kaq', class:'2'},
//     {name:'kae', class:'1'}

// ]

// let tt= emp.filter(item=>item.class==='2')
// console.log(tt);







// const score= [100,200,300,400]

// let nas= score.reduce((accumulator, newvalue)=>{
//     return accumulator+ newvalue
// }, 1)


// console.log(nas);









//array destructure

// const numbers = [3,8, 7];
// const [one, two, three] = numbers;

// console.log(one);   // Output: 1
// console.log(two);   // Output: 2
// console.log(three); // Output: 3








//object destructure


// const person = {
//     name: 'John',
//     age: 30,
//     profession: 'Engineer'
//   };
  
//   const { name, age, profession } = person;
  
//   console.log(name);       // Output: John
//   console.log(age);        // Output: 30
//   console.log(profession); // Output: Engineer
  
