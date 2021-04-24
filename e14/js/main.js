
//e14 jquery//
$(document).ready(function() {

    // run function on initial page load
    $('.fivecolors').click(function() {
      $('.whitesquare1').toggleClass('tealsquare');
      $('.whitesquare2').toggleClass('coralsquare');
      $('.whitesquare3').toggleClass('cyansquare');
      $('.whitesquare4').toggleClass('fuchsiasquare');
      $('.whitesquare5').toggleClass('chartreusesquare');
    });


    // run function on resize of the window
    $(window).resize(function() {
      resize();
    });

    // run function on scroll of the window
    $(window).scroll(function() {
      scroll();
    });

  });

function resize() {
  $('.whitesquare1').addClass('changeborder');
  $('.whitesquare2').addClass('changeborder');
  $('.whitesquare3').addClass('changeborder');
  $('.whitesquare4').addClass('changeborder');
  $('.whitesquare5').addClass('changeborder');
}

function scroll() {
  $('.whitesquare1').removeClass('changeborder');
  $('.whitesquare2').removeClass('changeborder');
  $('.whitesquare3').removeClass('changeborder');
  $('.whitesquare4').removeClass('changeborder');
  $('.whitesquare5').removeClass('changeborder');
}
