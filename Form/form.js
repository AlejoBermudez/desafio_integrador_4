function formComponent (el){
    const formEl = document.createElement("div")
    
    formEl.innerHTML = 
    ` <div class="form__flex-split">
    <h3 class="form__title">Escribime</h3>
    <form class="form">
    <div class="fieldset">
    <label class="form__label" for="Nombre">NOMBRE</label>
    <input class="form__imput-text" type="text" id="Nombre">
    <div class="fieldset">
    <label class="form__label" for="Email">EMAIL</label>
    <input class="form__imput-text" type="text" id="Email"> 
    <div class="fieldset">
            <label class="form__label" for="Mensaje">MENSAJE</label>
            <textarea class="form__textarea" id="Mensaje"></textarea>
            <button class="form__button">Enviar</button>
            </div>
            </div>   
            </div> 
    </form>`

    const form = formEl.querySelector(".form");
    form.addEventListener("submit",function(e){
        e.preventDefault();
        console.log("el form se envio");
    });
    el.appendChild(formEl);
}