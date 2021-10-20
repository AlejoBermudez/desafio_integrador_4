function formComponent (el){
    const formEl = document.createElement("div")
    
    formEl.innerHTML = 
    `
    <div class="form__flex-split">
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

    el.appendChild(formEl);

    function sendFormInfo() {
        const formEl = document.querySelector(".form");
      
        formEl.addEventListener("submit", (evento) => {
          evento.preventDefault();
      
          const formData = new FormData(evento.target);
          const datosObj = Object.fromEntries(formData.entries());
      
          fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },
      
            body: JSON.stringify({
              to: "aebmbu@gmail.com",
              message: `
              Nombre: ${datosObj.nombre} 
              Email: ${datosObj.email} 
              Mensaje: ${datosObj.mensaje}
              `,
            }),
          });
          formEl.reset();
          alert(
            "Mensaje enviado correctamente, Gracias " +
              datosObj.nombre +
              " por comunicarte."
          );
        });
      }
}