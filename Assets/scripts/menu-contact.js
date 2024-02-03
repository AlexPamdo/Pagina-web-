$(document).ready(function() {
    $('.contactresponsive').focus(function(e) {
        e.stopPropagation();
        $('.contact-dropdown').show();
    });

    $('.contact-dropdown a').click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        $('.contact-dropdown').hide();
    });
});