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

function servicesMain (){

    getServices().then(function(data) {
    for (const r of data) {
      addServices(r)
    }
  })
  

    const headerEl = document.querySelector(".header-component__container");
    headerComponent(headerEl);

    
    const footerEl = document.querySelector(".footer-component__container");
    footerComponent(footerEl);
}

servicesMain()