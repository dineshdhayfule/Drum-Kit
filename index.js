for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttoninnerHTML = this.innerHTML;
        playSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    });
}

document.addEventListener("keypress",function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(buttoninnerHTML){
    switch (buttoninnerHTML) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(buttoninnerHTML) {
    var activeButton=document.querySelector("."+buttoninnerHTML);
    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100);
}



function plw()
{
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
}
function pla()
{
    var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
}
function pls()
{
    var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
}
function pld()
{
     var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
           
}
function plj()
{
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            
}
function plk()
{
    
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
           
}
function pll()
{
     
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();

}







// var crash=new Audio('sounds/crash.mp3');
// crash.play();