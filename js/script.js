const mainbox = document.getElementsByClassName("sqrs");

for (let index = 0; index < mainbox.length; index++) {
    mainbox[index].addEventListener("click", function() {

        if (mainbox[index].textContent === ""){ 
            mainbox[index].innerHTML = "x";

            let listaV = [];

            for (let j = 0; j < mainbox.length; j++) {
                if (mainbox[j].textContent==="") {
                  listaV.push(j);
                    
                }  
            }
            if (listaV.length>0) {
             let NumAle = Math.floor(Math.random()*listaV.length)
             let lista = listaV[NumAle]
             mainbox[lista].innerHTML="O"
         }
        }    
    });
}

