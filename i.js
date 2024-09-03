let Easychances=0;
let hardchances=0;

let randomNumber;

let btns=document.querySelector(".easy");
let btnh=document.querySelector(".difficult");
const box1=document.querySelector(".box1");
const box2=document.querySelector(".box2");
const submit=document.querySelector(".submit-guess");
const chance1=document.querySelector(".chance");
const gsTxt=document.querySelector(".gsTxt");
const userInput=document.querySelector(".userVal");
const loading=document.querySelector("#loading");
const main=document.querySelector("main");

//generate random number
const randomGenerator=()=>{
     randomNumber=Math.floor(Math.random()*100);
     console.log(randomNumber);
     
}


let condition=false;


//easy button
btns.addEventListener("click",()=>{
    condition=true;
    box1.style.display="none";
    box2.style.display="block";
    
    if(condition==true){
        playGame();
    }
    else{
        console.log("hard play");
        
    }
   

});
//hard button
btnh.addEventListener("click",()=>{
    condition=false;
    box1.style.display="none";
    box2.style.display="block";
    
    if(condition==false){
        playGame();
    }
    else{
        console.log("easy play");
        
    }

})


//submit button single
submit.addEventListener("click",()=>{

    let userVal=parseInt(userInput.value);
     console.log("user value is :",userVal);
     
    Easychances+=1;
    hardchances+=1;

    result(userVal);

    

});

//both easy and hard
const playGame=()=>{
    randomGenerator();
    submit.disabled = false; // Re-enable submit button for the new game
    gsTxt.innerHTML = "Your Guess Info"; // Clear previous game messages
    chance1.innerHTML = "Chances left: "; // Reset chances display
    userInput.value = ""; // Clear input field
    
    Easychances = 0; // Reset chances counter
    hardchances=0;

    userInput.value = ""; // Clear input field

};



//both easy and hard validator
function result(userVal){  
if(condition==true){
    if (Easychances<=10) {
        if(userVal>randomNumber){
            gsTxt.innerHTML="your guess is high !";
            
        }
        else if(userVal<randomNumber){
            gsTxt.innerHTML="your guess is low !";
        }
        else if(userVal===randomNumber){
            gsTxt.innerHTML="yay, you won the match";
            submit.disabled=true;
        }
        
        chance1.innerHTML=Easychances
    }else{
        chance1.innerHTML="lost"
        gsTxt.innerHTML="SORRY TRY NEXT TIME";
        setTimeout(()=>{
            showLoading();
        },3000);


        setTimeout(()=>{
            hideLoading();
            box1.style.display = "block";
            box2.style.display = "none";
            playGame(); // Reset the game
        },5000)
        
    }
}
else{
    if (hardchances<=5) {
        if(userVal>randomNumber){
            gsTxt.innerHTML="your guess is high !";
            
        }
        else if(userVal<randomNumber){
            gsTxt.innerHTML="your guess is low !";
        }
        else if(userVal===randomNumber){
            gsTxt.innerHTML="yay, you won the match";
            submit.disabled=true;
        }
        
        chance1.innerHTML=hardchances
    }else{
        chance1.innerHTML="lost"
        gsTxt.innerHTML="SORRY TRY NEXT TIME";
        setTimeout(()=>{
            showLoading();
        },3000);


        setTimeout(()=>{
            hideLoading();
            box1.style.display = "block";
            box2.style.display = "none";
            playGame(); // Reset the game
        },5000)
        
    }
}
};


//display loading
function showLoading(){
    loading.style.display = "block"; // Use flex to center content

    main.style.display="none";
};

//hide loading
function hideLoading(){
    loading.style.display="none";
    main.style.display="block";
};