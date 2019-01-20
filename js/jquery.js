
$(document).ready(function(){
    //1 "этап"
$('.myButton1').click(function() {
  $('.myButton3').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton1').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
    $('.myButton1').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('.myButton1').css({ 'position': 'absolute','left':'200px','top':'150px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
    $('.myButton1').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="flex.html";});
});
    //вторая кнопка
   $('.myButton').click(function() {
  $('.myButton3').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton1').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
    $('.myButton').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('.myButton').css({ 'position': 'absolute','left':'200px','top':'150px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
    $('.myButton').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="game.html";});
}); 
    //третья кнопка
    $('#btn3').click(function() {
  $('.myButton1').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton3').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
    $('.myButton3').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('.myButton3').css({ 'position': 'absolute','left':'200px','top':'150px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
    $('.myButton3').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="media.html";});
}); 
    
    //четвертая кнопка
    $('#btn4').click(function() {
  $('.myButton1').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton').animate({opacity: '0', 'margin-left': '1500px'},2000)  ;
    $('.myButton3').animate({ 'margin-top': '600px'},2000)  ;
    $('header').animate({ 'top': '200px'},2000)  ;
    //2 etap ya sha umru
    $('.divv').animate({ 'height': '600px', 'width':'800px','left':'88px' },2000);
    $('.divv').css({'background': 'url(images/done.gif) no-repeat center', 'background-size': '800px'});
    //3tiy 
    $('.myButton3').animate({ 'margin-left': '200px', 'margin-top':'100px'},100)  ;
     $('.myButton3').css({ 'position': 'absolute','left':'200px','top':'150px'},2000) ;
    $('.divv').animate({opacity: 0}, 300);
    $('.myButton3').animate({ 'width': '300px', 'left':'25%', 'height':'100px','font-size':'38px', 'padding-top':'50px'},800, function(){document.location="adapt.html";});
}); 
    
});

