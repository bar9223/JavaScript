(function ($) {

    $.fn.unclicableX = function () {
        
        $divChoice = $('<div>');
        
        var $current = $(this).data('counter');
 
        $myDiv = $('<div>');

        $myDiv.addClass('unclicablexProperties').addClass('unclicablexPosition');
        $myDiv.text('X');

        $myDiv.mouseover(function () {


           
            console.log(typeof $current);
            if (typeof $current !== 'undefined') {
                $current++;
            } else {
                $current = 0;
            }

            $(this).data('counter', $current);
            if($current < 5){
              var posx = (Math.random() * ($(window).width())).toFixed();
            var posy = (Math.random() * ($(window).height())).toFixed();
            $(this).css('top', posy + 'px').css('left', posx + 'px');  
                
            }
             
            
          
        });
        $('body').append($myDiv);
         $myDiv.click(function(){
                
               alert("Dalem Ci fory ;) Spróbój jeszcze raz!!");
             // $current =0;
              $divChoice.removeClass('hidden').addClass('show');
              $button1 = $('<button>');
              $button2 = $('<button>');
              $button1.attr('data-id',1);
              $button1.text('YES');
              $button2.attr('data-id',2);
              $button2.text('NO');
              $button1.addClass('buttons');
              $button2.addClass('buttons'); 
//              $buttoon1.append($divChoice);
//               $buttoon2.append($divChoice);
              
              $divChoice.append($button1);
              $divChoice.append($button2);
              $('body').append($divChoice);
           });
           $divChoice.click(function(){
               
              
               
           });
           

    };

}(jQuery));