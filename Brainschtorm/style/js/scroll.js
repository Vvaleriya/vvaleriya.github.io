$('.anchor').bind('click', function(e) {
  e.preventDefault();
  var height = document.body.offsetHeight;
  var curPos = $(document).scrollTop();

  //to the anchor
  var anchorID = $(this).attr('href');
  console.log(anchorID);
  var anchorPos = $(anchorID).offset().top;
  console.log(anchorPos);
  var scrollTime = 0;

  if (anchorPos > curPos) {
    scrollTime = (height - curPos) / 3;
    $("body,html").animate({
      "scrollTop": anchorPos
    }, scrollTime);
  } else {
    scrollTime = curPos / 3;
    $("body,html").animate({
      "scrollTop": anchorPos
    }, scrollTime);
  }

});