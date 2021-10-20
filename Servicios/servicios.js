




function servicesMain (){
    const headerEl = document.querySelector(".header-component__container");
    headerComponent(headerEl);

    
    getServices().then(function(data) {
        for (const r of data) {
            addServices(r)
        }
    })

    const footerEl = document.querySelector(".footer-component__container");
    footerComponent(footerEl);
}

servicesMain()