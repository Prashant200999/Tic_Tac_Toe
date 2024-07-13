let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnOfX = true;
let count = 0;


const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame = () => {
    turnOfX = true;
    count = 0;
    enableBoxes();

  };

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnOfX){
        box.innerText = "X";
        turnOfX = false;
    }else{
        box.innerText = "O"
        turnOfX = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner){
        gameDraw();
    }
   
    });
});

const gameDraw = () => {
    alert("The Game id Draw.");
     resetGame();
 
  };

  const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };

  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };

const showWinner = (winner) => {
    alert(`Congratulations the Winner is " ${winner} ".`);
    
     resetGame();
}

const checkWinner = () => {
    for (let pattern of winningPattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 !== "" && position2 !== "" && position3 !== ""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1);
                return true;
            }
        }
    }
    return false;
};


resetBtn.addEventListener("click", resetGame);