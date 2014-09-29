$(document).ready(function(){
  $('#modal_login').click(function(){
    $('#register_lightbox').slideUp();
    $('#login_lightbox').slideDown();
  })
  
  $('#modal_register').click(function(){
    $('#login_lightbox').slideUp();
    $('#register_lightbox').slideDown();
  })
  
  $('.close').click(function(){
    $('#login_lightbox').slideUp();
    $('#register_lightbox').slideUp();
  })
});
