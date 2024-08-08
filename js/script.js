
const mainbox = document.getElementsByTagName("div");

for (let index = 0; index < mainbox.length; index++) {
    mainbox[index].addEventListener("click", function() {

        mainbox[index].innerHTML = "x";

        let listaV = []

        for (let index = 0; index < mainbox.length; index++) {
            if (mainbox[index].textContent==="") {
              listaV.push(index)
                
            }
            
        }
         let NumAle = Math.floor(Math.random()*listaV.length)
         let lista = listaV[NumAle]
         mainbox[lista].innerHTML="O"


      




        
        
    });
}
  