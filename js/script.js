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