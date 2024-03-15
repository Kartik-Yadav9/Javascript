// let a= document.getElementById('name')
// let add= document.getElementById('add')
// let remove= document.getElementById('remove')
// let ul= document.querySelector('ul')




// function func(){
//    let namee= a.value
   

//    let newli= document.createElement('li')
//    ul.appendChild(newli)

//    newli.innerHTML= namee
// }

// add.addEventListener('click', func)

// function removeFunc(){
//    let lis = ul.querySelectorAll('li')
//    if (lis.length > 0) {
//        let lastLi = lis[lis.length - 1]
//        lastLi.remove()
//    }
// }



// remove.removeEventListener('click', removeFunc)






let a = document.getElementById('name');
let add = document.getElementById('add');
let remove = document.getElementById('remove');
let ul = document.querySelector('ul');
let liArray = []; // Array to store references to dynamically created li elements

function func() {
    let namee = a.value;
    let newli = document.createElement('li');
    newli.textContent = namee;
    ul.appendChild(newli);
    liArray.push(newli); // Add the newly created li to the array
}

function removeFunc() {
    if (liArray.length > 0) {
        let lastLi = liArray.pop(); // Remove the last added li from the array
        lastLi.remove(); // Remove the last added li from the DOM
    }
}

add.addEventListener('click', func);
remove.addEventListener('click', removeFunc);



















// function func(){
//    let input= a.value

//    let newli= document.createElement('li')
//    ul.appendChild(newli)

//    newli.innerHTML= input
// }

// add.addEventListener('click', func)



// r.removeEventListener('click', func2)


