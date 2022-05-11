jQuery(function ($) {
    // この中であればWordpressでも「$」が使用可能になる

    var topBtn = $(".c-page-top");
    topBtn.hide();

    // ボタンの表示設定
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            // 指定px以上のスクロールでボタンを表示
            topBtn.fadeIn();
        } else {
            // 画面が指定pxより上ならボタンを非表示
            topBtn.fadeOut();
        }
    });

    // ボタンをクリックしたらスクロールして上に戻る
    topBtn.click(function () {
        $("body,html").animate({
            scrollTop: 0,
        },
            300,
            "swing"
        );
        return false;
    });

    // スクロールするとヘッダーの背景色変更
    var elemTop = $(".p-mv,.p-sub-hero,.l-breadcrumb").outerHeight();
    $(window).on("scroll", function () {
        if (elemTop < $(this).scrollTop()) {
            $(".js-header").addClass("headerColorScroll");
        } else {
            $(".js-header").removeClass("headerColorScroll");
        }
    });

    // //ドロワーメニュー
    $('.js-hamburger').on('click', function () {
        $('.c-hamburger').toggleClass('is-open');
        $('.p-sp-nav').toggleClass('is-open');
        $("html").toggleClass("is-fixed");
    });

    // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
    $(document).on("click", 'a[href*="#"]', function () {
        let time = 400;
        let header = $("header").innerHeight();
        let target = $(this.hash);
        if (!target.length) return;
        let targetY = target.offset().top - header;
        $("html,body").animate({
            scrollTop: targetY
        }, time, "swing");
        return false;
    });

    window.onload = () => {
        // URLの取得
        let url = location.href;
        // if (url == "https://gussan-website-wp.blog/team-sakura/") {
        if (url == "http://localhost:3000/") {
            const newIcon = document.querySelectorAll('.p-cards__new');
            newIcon.forEach(function (value) { 
                value.style.display = "flex";
            });
        }
    }

});