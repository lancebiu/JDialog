require('./jdialog.scss');

(function ($) {

    $.fn.jDialog = function (options) {
        return this.each(function () {

            var settings = $.extend({
                animationType: 'fade-in',
                skinClassName: ''
            }, options);

            function closeDialog() {
                $overlay.get(0).remove();
                $dialog.removeClass('show');
            }

            var $dialog = $(this);
            var $content = $('<div class="jDialog-content"></div>').addClass(settings.skinClassName).append($dialog.html());
            $dialog.empty().append($content).addClass(settings.animationType);

            var $overlay = $('<div class="jDialog-overlay"></div>');
            $overlay.click(closeDialog);

            $dialog.find('[data-dismiss="JDialog"]').click(closeDialog);

            var $trigger = $('[data-toggle="JDialog"][data-target=' + $dialog.attr('id') + ']');
            $trigger.click(function () {
                $('body').append($overlay);
                $dialog.addClass('show');
            });
        });
    }
}(jQuery));