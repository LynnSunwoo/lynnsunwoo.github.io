/*
$('.nav_arrow_turn').click(function() {
    $(this).toggleClass('arrow_rotated');
});
*/

$(document).ready(function(){
  $("#nav_aiSol").click(function(){
    $(".nav_arrow_turn").toggleClass("arrow_rotated");
  });
});

 



let allVids = $("#carouselExampleIndicators").find('.carousel-item');

allVids.each(function(index, el) {
  if (index !== 0) {
    $(this).find('video')[0].pause();
  }
});

$("#carouselExampleIndicators").on('slide.bs.carousel', function(ev) {
  let slides = $(this).find('.carousel-item');
  let pvid = slides[ev.from].querySelectorAll('video')[0];
  let vid = slides[ev.to].querySelectorAll('video')[0];
  let isPlaying = vid.currentTime > 0 && vid.readyState > 2;

  vid.play();

  if (isPlaying) {
    pvid.pause();
  }
});

/*
$('.carousel').carousel({
  interval: 0,
})
*/