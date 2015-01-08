// $(document).ready(function() {  
//   $('a[href*=#]:not([href=#])').click(function() {
//       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
//           || location.hostname == this.hostname) {

//           var target = $(this.hash);
//           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//              if (target.length) {
//                $('html,body').animate({
//                    scrollTop: target.offset().top
//               }, 1000);
//               return false;
//           }
//       }
//   });
// })
$(document).ready(function() {
  $('.scroll-top-wrapper').on('click', scrollToTop);
})
function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
$(document).on( 'scroll', function(){
  if ($(window).scrollTop() > 50) {
    $('.scroll-top-wrapper').addClass('show');
  } else {
    $('.scroll-top-wrapper').removeClass('show');
  }
});