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



// const quizbody=document.getElementsByClassName("quiz-container");

let i=0;
let point=0;

let data=questions;
firstload();

function firstload(){

    delselect();
   
    // let data=questions;
    const a_text=document.getElementById("a_text");
    const b_text=document.getElementById("b_text");
    const c_text=document.getElementById("c_text");
    const d_text=document.getElementById("d_text");

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
    // let answers=document.getElementsByClassName('answer');
    let answerlists=document.querySelectorAll('.answer');
    answerlists.forEach(answerlist=>{
        
            answerlist.checked=false;
        
    });
}



document.getElementById("btn").addEventListener("click", ()=>{

    
    const finalanswer=getChecked();

    if (finalanswer && finalanswer === data[i].correct){
        point++;
        alert(`Correct...Your scored ${point}`);
    }else{
        alert(`Oh Wrong...Your scored ${point}`);
    }
    i++;
            if(i<data.length){
                
                firstload();
            }else{
                    // quizbody.innerHTML =`yeeeee`;
                    
                    alert(`hey you completed successfully and your score is ${point} out of 5`);
            }
   


});


// if(finalanswer){
//     if( finalanswer==data[i].correct)
//         point++;

//     i++;
//     if(i<data.length){
//         firstload();
//     }else{
//             // quizbody.innerHTML =`yeeeee`;
            
//             alert(`hey you completed successfully and point is ${point} out of 5`);
//     }
//         // console.log("hii");

// }