
function headerComponent (el){
    const componentEl = document.createElement("div")

    componentEl.innerHTML = 
    `   <header class="header">
        <img class="header__logo" src="/imagenes/Logo Alejo.png" alt="Logo">
        <label for="Menu" class="contenedor-menu">
            <div id="Menu" class="menu"></div>
            <div id="Menu" class="menu"></div>
            <div id="Menu" class="menu"></div>
        </label>
            <div class="menu_display">
                <div class="contenedor_boton">
                    <button class="boton_cerrar-menu">X</button>
                </div>
                <div class="contenedor_titulo">
                <a class="menu__title" href="./portfolio/portfolio.html">Portfolio</a>
                <a class="menu__title" href="./servicios/servicios.html">Servicios</a>
                <a class="menu__title" href="./contacto/contacto.html">Contacto</a>
                </div>
            </div>
            </header>
    `
;
const AbrirMenuEl = componentEl.querySelector(".contenedor-menu");
const CerrarMenuEl = componentEl.querySelector(".boton_cerrar-menu");
const VentanaMenuEl = componentEl.querySelector(".menu_display");

AbrirMenuEl.addEventListener("click",()=>{
    VentanaMenuEl.style.display = "inherit"
} )
CerrarMenuEl.addEventListener("click",()=>{
    VentanaMenuEl.style.display = ""
} )

    el.appendChild(componentEl)
}    

