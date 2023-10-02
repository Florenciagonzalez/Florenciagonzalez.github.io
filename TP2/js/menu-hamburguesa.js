console.log("comienza");


/*document.querySelector(".icono-carrito").addEventListener("click" , menucarrito);

function menucarrito(){
    document.querySelector(".menu").classList.toggle("mostrar-carrito");
}


document.querySelector(".icono-avatar").addEventListener("click" , menuavatar);

function menuavatar(){
    document.querySelector(".perfil").classList.toggle("mostrar-perfil");
}
*/

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
