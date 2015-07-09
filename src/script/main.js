$(function () {
    console.log('in document ready');
    var gofunc = function (event){
        console.log('in submit');
        var number = $('#number-textbox').val();
        event.preventDefault();
        window.location.href = "http://m.countdown.tfl.gov.uk/arrivals/" + number;
    }
    $('.submit-button').click(gofunc);
    $('#number-textbox').on("keyup",(function(e) {
            if(e.which == 13) {
                $('.submit-button').click();
            }
        }));
    console.log('tried set submit');
    $('.help-button').click(function(event){
        console.log('in help click');
        $('.help-placeholder' ).load( "help.html #container" );
        event.preventDefault();
    });
    console.log('tried set help click');
});
