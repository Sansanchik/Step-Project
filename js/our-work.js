  $('.our-img-hover').hide();
  $('.our-img-hover').show();

  $('.our-work-menu-item').click(function () {

      $('.our-work-menu-item-active').removeClass('our-work-menu-item-active');
      $(this).addClass('our-work-menu-item-active');

      const currentCategory = $(this).data('category');

      $('.our-img-hover-active').removeClass('div>our-img-hover-active');


      $('.category').each(function (index, item) {

          if ($(item).data('category') === currentCategory ||
              currentCategory === undefined
          ) {
              $(item).show();
              $('.our-img-hover-active').addClass('our-img-hover');
              $('.our-img-hover-active').removeClass('our-img-hover-active').hide();

          } else {
              $(item).hide();
              $('.our-img-hover-active').css('opacity', '0');
              $('.our-img-hover-active').addClass('our-img-hover');
              $('.our-img-hover').show();
          }
      });
  });
  //нажатие кнопки load
  $('.block-img-load').hide();

  $('.our-work-button-load').click(function () {
      $('.our-img-hover-active')
          .hide()
          .addClass('our-img-hover')
          .show();
      if ($('.block-img-load').hide()) {
          $('.block-img-load').slideDown();
          $('.our-work-button-load').remove();

      } else {
          $('.block-img-load').hide();
      }
  });

// Кнопка для показа дополнительных фоток в галерее
$('.best-images-button').click(function (){
  $('.best-img').removeClass('hidden');
  $(this).addClass('hidden')
});

// Кнопка вверх
 $('<button>').appendTo('body');
$('button').text('To top');
$('button').css({width:'60px', height:'60px', borderRadius: '50%', padding:'5px', background:'#18cfab', color:'#ffff', position: 'fixed',
    bottom: '30px', right:'70px'
});
$('button').hide();
$(window).on('scroll', ()=>{
   if ($(window).scrollTop()>$(window).height())
   {$('button').show()} else {$('button').hide();
   }
});
$('button').on('click',()=>{
    $('body,html').animate({scrollTop:0},800);
});


