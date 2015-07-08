$(document).ready(function(){ 
	var leftbar = $('#leftbar');
  var title = $('#leftbar #title');
	var t = $('#topbar');
	var b = $('#bottombar');
  var circ = $('#circle');

  // Sidebar Div Browser Proportionality

   theWidth = $("#leftbar img").css('width');
    $("#topbar").css('width',theWidth);
    $("#bottombar").css('width', theWidth);
    widthForTitle = parseInt(theWidth) / 5;
    title.css('left', widthForTitle);
    $("#dash").css('width', theWidth);
    winWidth = $( window ).width();
    console.log(winWidth);
    $("iframe").css('width', winWidth - theWidth);

    theHeight = $(window).height();
    heightForTitle = parseInt(theHeight) / 2.3;
    title.css('top', heightForTitle); 

    // Sidebar Hover Effects

   	leftbar.mouseover(function() {
      console.log("lalala");
   		t.stop(true,false).animate({
   			height: '40%',
   		}, "slow");
   		b.stop(true,false).animate({
   			top: '55%',
   		}, "slow");
   	});

   	leftbar.mouseout(function() {
   		t.stop(true,false).animate({
   			height: '10%',
   		}, "slow");
   		b.stop(true,false).animate({
   			top: '90%',
   		}, "slow");
   	});

/*    // Sidebar Circle Hover Effect
  var circleAnimation = function() {
    circ.mouseover(function() {
      $(this).stop(true,false).animate({
        height: '+=5px',
        width: '+=5px',
      }, "slow");
    });

    circ.mouseout(function() {
      $(this).stop(true,false).animate({
        height: '-=5px',
        width: '-=5px',
      }, "slow");
    });
  }

circleAnimation(); */

});