let currShipTile;
let currPlantTile;
let score =0;
let gameOver=false;


window.onload = function() {
    setGame();
}

function setGame(){
    //set up the grid for the game board in html
    for (let i=0;i<9;i++){ //i goes from 0 to 8
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,1000);  //1 second
    setInterval(setPlant,2000); //2 second
}

function getRandomTile(){
    //random number from 0 to 9
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
if(gameOver){
    return;
}

if(currShipTile){
    currShipTile.innerHTML = "";
}

    let mole = document.createElement("img");
    mole.src = "BlackPearl.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id ==  num){
        return;
    }
    currShipTile = document.getElementById(num);
    currShipTile.appendChild(mole);
}
function setPlant() {
    if(gameOver){
        return;
    }

    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "davyjones.png";

    let num = getRandomTile();
    if(currShipTile && currShipTile.id ==  num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}
function selectTile(){
    if(gameOver){
        return;
    }

    if(this == currShipTile){
        score+=10;
        document.getElementById("score").innerText = score.toString(); //update string

    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText="GAME OVER: " + score.toString();
        gameOver = true;
        
    }
}
