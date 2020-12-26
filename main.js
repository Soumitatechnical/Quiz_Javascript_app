const questions=[

    {
        Q:"What is the capital city of USA?",
        a:"Washington-DC",
        b:"New york City",
        c:"Lass Vegas",
        d:"Loss Angles",
        correct:"a"
    },
    {
        Q:"What is the first prime capital of India?",
        a:"Delhi",
        b:"Hydrabad",
        c:"Calcutta",
        d:"Chennai",
        correct:"c"
    },
    {
        Q:"What is the social media among the following?",
        a:"Facebook",
        b:"Gmail",
        c:"Google Spreadsheet",
        d:"Web browser",
        correct:"a"
    },
    {
        Q:"What is the second-highest pick of the world?",
        a:"Mount-Everest",
        b:"K2-Godwyn Austin",
        c:"Alps",
        d:"Sandakfu",
        correct:"b"
    },
    {
        Q:"What is the currency of Thailand?",
        a:"Yung",
        b:"Cents",
        c:"Ringit",
        d:"Bhat",
        correct:"d"
    }
];

let i=0;
let point=0;
let j=0;
let data=questions;
document.querySelector('.start-box').addEventListener('click', show);

// setInterval(gethearts, 300);

function show(){

    document.querySelector('.quiz-container').classList.remove('hide');
    firstload();
    document.querySelector('.quiz-container').classList.add('show');
    document.querySelector('.start-box').classList.add('hide');
    document.querySelector('.instructions').classList.add('hide');
   
    
}

// firstload();
function firstload(){

    let colors=['#ff6e7f', '#94716B', '#EDDE5D','#799F0C','#ffa751'];
    
    delselect();
    
    const a_text=document.getElementById("a_text");
    const b_text=document.getElementById("b_text");
    const c_text=document.getElementById("c_text");
    const d_text=document.getElementById("d_text");
    document.querySelector('.quiz-container').style.backgroundColor=colors[j];
    document.getElementById("question").innerHTML=questions[i].Q;
    a_text.innerHTML=data[i].a;
    b_text.innerHTML=data[i].b;
    c_text.innerHTML=data[i].c;
    d_text.innerHTML=data[i].d;

}


function getChecked(){

    let answer=undefined;
   
    let answerlists=document.querySelectorAll('.answer');
    answerlists.forEach(answerlist=>{
        if(answerlist.checked){
            answer= answerlist.id;
        }
    });

    return answer;
}

function delselect(){
   
    let answerlists=document.querySelectorAll('.answer');
    answerlists.forEach(answerlist=>{
        
            answerlist.checked=false;
        
    }); 
}

function gethearts(){
 const heart=document.createElement('div');
 heart.classList.add('heart');
 heart.style.left=Math.random()*100+'vw';
 heart.style.animationDuration=Math.random()*10+0.5+'s';
 heart.innerHTML='❤️❤️';
 document.body.appendChild(heart);

 setTimeout(()=>{
     heart.remove();
 }, 1000)
}

document.getElementById("btn").addEventListener("click", ()=>{
    const finalanswer=getChecked();
    if (finalanswer && finalanswer === data[i].correct){

        point++;
        document.getElementById('header-text').innerHTML=` ❤️❤️❤️Correct..You Scored ${point}`;
        document.getElementById('clap').play();
       gethearts();
       
        
    }else{
        document.getElementById('header-text').innerHTML=`😢😢😢<br />Wrong..Your Score remains same ${point}`;
        document.getElementById('ops').play();
       
    }
    
            i++;
            if(i<data.length){
                    j++;
                    firstload();
                    
            }else{  
                    document.getElementById('header-text').innerHTML=`You Completed 👏👏👏Score is ${point}`;
                    document.getElementById('clap').play();
                    document.body.style.background="Purple";
                    document.querySelector('.quiz-container').style.display="none";
                    
            }
   
});


