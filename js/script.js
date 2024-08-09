const mainbox = document.getElementsByClassName("sqrs"); // elementos HTML con la clase sqrs
const marcadorX = 0; //almacenar marcador de jugador X.
const marcadorO = 0;    //almacenar marcador de jugador o.
const gameActivo = true; //verificaque se sobre escriba si se gano
const playerTurn = "x";  //turno de jugador actual

// funcion para el marcador en el index
function updateScoreboard(){
    document.getElementById("marcador_x").textContent= marcadorX;
    
    document.getElementById("marcador_o").textContent= marcadorO;
}

// funcion para el marcador en local storage
function updateScore(){
    localStorage.setItem("marcadorX",marcadorX);
    localStorage.setItem("marcadorO",marcadorO);

}
// funcion para limpiar el marcador 
function clearScore(){
    marcadorX = 0;
    marcadorO = 0;
    updateScore();
    updateScoreboard();
}

// funcion para el click en la celda
function handleClick(event) {
    if (!gameActivo)
        return;
const square = mainbox[index];
if (square.textContent === ""){
    square.textContent = playerTurn;

    // cambia color al dar click
    if (playerTurn === "x"){
        square.style.backgroundColor ="#f0f0f0";
    }else {
        square.style.backgroundColor ="#d0d0d0";
    }
    // revisa ganador depues del momviemiento
    const winner = chechWinner();
    if (winner) {
        if (winner === "x"){
            marcadorX++;
        }else {
            marcadorO++;
        }
        updateScore();
        updateScoreboard();
        alert(winner.toUpperCase()+" ha ganado!" );
        gameActivo = false;
        return;
    }
    // empate
     const boardfull = true;
     for (let i = 0; i < mainbox.length; i++) {

        if (mainbox[i].textContent === ""){
            boardfull = false;
            break;
        }
     }
      if (boardfull){
        alert("Empste !");
        gameActivo = false;
        return;

      }






    }







}

}