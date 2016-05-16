global.jQuery  = require('jquery');
var bsCollapse = require('bootstrap-styl/js/collapse'),
    bsDropdown = require('bootstrap-styl/js/dropdown'),
    bsTransition = require('bootstrap-styl/js/transition');

(function($){
    var $networksItems = $('.box__items--networks');
    if($networksItems.length){
        function changeIcon(e) {
            $(e.target)
                .parents('.item--networks')
                .find('.glyphicon')
                .toggleClass('glyphicon-minus', 'glyphicon-plus')

        }
        $networksItems.on('show.bs.collapse',changeIcon);
        $networksItems.on('hide.bs.collapse',changeIcon);
    }
})(jQuery);