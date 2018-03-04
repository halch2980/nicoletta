$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        responsive: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 4
    });
    $('.slider-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-smal'
    });

    $('.slider-smal').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-big',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
});
$(document).ready(function(){

    $('.category_button').click(function(){
        var id=$(this).attr('id');

        if($(this).hasClass('category_button_active')) {
            $('.'+id).animate({opacity:0,},300).hide();
            $(this).removeClass('category_button_active');
        } else {
            $('.category_button').each( function () {
                $(this).removeClass('category_button_active');
            });
            $(this).addClass('category_button_active');

            $('.sub-category').each(function () {
                if($(this).hasClass(id)) {
                    $(this).show().animate({opacity:1,},300);
                } else {
                    $(this).animate({opacity:0,},300).hide();
                }
            });
        }
    });
    $('.category_button1').click(function(){

        var id=$(this).attr('id');
            $('.category_button1').each( function () {
                $(this).removeClass('category_button_active');
            });
            $(this).addClass('category_button_active');
            $('.info-tub-content').each(function () {
                if($(this).hasClass(id)) {
                    $(this).show().animate({opacity:1,},300);
                } else {
                    $(this).animate({opacity:0,},300).hide();
                }
            });
    });
    $('.qbutton').click(function(){
        var p=$(this).parent('div');
        if ($(p).children('p').is(':hidden')){
            $('.faq-section').each(function(){
                $(this).children('p').slideUp('slow');
            });
            $(p).children('p').slideDown('slow');
        } else{
            $(p).children('p').slideUp('slow');
        }



    });
    $('.button-order').click(function(){
        var p=$(this).parent('div').parent('div');
        if ($(p).children('.order-info').is(':hidden')){
            $('.order-info').each(function(){
                $(this).children('.order-info').slideUp('slow');
            });
            $(p).children('.order-info').slideDown('slow');
        } else{
            $(p).children('.order-info').slideUp('slow');
        }



    });


    $('.filter').click(function(){
        if($('.filter').hasClass('filter_active')){
            $('.filter').not(this).removeClass('filter_active')
        }
        $(this).toggleClass('filter_active')
    });
    $('.filter-dropdown').click(function(){
        if($('.filter-dropdown').hasClass('filter_active')){
            $('.filter-dropdown').not(this).removeClass('filter_active')
        }
        $(this).toggleClass('filter_active')
    });

    $('.zoom').click(function(){
       var src;
//        $('.big-slider > .slick-active').each(function(){
//           if ($(this).hasClass('slick-active')){
//               $(src)=$(this).children('img').attr('source');
//               alert(src);
//           }
//       })
        src = $('.slider-big > .slick-list > .slick-track >  .slick-active > img').attr('src');
        $('.zoom-area-bg > img').attr('src', src);
        $('.zoom-area').fadeIn('slow');
    });
    $('.close-button').click(function(){
        $('.zoom-area').fadeOut('slow');
    })
})
