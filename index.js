var drum1 = new Audio("sounds/tom-1.mp3");
var drum2 = new Audio("sounds/tom-2.mp3");
var drum3 = new Audio("sounds/tom-3.mp3");
var drum4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");

function clickedButton(key) {

    var soundSelector = null;

    if (key.length != null) soundSelector = key
    else soundSelector = this.innerText


    switch (soundSelector) {
        case "w":
            drum1.play();
            break;
        case "a":
            drum2.play();
            break;
        case "s":
            drum3.play()
            break;
        case "d":
            drum4.play()
            break;
        case "j":
            crash.play()
            break;
        case "k":
            kick.play()
            break;
        case "l":
            snare.play()
            break;
        default:
            kick.play;
    }

}

function buttonAnimation(buttonValue){
    document.querySelector("." + buttonValue).classList.add("selected");

    setTimeout(function(){document.querySelector("." + buttonValue).classList.remove("selected")}, 100);
}

/**/
var buttonArray = document.querySelectorAll("button");

for (i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function(){
        clickedButton(this.innerHTML);
        buttonAnimation(this.innerText)
    });
}

document.addEventListener("keypress", function(e){
    clickedButton(e.key);
    buttonAnimation(e.key);
});

