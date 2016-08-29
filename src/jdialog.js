require('./jdialog.scss');

(function ($) {

    $.fn.jDialog = function (options) {
        return this.each(function () {

            var settings = $.extend({
                skinClassName: '',
                animationType: 'fade-in',
                allowOverlay: true
            }, options);

            function closeDialog() {
                if(settings.allowOverlay) {
                    $overlay.get(0).remove();
                }
                $dialog.removeClass('show');
            }

            var $dialog = $(this);
            var $content = $('<div class="jDialog-content"></div>').addClass(settings.skinClassName).append($dialog.html());
            $dialog.empty().append($content).addClass(settings.animationType);

            if(settings.allowOverlay) {
                var $overlay = $('<div class="jDialog-overlay"></div>');
                $overlay.click(closeDialog);
            }

            $dialog.find('[data-dismiss="JDialog"]').click(closeDialog);

            var $trigger = $('[data-toggle="JDialog"][data-target=' + $dialog.attr('id') + ']');
            $trigger.click(function () {
                if(settings.allowOverlay) {
                    $('body').append($overlay);
                }
                $dialog.addClass('show');
            });
        });
    }
}(jQuery));