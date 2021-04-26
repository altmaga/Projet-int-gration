(function($) {
  $(document).ready(function() {
    var app = {
      isMobile: false,
      isTablet: false,
      breakPointTablet: 992,
      breakPointMobile: 768,
      init: function() {
        app.handleResize();
        app.responsiveDetection();
        app.menuMobile();
      },
      handleResize: function() {
        $(window).on('resize', function(){
          app.responsiveDetection();
          app.menuMobile();
        });
      },

      responsiveDetection: function() {
        app.isMobile = $(window).width() < app.breakPointMobile;
        app.isTablet = $(window).width() < app.breakPointTablet;
      },

      menuMobile: function() {
        const _menuPrimary = $('.js-menu');

        if(app.isTablet){
          if(_menuPrimary.length > 0) {
            const _btnMenu = $('.btn-menu-mobile');
            const _btnClose = $('.btn-close-mobile');
            const _body = $('body');

            _btnMenu.on('click', function(){
              _menuPrimary.addClass('js-active');
              _body.addClass('js-hidden-mobile');
            })
            _btnClose.on('click', function(){
              _menuPrimary.removeClass('js-active');
              _body.removeClass('js-hidden-mobile');
            })
          }
        }
      }
    };
    app.init();
  });
})(jQuery);
