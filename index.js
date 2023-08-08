const numberOfDrum=document.querySelectorAll('.drum').length
for(let i =0;i<numberOfDrum;i++){//take "for" loop for click one by one button
document.querySelectorAll('.drum')[i].addEventListener('click',function() {
    alert('I got Click');
});//for selecting any kind of text you need to write "querySelector after select tag then customize button"

    

}





