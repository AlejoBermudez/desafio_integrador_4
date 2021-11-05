function contactMain (){
    
    const headerEl = document.querySelector(".header-component__container");
    const formEl = document.querySelector(".form-component__container");
    const footerEl = document.querySelector(".footer-component__container");
    
    
    formComponent(formEl);
    headerComponent(headerEl);
    footerComponent(footerEl);
    
    
}

contactMain()