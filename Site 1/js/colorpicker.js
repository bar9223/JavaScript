var color;

var colors = ['marineblue', 'redhot', 'leafgreen', 'deeppurple','remover'];

function createPalette(){
    var result = '<div class="palette" style="background: transparent!important">';
    $.each(colors, function(c){
        result += '<div class="color-pick '+c+'" data-id="'+c+'"></div>'
    });
    result += '</div>';
}
var html = createPalette();



(function ($) {


    $.fn.colorPicker = function () {
        $('.color-pick').click(function () {
            $('.active-color-pick').removeClass('active-color-pick');
            $(this).addClass('active-color-pick');
            
            color = $(this).data('id');
            console.log(color);
        });
        return this;
    };
}(jQuery));

(function ($) {
    $.fn.colorSet = function () {
        if (color !== "remover") {
            if ((color.length) && (!$(this).hasClass('color-pick'))) {
                $(this).addClass(color);
            }
        }
        return this;
    };
}(jQuery));

(function ($) {
    $.fn.remover = function () {
        if (color === "remover") {
            
            $.each(colors, function(c){
                if ($(this).hasClass(c)) {
                    $(this).removeClass(c);
                }
            });
        }
        return this;
    };
}(jQuery));

$(document.body).append(html);

$(document).colorPicker();

$(document).on('click', function (event) {
    $target = $(event.target);
    $target.colorSet();
});

$(document).on('click', function (event) {
    $target = $(event.target);
    $target.remover();
});