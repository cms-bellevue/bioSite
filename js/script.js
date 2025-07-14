$(document).ready(function() {
  // Fade-in animation for interview items on scroll
  function fadeInOnScroll() {
    $('.interview-item').each(function() {
      var $this = $(this);
      if ($this.offset().top < $(window).scrollTop() + $(window).height() * 0.8) {
        $this.addClass('fade-in');
      }
    });
  }

  // Run on page load
  fadeInOnScroll();

  // Run on scroll
  $(window).on('scroll', function() {
    fadeInOnScroll();
  });
});