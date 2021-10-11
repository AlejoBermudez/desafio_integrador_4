function footerComponent (el){
    const footerEl = document.createElement("div");

    footerEl.innerHTML = 
    `<footer class="footer">
    <img src="./imagenes/Logo Alejo.png" class="footer_logo" alt="Logo Alejo">
    <div class="redes">
        <p class="footer__redes">Instagram</p>
        <img src="./imagenes/instagram.png" class="footer__img" alt="">
        <p class="footer__redes">Linkdn</p>
        <img src="./imagenes/linkedin.png" class="footer__img" alt="">
        <p class="footer__redes">Youtube</p>
        <img src="./imagenes/youtube.png" class="footer__img" alt="">
    </div>
</footer>
    `
    el.appendChild(footerEl);
}