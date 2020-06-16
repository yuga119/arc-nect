(function($) {
    $(function() {
        var $header = $('.header-inner');
        // Nav Toggle Button
        $('.nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
})(jQuery);