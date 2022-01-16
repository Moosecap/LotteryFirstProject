
//on load generate the numbers -> then place them in our already made elements


window.addEventListener("load", getWinningNum);
const container = document.querySelector("#container")
const moneySpent = document.querySelector(".moneySpent");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
let set1;
let set2;
let set3;
let set4;
let set5;
let money = 0;
const userData = document.querySelector(".userData");
const userNumMessage = document.querySelector(".userNumMessage");
document.addEventListener("mousemove", getPlayerNum);


function getWinningNum() {
    set1 = Math.floor((Math.random() * 69) + 1);
    set2 = Math.floor((Math.random() * 69) + 1);
    num1.textContent = set1;
    num2.textContent = set2;
}










function getPlayerNum() {
    let playerNum1 = Math.floor((Math.random() * 69) + 1);
    let playerNum2 = Math.floor((Math.random() * 69) + 1);
    
    money += 2;
    moneySpent.textContent = `You have spent: $${money}`;
    userNumMessage.textContent = `Players Picks:     ${playerNum1}   ${playerNum2}`;

    if ((playerNum1 !== playerNum2) && (playerNum1 === set1 || playerNum1 === set2) && (playerNum2 === set1 || playerNum2 === set2)) {
        document.removeEventListener("mousemove", getPlayerNum);
        userNumMessage.textContent =   `Players Picks:${playerNum1}   ${playerNum2}   YOU WON!!`;
        const btn = document.createElement("button");
        btn.textContent = "Draw New Winner";
        userData.appendChild(btn);
        btn.addEventListener("click", () => document.location.reload(true));



    }

   
    
    
}









