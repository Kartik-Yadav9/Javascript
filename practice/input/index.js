let box1= document.getElementById('box1')
let box2= document.getElementById('box2')
let box3= document.getElementById('box3')

let btn1= document.getElementById('btn1')
let btn2= document.getElementById('btn2')
let btn3= document.getElementById('btn3')
let reset= document.getElementById('reset')


function func(){
    box1.style.visibility= 'visible'
    box2.style.visibility= 'hidden'
    box3.style.visibility= 'hidden'
}

btn1.addEventListener('click',func)

function func2(){
    box1.style.visibility= 'hidden'
    box2.style.visibility= 'visible'
    box3.style.visibility= 'hidden'
}

btn2.addEventListener('click',func2)



function func3(){
    box1.style.visibility= 'hidden'
    box2.style.visibility= 'hidden'
    box3.style.visibility= 'visible'
}

btn3.addEventListener('click',func3)
 


function func4(){

    setInterval(function() {
        
        box1.style.visibility= 'hidden'                //using setimeout
        box2.style.visibility= 'hidden'
        box3.style.visibility= 'hidden'   
    }, 3000);
}



reset.addEventListener('click', func4)

