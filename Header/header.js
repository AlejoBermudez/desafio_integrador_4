function headerComponent (el){
    const componentEl = document.createElement("div")

    componentEl.innerHTML = 
    `   <header class="header">
        <a href="./index.html">
        <img class="header__logo" src="https://github.com/AlejoBermudez/desafio_integrador_4/blob/main/imagenes/Logo%20Alejo.png?raw=true" alt="Logo">
        </a>
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
                <a class="menu__title" href="./portfolio.html">Portfolio</a>
                <a class="menu__title" href="./servicios.html">Servicios</a>
                <a class="menu__title" href="./contacto.html">Contacto</a>
                </div>
            </div>
            </header>`

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

