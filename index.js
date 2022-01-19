for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var elem=this.innerHTML;
        makeSound(elem);
        buttonAnimation(elem);
    })
}
document.addEventListener("keydown",function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var sound=new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound=new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound=new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound=new Audio("sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound=new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            var sound=new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "l":
            var sound=new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        default:
            
    }
}

function buttonAnimation(key){
    var elem = document.querySelector("."+key);

    elem.classList.add("pressed");

    setTimeout(function(){
        elem.classList.remove("pressed");
    },100);

}