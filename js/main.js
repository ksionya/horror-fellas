$('.carousel-in').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

/*скролл menu*/
$('.menu a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
    }, {
        duration: 2000,
        easing: 'swing'
    });
    return false;
});

// Меню бургер
$('.burger').on('click', function() {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
})


//Аккордион
$(function() {
    $('.faq-item').on('click', function() {
        $(this).toggleClass('active');
    });
});

//Карусель