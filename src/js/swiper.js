$(function() {
    let swiper1 = new Swiper(".js-swiper1", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 3000,
    });

    // メイン;
    let slider2 = new Swiper(".gallery-slider", {
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,
        loopedSlides: 8, //スライドの枚数と同じ値を指定
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    //サムネイル
    let thumbs = new Swiper(".gallery-thumbs", {
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,
    });

    //4系～
    //メインとサムネイルを紐づける
    slider2.controller.control = thumbs;
    thumbs.controller.control = slider2;
});