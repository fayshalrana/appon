// window scroll function  for nevigation
$(function(){
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('#header').addClass('header_active');
        } else {
            $('#header').removeClass('header_active');
        }
    });
  })
// window scroll function  for main logo
$(function(){
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('.nav_logo').addClass('nav_logo_short');
        } else {
            $('.nav_logo').removeClass('nav_logo_short');
        }
    });
  })

$(function () {
    new VenoBox({
        selector: '.my-video-links',
    });


    $('.feedback_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
    });


});

$(function () {

    $('.screenshot_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        dots: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    });
})

$(function () {

    $('.bnnar_slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
})

$(function () {
        // security 
    $('.phone_security').click(function () {
        $('.feature_item_brief1').removeClass('bref1_show');
    });
    $('.phone_security').click(function () {
        $('.feature_item_brief2').removeClass('bref2_show');
    });

    $('.phone_security').click(function () {
        $('.feature_item_brief3').removeClass('bref3_show');
    });
    $('.phone_security').click(function () {
        $('.feature_item_brief4').removeClass('bref4_show');
    });
    $('.phone_security').click(function () {
        $('.feature_item_brief5').removeClass('bref5_show');
    });
    // for img 
    $('.phone_security').click(function () {
        $('.security_img').removeClass('img_none');
    });
    $('.phone_security').click(function () {
        $('.chat_img').removeClass('show_img');
    });
    $('.phone_security').click(function () {
        $('.g_weather_img').removeClass('show_img');
    });
    $('.phone_security').click(function () {
        $('.video_call_img').removeClass('show_img');
    });
    $('.phone_security').click(function () {
        $('.shopping_img').removeClass('show_img');
    });



// video  call
    $('.video_call').click(function () {
        $('.feature_item_brief2').addClass('bref2_show');
    });
    $('.video_call').click(function () {
        $('.feature_item_brief1').addClass('bref1_show');
    });
    $('.video_call').click(function () {
        $('.feature_item_brief3').removeClass('bref3_show');
    });
    $('.video_call').click(function () {
        $('.feature_item_brief4').removeClass('bref4_show');
    });
    $('.video_call').click(function () {
        $('.feature_item_brief5').removeClass('bref5_show');
    });
    // for img 
    $('.video_call').click(function () {
        $('.video_call_img').addClass('show_img');
    });
    $('.video_call').click(function () {
        $('.security_img').addClass('img_none');
    });
    $('.video_call').click(function () {
        $('.chat_img').removeClass('show_img');
    });
    $('.video_call').click(function () {
        $('.shopping_img').removeClass('show_img');
    });
    $('.video_call').click(function () {
        $('.g_weather_img').removeClass('show_img');
    });
// video  call



// weather 
    $('.global_weather').click(function () {
        $('.feature_item_brief3').addClass('bref3_show');
    });
    $('.global_weather').click(function () {
        $('.feature_item_brief1').addClass('bref1_show');
    });
    $('.global_weather').click(function () {
        $('.feature_item_brief2').removeClass('bref2_show');
    });
    $('.global_weather').click(function () {
        $('.feature_item_brief4').removeClass('bref4_show');
    });
    $('.global_weather').click(function () {
        $('.feature_item_brief5').removeClass('bref5_show');
    });
    // for img 
    $('.global_weather').click(function () {
        $('.g_weather_img').addClass('show_img');
    });
    $('.global_weather').click(function () {
        $('.video_call_img').removeClass('show_img');
    });
    $('.global_weather').click(function () {
        $('.security_img').addClass('img_none');
    });
    $('.global_weather').click(function () {
        $('.chat_img').removeClass('show_img');
    });
    $('.global_weather').click(function () {
        $('.shopping_img').removeClass('show_img');
    });
// weather 

    // free chat 
    $('.free_chat').click(function () {
        $('.feature_item_brief4').addClass('bref4_show');
    });
    $('.free_chat').click(function () {
        $('.feature_item_brief3').removeClass('bref3_show');
    });
    $('.free_chat').click(function () {
        $('.feature_item_brief1').addClass('bref1_show');
    });
    $('.free_chat').click(function () {
        $('.feature_item_brief2').removeClass('bref2_show');
    });
    $('.free_chat').click(function () {
        $('.feature_item_brief5').removeClass('bref5_show');
    });
    // for img 
    $('.free_chat').click(function () {
        $('.chat_img').addClass('show_img');
    });
    $('.free_chat').click(function () {
        $('.g_weather_img').removeClass('show_img');
    });
    $('.free_chat').click(function () {
        $('.video_call_img').removeClass('show_img');
    });
    $('.free_chat').click(function () {
        $('.shopping_img').removeClass('show_img');
    });
    $('.free_chat').click(function () {
        $('.security_img').removeClass('show_img');
    });


    // shopping 

    $('.online_shopping').click(function () {
        $('.feature_item_brief5').addClass('bref5_show');
    });
    $('.online_shopping').click(function () {
        $('.feature_item_brief3').removeClass('bref3_show');
    });
    $('.online_shopping').click(function () {
        $('.feature_item_brief1').addClass('bref1_show');
    });
    $('.online_shopping').click(function () {
        $('.feature_item_brief4').removeClass('bref4_show');
    });
    $('.online_shopping').click(function () {
        $('.feature_item_brief2').removeClass('bref2_show');
    });
    // for img 
    $('.online_shopping').click(function () {
        $('.shopping_img').addClass('show_img');
    });
    $('.online_shopping').click(function () {
        $('.g_weather_img').removeClass('show_img');
    });
    $('.online_shopping').click(function () {
        $('.video_call_img').removeClass('show_img');
    });
    $('.online_shopping').click(function () {
        $('.security_img').removeClass('show_img');
    });
    $('.online_shopping').click(function () {
        $('.chat_img').removeClass('show_img');
    });

});

// navbar close in mobile screen 
$(function(){
    $('.navbar-collapse a').click(function() {
      $(".navbar-collapse").collapse('hide');
    });
  })



  // preloader function 
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
});
