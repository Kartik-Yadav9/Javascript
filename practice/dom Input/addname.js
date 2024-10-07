
let add= document.getElementById('add')
let remove=document.getElementById('remove')
let ul=document.getElementById('ul')
let input= document.getElementById('name')


add.addEventListener('click', function(){
  
   if(input.value.trim() !==''){
    let li =document.createElement('li')
    li.innerText=input.value
    ul.appendChild(li)
    input.value= ""
   }
   else{
        alert("enter a number")
   }
})





remove.addEventListener('click', function(){
    
   let lastli= ul.lastElementChild;
   if(lastli){
    ul.removeChild(lastli)
   }
})