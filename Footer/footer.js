function footerComponent (el){
    const footerEl = document.createElement("div");

    footerEl.innerHTML = 
    `<footer class="footer">
    <a href="./index.html" class="footer_logo">
    <img src="https://github.com/AlejoBermudez/desafio_integrador_4/blob/main/imagenes/Logo%20Alejo.png?raw=true
    " alt="Logo Alejo">
    </a>
    <div class="redes">
        <p class="footer__redes">Instagram</p>
        <img src="https://github.com/AlejoBermudez/desafio_integrador_4/blob/main/imagenes/instagram.png?raw=true" class="footer__img" alt="">
        <p class="footer__redes">Linkdn</p>
        <img src="https://github.com/AlejoBermudez/desafio_integrador_4/blob/main/imagenes/linkedin.png?raw=true" class="footer__img" alt="">
        <p class="footer__redes">Youtube</p>
        <img src="https://github.com/AlejoBermudez/desafio_integrador_4/blob/main/imagenes/youtube.png?raw=true" class="footer__img" alt="">
    </div>
</footer>
    `
    el.appendChild(footerEl);
}