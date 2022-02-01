$(document).ready(() => {

    const sliderImgs = [{
        "image": "./images/image-product-1.jpg",
        "thumbnail": "./images/image-product-1-thumbnail.jpg"
    }, {
        "image": "./images/image-product-2.jpg",
        "thumbnail": "./images/image-product-2-thumbnail.jpg"
    }, {
        "image": "./images/image-product-3.jpg",
        "thumbnail": "./images/image-product-3-thumbnail.jpg"
    }, {
        "image": "./images/image-product-4.jpg",
        "thumbnail": "./images/image-product-4-thumbnail.jpg"
    }];


    const mainProductImg = $(".product-image img");
    const mainProductImgFull = $(".fullscreen-product-image img");

    const imgSelectorContainer = $(".product-image-slectors-container");
    const imgSelectorContainerFull = $(".fullscreen-product-image-slectors-container");

    const productThumbnailImg = $(".product-thumbnail-img");
    const productThumbnailImgFull = $(".fullscreen-product-thumbnail-img");

    const productThumbnailHover = $(".product-thumbnail-hover");
    const productThumbnailHoverFull = $(".fullscreen-product-thumbnail-hover");

    const productImgGuard = $(".product-img-guard");
    const productImgGuardFull = $(".fullscreen-product-img-guard");

    const fullscreenImgsConatiner = $(".fullscreen-ab-product-images-container");

    const fullscreenCloseBtn = $(".fullscreen-close-btn");

    const nextBtn = $(".next-img-btn");
    const previousBtn = $(".previous-img-btn");

    const resProductPreviousBtn = $(".product-img-previous-btn");
    const resProductNextBtn = $(".product-img-next-btn");


    let flags = {
        norScreen: 0,
        fullScreen: 0
    }

    let setDefaultImage = (mainImg) => {
        mainImg.attr("src", sliderImgs[0].image);
    };



    let setSelectorImg = (selectorContainer) => {
        for (let i = 0; i < sliderImgs.length; i++) {
            let thumbnailSrc = sliderImgs[i].thumbnail;
            selectorContainer.children().eq(i).children("img").attr("src", function () {
                return (thumbnailSrc);
            });
        }
    };


    let userSlectedImg = (selectorThumnailHover, thumbnailImgClass, mainProductImgName, isItFullscren) => {
        selectorThumnailHover.click(e => {
            let indexedFlagName = $(e.target).siblings(thumbnailImgClass).index(thumbnailImgClass);
            if (isItFullscren) {
                flags.fullScreen = indexedFlagName;
            } else {
                flags.norScreen = indexedFlagName;
            };
            console.log(`indexedFlagName ${flags.fullScreen}`);
            for (let i = 0; i < sliderImgs.length; i++) {
                if (Number(i) == Number(indexedFlagName)) {
                    mainProductImgName.attr("src", () => sliderImgs[i].image);
                    selectorThumnailHover.eq(i).siblings(thumbnailImgClass).css("border", "2px solid #ff7d1a");
                    selectorThumnailHover.eq(i).addClass("opacity-high");
                } else {
                    selectorThumnailHover.eq(i).siblings(thumbnailImgClass).css("border", "2px solid transparent");
                    selectorThumnailHover.eq(i).removeClass("opacity-high");
                }
            }
        });
    };

    let thumbnailHover = (hoverThumbnail) => {
        hoverThumbnail.hover((e) => {
            if ($(e.target).hasClass('opacity-high') == false) {
                $(e.target).toggleClass("opacity-low");
            } else {
                if ($(e.target).hasClass('opacity-low')) {
                    $(e.target).removeClass('opacity-low')
                }
            }
        });
    };

    let fullscreenShowNHide = () => {
        productImgGuard.click(() => {
            if ($(window).width() > 850) {
                fullscreenImgsConatiner.css("visibility", "visible");
            }

        });
        fullscreenCloseBtn.click(() => fullscreenImgsConatiner.css("visibility", "hidden"))
    }

    let setImageWithArrows = (flag) => {
        mainProductImgFull.attr("src", () => sliderImgs[flag].image);

        for (let k = 0; k < sliderImgs.length; k++) {
            if (Number(k) == Number(flag)) {
                productThumbnailImgFull.eq(k).css("border", "2px solid #ff7d1a");
                productThumbnailHoverFull.eq(k).addClass("opacity-high");
            } else {
                productThumbnailImgFull.eq(k).css("border", "2px solid transparent");
                productThumbnailHoverFull.eq(k).removeClass("opacity-high");
            }
        }
    }

    let btnSelectedImg = (isFullOrNormal, flagObj) => {

        nextBtn.click(() => {
            if (flags.fullScreen < Number(sliderImgs.length - 1)) {
                flags.fullScreen++;
                setImageWithArrows(flags.fullScreen)
            } else {
                flags.fullScreen = 0;
                setImageWithArrows(flags.fullScreen)
            };
            console.log(`index flag => ${flags.fullScreen}`);
        });

        previousBtn.click(() => {
            if (flags.fullScreen > 0) {
                flags.fullScreen--;
                setImageWithArrows(flags.fullScreen)
            } else {
                flags.fullScreen = Number(sliderImgs.length - 1);
                setImageWithArrows(flags.fullScreen)
            };
        });

    }

    let btnSelectResBtns = () => {
        resProductPreviousBtn.click(() => {
            if (flags.norScreen > 0) {
                flags.norScreen--;
                mainProductImg.attr("src", sliderImgs[flags.norScreen].image);
            }
        });
        resProductNextBtn.click(() => {
            if (flags.norScreen < 3) {
                flags.norScreen++;
                mainProductImg.attr("src", sliderImgs[flags.norScreen].image);
            }
        })
    }

    setDefaultImage(mainProductImg);
    setDefaultImage(mainProductImgFull);

    setSelectorImg(imgSelectorContainer);
    setSelectorImg(imgSelectorContainerFull);

    userSlectedImg(productThumbnailHover, ".product-thumbnail-img", mainProductImg, false);
    userSlectedImg(productThumbnailHoverFull, ".fullscreen-product-thumbnail-img", mainProductImgFull, true);

    thumbnailHover(productThumbnailHover);
    thumbnailHover(productThumbnailHoverFull);

    fullscreenShowNHide();

    btnSelectedImg();
    btnSelectResBtns();

});
