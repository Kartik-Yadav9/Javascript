let start=  document.getElementById('start')
let stops= document.getElementById('stop')
let reset= document.getElementById('reset')
let zeroCounts= document.getElementById('timing')


let sec=0;
let min=0;
let hr=0;
let interval;



let timer= function(){
    sec++
    
if(sec==60){
    min=min+1
    sec=0
}

 if(min==60){
    hr=hr+1
    min=0
    sec=0
}

    zeroCounts.innerHTML= hr+":"+min+":"+sec  
    zeroCounts.style.margin= "auto"
}


start.addEventListener('click', function(){
    interval= setInterval(timer, 1000)
})

stops.addEventListener('click', function(){
    clearInterval(interval )
} )

reset.addEventListener('click', function(){
    sec=0;
    min=0;
    hr=0;
    zeroCounts.innerHTML= hr+"0:"+min+"0:0"+sec 

})


