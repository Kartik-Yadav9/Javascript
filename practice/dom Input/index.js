let form= document.getElementById('form')
let inputs= document.querySelectorAll('input[type= "text"]')
let h3= document.getElementById('h3')



form.addEventListener('submit', function(ev){
    ev.preventDefault()
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value.trim()===''){
           h3.textContent= "error"
           h3.style.color= 'red' 
           break;
        }
    }
})