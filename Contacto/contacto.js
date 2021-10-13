function contactMain (){
    const headerEl = document.querySelector(".header-component__container");
    headerComponent(headerEl);

    const formEl = document.querySelector(".form-component__container");
    formComponent(formEl);

    const footerEl = document.querySelector(".footer-component__container");
    footerComponent(footerEl);
}

contactMain()