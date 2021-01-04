const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://joke3.p.rapidapi.com/v1/joke",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "69e3109bbemsh20d7e2c9aa45c7bp151276jsn4fcd9f9386a5",
        "x-rapidapi-host": "joke3.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
        let my = response.content;
        $('.insult p').text(my);
})

$('.generateNew').click(function(){
    $.ajax(settings).done(function (response) {
        let my = response.content;
        $('.insult p').text(my);
    })
});

$('.laugh').click(function(){
    let aud = document.querySelector('audio');
    aud.play();
});

$(document).ready(function() {

    $(".mainScroll").click(function () {
        let elementClick = $(this).attr("href")
        let destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

        function currentTime() {
            let d = new Date();
            let strTime = d.getHours() + ":" +  d.getMinutes();
            if(d.getMinutes() <= 9) {
                strTime = d.getHours() + ":" + "0" + d.getMinutes();
            }
            else {
                strTime = d.getHours() + ":" +  d.getMinutes();
            }
            $('.h').text(strTime);

            if(d.getHours() <= 12) {
                $('.dayTime').text('Morning');
            }
            else if(d.getHours() <= 18) {
                $('.dayTime').text('Afternoon');
            } 
            else if(d.getHours() <= 21) {
                $('.dayTime').text('Evening');
            } 
            else if(d.getHours() <= 23) {
                $('.dayTime').text('Night');
            }   
         }
        setInterval(currentTime, 500);

        $('.formName').submit(function(event){
            $('#time').css('display', 'block');
            
            let name = $('.nameInp').val();
            $('.name').css('text-transform', 'capitalize');
            $('.name').text(name);
                               
            $('.formName').css('display', 'none');
            $('body').css('overflow-y', 'scroll');
            event.preventDefault();
        });
    });