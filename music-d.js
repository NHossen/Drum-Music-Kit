// 1.Detecting Button Press by click event

const numberOfDrum=document.querySelectorAll('.drum').length
for(let i =0;i<numberOfDrum;i++){//take "for" loop for click one by one button
document.querySelectorAll('.drum')[i].addEventListener('click',function() {
 
// Showing inner html by alert
// alert(this.innerHTML);
// Change innerHtml Text Color
// this.style.color='yellow';

            // Switch Statement use for sounds play one by one button
var buttonInnerHTML=this.innerHTML;  
makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML)
    
});//for selecting any kind of text you need to write "querySelector after select tag then customize button"

}

// by nonenames function make keyboard press also "keypress" Eventlistener used for Function;

//2. Detectting keypress from keyboard
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})



                                              // Make sound Function
//3 detectiong keyboard press
function makeSound(key){

    switch (key) {
        // First key
        case'w'://first button innerHtml
             var audio=new Audio('sounds/tom-1.mp3');
             audio.play();
            break;
            //second key
            case 'a':
             var audio=new Audio('sounds/tom-2.mp3');
             audio.play();
             break;
            //  Third key
             case 's':
                var audio=new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
                //  Four key
             case 'd':
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
                //  Five key
             case 'j':
                var audio=new Audio('sounds/crash.mp3');
                audio.play();
                break;
                //  Six key
             case 'k':
                var audio=new Audio('sounds/snare.mp3');
                audio.play();
                break;
                //  seven key
             case 'l':
                var audio=new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;
    
        default: console.log()
            // break;
     }  

}  


                                // buttons Animation


 function buttonAnimation(currentKey){

  var activeButton= document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function(){

   activeButton.classList.remove('pressed');

  },100);

 }                               
    // var audio=new Audio('sounds/tom-1.mp3');
    // audio.play();

                                        // Important Things


// Showing inner html by alert
// alert(this.innerHTML);
// Change innerHtml Text Color
// this.style.color='yellow';

   

