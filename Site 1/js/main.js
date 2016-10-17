
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(document).ready(
        function ()
        {
            $('input[type=submit]').click(function (ev) {

                ev.preventDefault();

                var flag = true;
                var $emailInput = $('input[name=email]');
                var $passwordInput = $('input[name=password]');

                if (validateEmail($emailInput.val())) {
                    $emailInput.removeClass('error');
                } else {
                    $emailInput.addClass('error');
                    flag = false;
                }

                if ($passwordInput.val().length < 3) {
                    $passwordInput.addClass('error');
                    flag = false;
                } else {
                    $passwordInput.removeClass('error');
                }

                if (flag) {
                    $('.login-form').submit();
                }
            });



            $('.show-popup').click(function () {

                var title = $(this).parent().parent().find('h3').text();
                var content = $(this).parent().parent().find('.full-content').text();

                $('.popup-content header h2').text(title);
                $('.popup-content section').text(content);

                $('.popup').show(1000);
            });

            $('.popup .fa-times, .popup .bg').click(function () {
                $('.popup').hide(1000);
            });

            $.ajax({
                url: "ajax-content.html"
            }).done(function (data) {
                $('.ajax-content').html(data).slideDown(2000);
            });


            $('.search input#front-input').keyup(function (event) {

                var inputValue = $(this).val();
                
                
                $.ajax({
                    url: "dictionary.php?search=" + inputValue
                }).done(function (data) {
                    var dataParsed = jQuery.parseJSON(data);

                    var $ul = $('<ul>');
                    var liList = '';

                    $.each(dataParsed, function (key, value) {
                        liList += '<li>' +
                                '<a href="' + value + '">' + key + '</a>' +
                                '</li>';
                    });

                    $ul.append(liList);
                    var activeLi = $('.search-results li.active');
                    if (activeLi.length === 0) {
                        $('.search-results').html($ul);
                    }
                    
                    if (dataParsed) {
                        
                        var firstKey = Object.keys(dataParsed)[0];
                        $('#hidden-input').val(firstKey);
                        
                        switch (event.keyCode) {
                            case 13:
                                if (activeLi) {
                                    window.open(activeLi.find('a').attr('href'));
                                } else {
                                    var firstUrl = dataParsed[firstKey];
                                    if (firstUrl.length) {
                                        window.open(firstUrl, '_blank');
                                    }
                                }
                                break;
                            case 38: // up
                                
                                    if (activeLi.length && !$('.search-results li').first().hasClass('active')) {
                                        activeLi.prev().addClass('active');
                                        activeLi.removeClass('active');
                                    } else {
                                        activeLi.removeClass('active');                                        
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


        $('.tabs li').click(function(){
            $('.tab-active').removeClass('tab-active');
            $(this).addClass('tab-active');
            
            var dataId = $(this).data('id');

            $('.tab-content').removeClass('content-active');
            $('.tab-content[data-id='+dataId+']').addClass('content-active');
            
            
        }); 






        }
        );


