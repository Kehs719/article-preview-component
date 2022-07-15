const shareBtn = document.querySelector(".share-btn");
const shareBox = document.querySelector(".share-box")
let clicked = false;

shareBtn.addEventListener('click',()=>{
    console.log(clicked)
    if(clicked===false){
        clicked=true;
        shareBox.style.display="block";
        shareBox.style.animation="1s opacityIn";
    }
    else{
        clicked=false;
        shareBox.style.display="none";
        shareBox.style.animation="1s opacityOut ease-in reverse";
    }
        
    
})