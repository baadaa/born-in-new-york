$(document).ready(function(){
  var B = {
    init: function() {
      this.bindEvents();
      $('.year').text(new Date().getFullYear());
    },
    bindEvents: function() {
      $('div.menu').on('click touch', this.toggleMenu.bind(this));
      $('a[href^="#"]').on('click touch', this.smoothScroll.bind(this));
      $('.swipebox' ).swipebox();
    },
    toggleMenu: function() {
      $('body').toggleClass('noscroll');
      if ($('body').hasClass('noscroll')) {
        $('nav').fadeIn(100);
        $('div.menu').addClass('close');

      } else {
        $('nav').fadeOut(100);
        $('div.menu').removeClass('close');
      }
    },
    smoothScroll: function (e) {
      e.preventDefault();
      var target = e.target.hash;
      var $target = $(target);
      console.log(target);
      if(target !== "#intro") {
        this.toggleMenu();
      }

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 400, 'swing');
    }
  };

  B.init();
});
