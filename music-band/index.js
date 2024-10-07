let alldrum= document.querySelectorAll('button')

for(i=0; i<alldrum.length; i++){
    alldrum[i].addEventListener('click',function(){
        let inner= this.innerHTML
        player(inner)
    })
}

function player(key){

    switch(key){
    case "drum-sticks":
        let music1= new Audio("band tone/Drum-Sticks-Hit-C-www.fesliyanstudios.com.mp3")
        music1.play();
        break;
    

    case "snare-drum":
        let music2= new Audio("band tone/Snare-Drum-Hit-Level-5a-www.fesliyanstudios.com.mp3")
        music2.play();


    case "china-cymbal":
        let music3= new Audio("band tone/China-Cymbal-Crash-Level-6A-www.fesliyanstudios.com.mp3")
        music3.play();
        break;


     case "hi-hat":
        let music4= new Audio("band tone/Hi-Hat-Open-Hit-B3-www.fesliyanstudios.com.mp3")
        music4.play();
        break;

    case "floor-tom":
        let music5= new Audio("band tone/Floor-Tom-Drum-Hit-Level-6A-www.fesliyanstudios.com.mp3")
        music5.play();
        break;

    case "cymbal-crash":
        let music6= new Audio("band tone/cymbal-crash-5-167699.mp3")
        music6.play();
        break;

    case "bass-drum":
        let music7= new Audio("band tone/Bass-Drum-Hit-Level-6b-www.fesliyanstudios.com.mp3")
        music7.play();
        break;
    }


} 