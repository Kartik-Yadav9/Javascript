let container= document.getElementById('container')
let prg= document.getElementById('progress')
let h3= document.querySelector('h3')

let count=0
let breaks= setInterval(function(){
    if(count==99){
        clearInterval(breaks)
        h3.innerHTML= 'downloading completed'
    }
    count++
    prg.style.width= count+'%'   //count will take it % or px,otherwise it will not work
    
}, 10);

