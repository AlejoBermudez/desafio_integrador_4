function addWelcome (params){
    const template = document.querySelector("#welcome-template");
    const container = document.querySelector(".welcome");

    template.content.querySelector(".welcome_title").textContent = params.titulo
    template.content.querySelector(".welcome_subtitle").textContent = params.subtitle 

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getWelcome (){
    return fetch("https://cdn.contentful.com/spaces/d58j3u5qs7mw/environments/master/entries?access_token=2e-JDwddkCox7wsqfgnbT5YTpSwQ938Bf2gouDJVGKk&content_type=bienvenida")
    .then(res =>{
    return res.json()
    }).then((data)=>{
      //console.log(data);
      const item = data.items["0"].fields;
      const params = {
        titulo: item.titulo,
        subtitle: item.subtitle,
        }
        addWelcome(params)
    })
    }

    
function addIntro (params){
    const template = document.querySelector("#presentacion-template");
    const container = document.querySelector(".presentacion-content");

    template.content.querySelector(".presentacion__title").textContent = params.titulo;
    template.content.querySelector(".presentacion__text").textContent = params.textopresentacion;
    template.content.querySelector(".presentacion__img").src = params.foto;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}


function getIntro (){
return fetch("https://cdn.contentful.com/spaces/d58j3u5qs7mw/environments/master/entries?access_token=2e-JDwddkCox7wsqfgnbT5YTpSwQ938Bf2gouDJVGKk&content_type=presentacion")
.then(res =>{
return res.json()
}).then((data)=>{
    const item = data.items["0"].fields
    const imgURL = data.includes.Asset["0"].fields.file.url;

    const params = {
        titulo: item.titulo,
        textopresentacion: item.textopresentacion,
        foto: imgURL
    };
    addIntro(params);
});
}

function addServices (params){

    const template = document.querySelector("#servicios__template");
    const container = document.querySelector(".servicios__content");
    
    template.content.querySelector(".service__img").src = params.imagen;

    template.content.querySelector(".service__title").textContent = params.subtitulo;

    template.content.querySelector(".service__text").textContent = params.parrafo;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getServices (){
return fetch("https://cdn.contentful.com/spaces/d58j3u5qs7mw/environments/master/entries?access_token=2e-JDwddkCox7wsqfgnbT5YTpSwQ938Bf2gouDJVGKk&content_type=servicios")
.then(res =>{
return res.json()
}).then((data)=>{
    const fieldsCollection = data.items.map((item) => {
        return {
          subtitulo: item.fields.subtitulo,
          parrafo: item.fields.parrafo,
          imageID: item.fields.imagen.sys.id,
          includes: data.includes.Asset,
        };
      });
      fieldsCollection.forEach((item) => {
        const id = buscarAsset(item.imageID, item.includes);
        //console.log(id);
        item.imagen = "https:" + id.fields.file.url;
      });
      return fieldsCollection;
    });
}

function buscarAsset(imageID, includes) {
  const found = includes.find((res) => {
    return res.sys.id == imageID;
  });
  return found;
}

function main (){
  getWelcome()
  getIntro()
  
  getServices().then(function(data) {
    for (const r of data) {
      addServices(r)
    }
  })
  
  const headerEl = document.querySelector(".header-container");
  headerComponent(headerEl)
  
  const formEl = document.querySelector(".form__container");
  formComponent(formEl);

  const footerEl = document.querySelector(".footer__container");
  footerComponent(footerEl)
}


main()




