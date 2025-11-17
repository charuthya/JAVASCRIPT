let randomNum,score=0,count=0 ;
let randomNum1,score1=0,count1=0 ; 
let p1Position = 0;
let p2Position = 0;

function updateBoardP1() {

    if (score > 100) score = 100;

    if(p1Position > 0){
        document.getElementById("cell-" + p1Position).style.backgroundColor = "";
    }

    p1Position = score;

    if(p1Position > 0 && p1Position <= 100){
        document.getElementById("cell-" + p1Position).style.backgroundColor = "red";
    }
}

function updateBoardP2() {

    if (score1 > 100) score1 = 100; 

    if(p2Position > 0){
        document.getElementById("cell-" + p2Position).style.backgroundColor = "";
    }

    p2Position = score1;

    if(p2Position > 0 && p2Position <= 100){
        document.getElementById("cell-" + p2Position).style.backgroundColor = "blue";
    }
}


let roll = document.querySelector("#roll");
let msg1 = document.querySelector("#message_1");
let msg2 = document.querySelector("#message_2");
let player1= document.querySelector("#message_3")
let random = document.querySelector("#random")
let out = document.querySelector("#Out")
let P1 = document.querySelector("#P1")

let text1 = document.querySelector("#text_1");
let text2 = document.querySelector("#text_2");
let p2= document.querySelector("#message_4")
let random1 = document.querySelector("#random1")
let out1 = document.querySelector("#Out1")
let P2 = document.querySelector("#P2")

player1.textContent = ""
msg1.textContent = ""
random.textContent = ""
msg2.textContent = ""
out.textContent = ""

p2.textContent = ""
text1.textContent = ""
random1.textContent = ""
text2.textContent = ""
out1.textContent = ""

roll.disabled = true
P2.disabled = true


function play1()
{
    player1.textContent = "Player 1 (You)"
    P1.disabled=true
    P2.disabled=true
    roll.disabled=false;

    roll.onclick = () =>
    {
        randomNum = Math.floor(Math.random()*7);

        if(score + randomNum <= 100){
            score += randomNum;
        }

        if(randomNum === 6){
            count++
            msg1.textContent = "Lucky Six 🤩 = "+count;
            setTimeout(()=>{msg1.textContent=""},1000)
        }
        else if(randomNum === 0){
            out.textContent = "OUT 🙃"
            setTimeout(() => {  
        out.textContent = "";  
    }, 1000);
            roll.disabled=true
            P2.disabled = false
        }
        else{
            random.textContent = "Your Number : "+randomNum
            msg2.textContent  = "Your Score : "+score

            updateBoardP1();
            checkWinner();
        }
    }
}


function play2()
{
    p2.textContent = "Player 2 (Opponent)"
    P1.disabled = true
    P2.disabled = true
    roll.disabled = false

    roll.onclick = () =>
    {
        randomNum1 = Math.floor(Math.random()*7);

        if(score1 + randomNum1 <= 100){
            score1 += randomNum1;
        }

        if(randomNum1 === 6){
            count1++
            text1.textContent = "Lucky Six 🤩 = "+count1;
            setTimeout(()=>{text1.textContent=""},1000)
        }
        else if(randomNum1 === 0){
            out1.textContent = "OUT 🙃"
            setTimeout(() => {  
        out1.textContent = "";  
    }, 1000);
            roll.disabled=true
            P1.disabled=false
        }
        else{
            random1.textContent = "Your Number : "+randomNum1
            text2.textContent  = "Your Score : "+score1

            updateBoardP2();
            checkWinner();
        }
    }
}


function checkWinner(){

    if(score === 100){
        roll.disabled = true;
        P1.disabled = true;
        P2.disabled = true;

        setTimeout(() => {
            alert("🎉 Player 1 Wins the Game! 🏆");
        }, 200);
    }

    if(score1 === 100){
        roll.disabled = true;
        P1.disabled = true;
        P2.disabled = true;

        setTimeout(() => {
            alert("🎉 Player 2 Wins the Game! 🏆");
        }, 200);
    }
}


// -------- RESET ----------
function reset(){
    location.reload();
}
