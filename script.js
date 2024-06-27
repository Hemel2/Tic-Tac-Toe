let boxes = document.querySelectorAll(".box");

let resetBtn =document.querySelector("reset-btn");
let newGameBtn =document.querySelector("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

 const reset

boxes.forEach((box) => {
    box.addEventListener("click",()=>
        {
            console.log("box was clicked");
if(turn0)
    {
        box.innerText="0"
    turn0=false;
    }
    else
    {
        box.innerText="x";
        turn0=true;
    }
     box.disabled=true;
     checkWinner();

        });
});

const ShowWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


const checkWinner=()=>{
    for(let pattern of winPatterns)
        {
            
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val =boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val !="" && pos3val !="")
                {
                    if(pos1val === pos2val && pos2val === pos3val)
                        {
                            console.log("winner",pos1val);
                            ShowWinner(pos1val);
                        }
                }
 } 
};



