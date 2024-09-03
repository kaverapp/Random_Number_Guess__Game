let Easychances=0;
let hardchances=0;

let randomNumber;

const btns=document.querySelector(".easy");
const btnh=document.querySelector(".difficult");
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




//easy button
btns.addEventListener("click",()=>{
    box1.style.display="none";
    box2.style.display="block";

    playGame1();

})

//easy
const playGame1=()=>{
    randomGenerator();
    submit.disabled = false; // Re-enable submit button for the new game
    gsTxt.innerHTML = "Your Guess Info"; // Clear previous game messages
    chance1.innerHTML = "Chances left: 10"; // Reset chances display
    userInput.value = ""; // Clear input field
    Easychances = 0; // Reset chances counter
    
};


//hard button
btnh.addEventListener("click",()=>{
    box1.style.display="none";
    box2.style.display="block";

    playGame2();
})

//hard
const playGame2=()=>{
    randomGenerator();
    submit.disabled = false; // Re-enable submit button for the new game
    gsTxt.innerHTML = "Your Guess Info"; // Clear previous game messages
    chance1.innerHTML = "Chances left: 5"; // Reset chances display
    userInput.value = ""; // Clear input field
    hardchances = 0; // Reset chances counter
    
}

//submit button single
submit.addEventListener("click",()=>{

    let userVal=parseInt(userInput.value);
     console.log("user value is :",userVal);
     
    Easychances+=1;
    hardchances+=1;

    easy_result(userVal);

    hard_result(userVal);

});


//easy validator
function easy_result(userVal){
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
            playGame1(); // Reset the game
        },5000)
        
    }
};

//hard validator
function hard_result(userVal){
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
            playGame2(); // Reset the game
        },5000)
        
    }
};


//display loading
function showLoading(){
    loading.style.display = "flex"; // Use flex to center content

    main.style.display="none";
};

//hide loading
function hideLoading(){
    loading.style.display="none";
    main.style.display="block";
};