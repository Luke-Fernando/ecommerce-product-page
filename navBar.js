$(document).ready(() => {

    const cartBtn = $(".cart-btn");
    const cart = $(".cart-container");
    let cartFlag = "close";//open

    const navBtn = $("#hamburger-icon");
    const navBtnClose = $(".menu-close-btn");
    const resNavBar = $(".responsive-nav-links-container");
    const resNavBarBg = $(".responsive-links-container-bg");

    const testHtml = `<div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="#">Your Name Here</a>.
  </div>`

    console.log("Ready");

    // cart functions 
    let showCart = () => {
        cartBtn.click(() => {
            if (cartFlag == "close") {
                cart.show(200, () => {
                    cart.css("display", "flex");
                });
                cartFlag = "open";
            } else {
                cart.hide(200);
                cartFlag = "close";
            }
        })
    };
    // cart functions 
    // Responsive nav bar functions 
    navBtn.mousedown(() => { navBtn.css("fill", "hsl(26, 100%, 55%)") });
    navBtn.mouseup(() => { navBtn.css("fill", "#69707D") });

    navBtnClose.mousedown(() => { navBtnClose.css("fill", "hsl(26, 100%, 55%)") });
    navBtnClose.mouseup(() => { navBtnClose.css("fill", "#69707D") });

    navBtn.click(() => {
        resNavBarBg.css("visibility", "visible");
        resNavBar.css("visibility", "visible").css("left", "0").css("opacity", "1");
    });
    navBtnClose.click(() => {
        resNavBarBg.css("visibility", "hidden");
        resNavBar.css("visibility", "hidden").css("left", "-50px").css("opacity", "0.5");
    });
    $(document).click(event => {
        if ($(event.target).attr("class") === "responsive-links-container-bg") {
            resNavBarBg.css("visibility", "hidden");
            resNavBar.css("visibility", "hidden").css("left", "-50px").css("opacity", "0.5");
        }
    })

    // test 
    let test = () => {
        $(document).click(event => {
            console.log($(event.target).attr("class"));
        })
    }

    showCart();
    // test();
    // resNavBarOpen();
})