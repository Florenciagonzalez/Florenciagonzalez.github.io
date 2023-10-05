console.log("comienza");


//todos los botones
let botones = document.querySelectorAll(".boton-menu");
//todos los menus
let submenues = document.querySelectorAll(".sub-menu");



/* pos de arreglo*/ 
//botones es arreglo
//recorre todos los botones 
// boton -> elemento , pos-> la posicion
botones.forEach((boton, pos) => {

    boton.addEventListener("click", () => {

        submenues.forEach((submenu, subPos) => {

            if(subPos === pos){
                submenu.classList.toggle('show');
            }else{
                submenu.classList.remove('show');
            }
        })
    })
})


//carrucel
let btnatras= document.querySelector(".atras");
let btnadelante = document.querySelector(".adelante");
let img = document.querySelector(".imagenes");


btnatras.addEventListener("click" , clickizquierda);
btnadelante.addEventListener("click" , clickderecha);


function  clickizquierda(){

    let contador = Number(img.style.getPropertyValue("--i"));
    
        contador = contador + 300;
        if(contador > 0)return;
        img.style.setProperty("--i", contador);
        
}   

function clickderecha(){
  
    let contador = Number(img.style.getPropertyValue("--i"));
        contador = contador - 300;
        if(contador < -600)return;
        img.style.setProperty("--i", contador);
}

