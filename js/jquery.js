
$(document).ready(function(){
    //1 "этап"
$('.myButton1').click(function() {
  $('.myButton3').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton1').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done1.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
     setTimeout(function () {
   $('.myButton1').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('.myButton1').css({ 'position': 'absolute','left':'200px','top':'20px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
         $('.myButton1').css({ 'top':'100px'},2000) ;
    $('.myButton1').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="flex.html";}) }, 2800);
});
    //вторая кнопка
   $('.myButton').click(function() {
  $('#btn3').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton1').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
       $('#btn4').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done1.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
        setTimeout(function () {
    $('.myButton').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('.myButton').css({ 'position': 'absolute','left':'200px','top':'20px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
            $('.myButton').css({ 'top':'100px'},2000) ;
    $('.myButton').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="game.html";}) }, 2800);
}); 
    //третья кнопка
    $('#btn3').click(function() {
  $('.myButton1').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
        $('#btn4').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('#btn3').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done1.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
         setTimeout(function () {
    $('#btn3').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('#btn3').css({ 'position': 'absolute','left':'200px','top':'20px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
              $('#btn3').css({ 'top':'100px'},2000) ;
    $('#btn3').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="media.html";}) }, 2800);
}); 
    
    //четвертая кнопка
    $('#btn4').click(function() {
  $('.myButton1').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
        $('#btn3').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('#btn4').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done1.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
         setTimeout(function () {
    $('#btn4').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('#btn4').css({ 'position': 'absolute','left':'200px','top':'20px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
              $('#btn4').css({ 'top':'100px'},2000) ;
    $('#btn4').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="adapt.html";}) }, 2800);
}); 
    
});

