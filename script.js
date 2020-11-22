$(function(){

  $(".item").click(function(){
    var $abstract = $(this).find('.abstract');
    if($abstract.hasClass('open')){
      $abstract.removeClass('open');
      $abstract.slideUp();
      $(this).find('span').text('+');
    }
    else{
      $abstract.addClass('open');
      $abstract.slideDown();
      $(this).find('span').text('-');
    }
  });
});
