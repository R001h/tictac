
const mainbox = document.getElementsByClassName("sqrs")

for (let index = 0; index < mainbox.length; index++) {
    mainbox[index].addEventListener ("click", function() {

        mainbox [index].innerHTML = "x"

        let numAleatorio = Math.floor((Math.random()*9))
        mainbox [numAleatorio].innerHTML = "0"

            console.log (numAleatorio);

        } )

}



/// (getRandomInt (9))

