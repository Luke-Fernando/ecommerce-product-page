$(document).ready(() => {
    console.log("add to cart");


    let allProducts = [{
        id: "0",
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        mainThumbnail: "./images/image-product-1-thumbnail.jpg",
        originalPrice: 250,
        discount: 50,
    }];

    let cartItem = [];
    console.log(cartItem.length);

    const productAmountMinusBtn = $(".counter-minus-btn-container");
    const productAmountPlusBtn = $(".counter-plus-btn-container");
    const productAmountDisplay = $(".counter-value-var");
    const addToCartBtn = $(".add-to-cart-btn");

    const cartItemsAmountTagText = $(".cart-items-amount-display-tag p");
    const cartItemsAmountTag = $(".cart-items-amount-display-tag");
    const cartEmptyText = $(".empty-warning");
    const aCartItem = $(".cart-item");
    const cartCheckoutBtn = $(".checkout-btn");
    const navCartIcon = $("#cart-btn-icon");
    const cartProductThumbnail = $(".cart-product-img img");
    const cartProductName = $(".cart-product-name");
    const cartProductCurrentPrice = $(".cart-product-unit-price");
    const cartProductAmount = $(".cart-product-amount");
    const cartProductTotalPrice = $(".cart-product-total");
    const cartProductDeleteBtn = $(".cart-product-delete");



    let setTotalPrice = () => {
        cartItem[0].total = cartItem[0].currentPrice * cartItem[0].amount;
    };

    let ProductAmountCounter = () => {
        let productAmount = Number(productAmountDisplay.text());
        console.log(productAmount);

        productAmountMinusBtn.click(() => {
            if (productAmount > 0) {
                productAmount--;
                productAmountDisplay.text(productAmount);
            }
        });
        productAmountPlusBtn.click(() => {
            productAmount++;
            productAmountDisplay.text(productAmount);
        })
    };
    ProductAmountCounter();

    let cartIconClick = () => {

        if (cartItem.length < 1 || cartItem[0].amount == 0) {
            cartEmptyText.css("visibility", "visible");
            aCartItem.css("visibility", "hidden");
            cartCheckoutBtn.css("visibility", "hidden");
        } else {
            cartEmptyText.css("visibility", "hidden");
            aCartItem.css("visibility", "visible");
            cartCheckoutBtn.css("visibility", "visible");
        }

    };
    navCartIcon.click(() => cartIconClick());

    let cartItemsAmountTagFunc = () => {
        if (cartItem.length < 1 || cartItem[0].amount == 0) {
            cartItemsAmountTag.css("visibility", "hidden");
        } else {
            cartItemsAmountTag.css("visibility", "visible");
            let totalCartProducts = 0;

            for (let i = 0; i < cartItem.length; i++) {
                totalCartProducts += Number(cartItem[i].amount);
                cartItemsAmountTagText.text(totalCartProducts);
            }
        }
    };

    let changeCartProduct = () => {
        cartProductThumbnail.attr("src", cartItem[0].mainThumbnail);
        cartProductName.text(cartItem[0].name);
        cartProductCurrentPrice.text(Number(cartItem[0].currentPrice).toFixed(2));
        cartProductAmount.text(Number(cartItem[0].amount));
        cartProductTotalPrice.text(`$${Number(cartItem[0].total).toFixed(2)}`);
    }

    let storeToCart = () => {
        addToCartBtn.click(() => {
            if (cartItem.length < 1) {
                cartItem.push({
                    id: "0",
                    name: allProducts[0].name,
                    mainThumbnail: allProducts[0].mainThumbnail,
                    currentPrice: (Number(allProducts[0].originalPrice) / 100) * Number(allProducts[0].discount),
                    amount: Number(productAmountDisplay.text())
                });
                cartItem[0].total = Number(cartItem[0].currentPrice) * Number(cartItem[0].amount);

            } else {
                cartItem[0].amount = Number(productAmountDisplay.text());
                cartItem[0].total = Number(cartItem[0].currentPrice) * Number(cartItem[0].amount);

            };

            cartItemsAmountTagFunc();
            cartIconClick();
            changeCartProduct();
            console.log(cartItem);
        })
    };
    storeToCart();

    let deleteCartProduct = () => {
        cartProductDeleteBtn.click(() => {
            cartItem.shift();
            console.log(cartItem);
            cartItemsAmountTagFunc();
            cartIconClick();
        })
    };
    deleteCartProduct();
})