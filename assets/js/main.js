$(document).ready(function(){


    // banner
    $('.carousel').slick({
        slidesToShow: 1,
        dots:false,
        arrow:true,
        centerMode: false,
    });


    // section-1
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: false,
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });



    // siction 2
    $('.slide-doctor').slick({
        dots: true,
        infinite: false,
        arrow:false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    //section-3
    $('.mutiple-items1').slick({
        dots: true,
        infinite: false,
        arrow:false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // footer
    $('.multiple-items').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        arrow:false,
        dots:true,
        centerMode: false,
    });



    // popup
    $(".modal-header button").click(function(){
        $(".modal").hide(1000);
    });
    $('#home-modal').modal('show');

    // sibar-right - dịch vụ
    $(".tab-menu-right").click(function(){
        $(".list-items").toggle(200);
    });
    $(".tab-menu-right1").click(function(){
        $(".list-items1").toggle(200);
    });


    // item-gioi thieu
    $('.item-coso').slick({
        dots: false,
        infinite: false,
        arrow:false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});