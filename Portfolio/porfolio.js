function getPortfolio (){
    return fetch("https://cdn.contentful.com/spaces/d58j3u5qs7mw/environments/master/entries?access_token=2e-JDwddkCox7wsqfgnbT5YTpSwQ938Bf2gouDJVGKk&content_type=portfolio")
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


function PortfolioMain (){

    const headerEL = document.querySelector(".header__container-p");
    headerComponent(headerEL);

    getPortfolio().then(function(data) {
        for (const r of data) {
            addServices(r)
        }
    })

    const footerEl = document.querySelector(".footer__container-p");
    footerComponent(footerEl)

}

PortfolioMain()