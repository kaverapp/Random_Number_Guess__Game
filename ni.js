let Easychances=0;
let hardchances=0;

let randomNumber;

let btn=document.querySelectorAll(".bt-eh");
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



let condition=false

// button -both easy and difficult choices
btn.forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        playGame();
        let btnC=ele.getAttribute("class",ele);
        box1.style.display="none";
        box2.style.display="block";

        if(btnC=="btn bt-eh easy"){
            console.log("easy");
           condition=true; 
        }
        else if(btnC=="btn  bt-eh difficult"){
            console.log("hard");
            condition=false
        }
    })
})



//submit button single
submit.addEventListener("click",()=>{

    let userVal=parseInt(userInput.value);
     console.log("user value is :",userVal);
     
    Easychances+=1;
    hardchances+=1;

    result(userVal);

    

});

//both easy and hard chance store
const playGame=()=>{
    randomGenerator();
    submit.disabled = false; // Re-enable submit button for the new game
    gsTxt.innerHTML = "Your Guess Info"; // Clear previous game messages
    chance1.innerHTML = "Chances left: "; // Reset chances display
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
        gsTxt.innerHTML="SORRY TRY NEXT TIME";
        submit.disabled=true;
        timeOut();
        
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
        
        chance1.innerHTML=hardchances;
    }else{
        gsTxt.innerHTML="SORRY TRY NEXT TIME";
        submit.disabled=true;
        timeOut();
    }
}
};

//time out setting
function timeOut(){
   
        showLoading();
  


    setTimeout(()=>{
        hideLoading();
        box1.style.display = "block";
        box2.style.display = "none";
        playGame(); // Reset the game
    },8000)
}

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