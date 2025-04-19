$(window).on('scroll', function() {
  parallaxScroll();
});

function parallaxScroll() {
  var scrolled = $(window).scrollTop();

  $('.layer-1').css('top', (0 - scrolled * 0.1) + 'px');
  $('.layer-2').css('top', (0 - scrolled * 0.3) + 'px');
  $('.layer-3').css('top', (0 - scrolled * 0.5) + 'px');
  $('.layer-4').css('top', (0 - scrolled * 0.8) + 'px');

  $('.planet-1').css('top', (1000 - scrolled * 0.9) + 'px');
  $('.planet-2').css('top', (1400 - scrolled * 0.7) + 'px');
  $('.planet-3').css('top', (1800 - scrolled * 0.5) + 'px');
  $('.planet-4').css('top', (2200 - scrolled * 0.6) + 'px');
  $('.planet-5').css('top', (2600 - scrolled * 0.4) + 'px');
  $('.planet-6').css('top', (3000 - scrolled * 0.3) + 'px');
  $('.planet-7').css('top', (3400 - scrolled * 0.5) + 'px');
  $('.planet-8').css('top', (3800 - scrolled * 0.2) + 'px');
  $('.planet-9').css('top', (4200 - scrolled * 0.35) + 'px');
}
