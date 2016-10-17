$(document).ready(function () {


  $('.tabs li').click(function () {

                $('.tab-active').removeClass('tab-active');
                $(this).addClass('tab-active');
                var dataId = $(this).data('id');
                $('.tab-content').removeClass('content-active');
                $('.tab-content[data-id=' + dataId + ']').addClass('content-active');
            });


    $(window).scroll(function () {
        var new_menu = $(".head-bottom");
        if ($(document).scrollTop() > 50) {

            new_menu.addClass("fixed");
        } else {
            new_menu.removeClass("fixed");
        }

    });




    //rotation speed and timer
    var speed = 5000;

    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();


    //if user clicked on prev button

    $('#buttons a').click(function (e) {
        //slide the item

        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }

        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }

        //cancel the link behavior            
        return false;

    });

    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });


    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
    $('.showPopup').click(function () {

        var title = $(this).parent().parent().find('h3').text();
        var content = $(this).parent().parent().find('.full-content').text();

        $('.popup-content .title').text(title);
        $('.popup-content section div').text(content);



        $('.popup').show(1000);

    });

    $('.close, .popup .bg').click(function () {

        $('.popup').hide(1000);
    });

    $('.popup .clickNext').click(function () {

//        var article = $('.news article ').attr('id');

//        var id = article;
//        console.log(id);
//        var nextId = id++;
//        
//        
//        console.log(nextId);
//        nextId++;
//        console.log(nextId);
//        article = nextId;
//        
//        var title = $('.news').find('article[id=' + nextId + '] h3').text();
//        var content = $('.news').find('article[id=' + nextId + '] .full-content').text();


        var title = $('.teest').next().find('h3').text();
        var content = $('.teest').next().find('.full-content').text();

        $('.popup-content .title').text(title);
        $('.popup-content section div').text(content);
        console.log('.clickNext');


    });
    $.ajax({
        url: "ajax-content.html"
    }).done(function (data) {
        $('.ajax-content').html(data).slideDown(2000);
    });

    $('.search input#front-input').keyup(function (event) { // event odwolujemy sie to jego wlasciwosci

        var inputValue = $(this).val();


        $.ajax({//uruchamiamy ajaxa 
            url: "dictionary.php?search=" + inputValue
        }).done(function (data) { // wywola sie wtedy kiedy zaladuje sie poprawnie plik 
            var dataParsed = jQuery.parseJSON(data); // w dataPArsed mamy date w ktorej sie znajduje zwrot dictionary.php

            var $ul = $('<ul>'); // tworzymy ul
            var liList = ''; // tworzymy zmienna typu sgtring

            $.each(dataParsed, function (key, value) { // dla kazdego elementu w dataParsed po kluczu i wartosci
                liList += '<li>' +
                        '<a href="' + value + '">' + key + '</a>' +
                        '</li>'; // do naszego stringa doklejami kolejne wartosci z petli
            });

            $ul.append(liList); // DOKLEJAMY DO ULKI
            if ($('.search-results li.active').length === 0) { // jezeli w clasie active nic sie nie znajduje to
                $('.search-results').html($ul); // to do naszej pustej klasy ma wstawic ul !
            }

            if (dataParsed) { //jesli istnieje data parsed

                var firstKey = Object.keys(dataParsed)[0]; // do zmiennej first key zczytaj klucze
                $('#hidden-input').val(firstKey); // do id hiden input dodajemy wartosc klucza 
                var activeLi = $('.search-results li.active'); //tworzymy zmienna ktora bedzie trzymala scieszke 
                switch (event.keyCode) { // jezeli event jest wykonywany z konktrenym atrybutem(wlasciwoscia)

                    case 13:
                        if (activeLi) { //
                            window.open(activeLi.find('a').attr('href'));
                        } else { // a jesli nie ma niczego na  bordowo 
                            var firstUrl = dataParsed[Object.keys(dataParsed)[0]];
                            if (firstUrl.length) { // jesli istnieje 
                                window.open(firstUrl, '_blank'); // otwieramy okno z url pierwszym
                            }
                        }

                        break;
                    case 38: // up

                        if (activeLi.length && !$('.search-results li').first().hasClass('active')) { // jezeli istnieje activeli i nie ma przypisanej klasy active
                            activeLi.prev().addClass('active'); // do poprzedniego dodajemy clase active
                            activeLi.removeClass('active'); // a aktualnymu usun klase active
                        } else {
                            activeLi.removeClass('active');       //usun klase active                                  
                            $('.search-results li').last().addClass('active');
                        }

                        break;
                    case 40: // down
                        var activeLi = $('.search-results li.active');
                        if (activeLi.length && !$('.search-results li').last().hasClass('active')) {
                            activeLi.next().addClass('active');
                            activeLi.removeClass('active');
                        } else {
                            activeLi.removeClass('active');
                            $('.search-results li').first().addClass('active');
                        }

                        break;

                    default:
                        return; // exit this handler for other keys
                }
            }
        });
    });
$('.unclicableX').unclicableX();
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();



}