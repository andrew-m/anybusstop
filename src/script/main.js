$(function () {
    console.log('in document ready');
    $('.submit-button').click(function(event){
        console.log('in submit');
        var number = $('#number-textbox').val();
        event.preventDefault();
        window.location.href = "http://m.countdown.tfl.gov.uk/arrivals/" + number;
    });
    console.log('tried set submit');
    $('.help-button').click(function(event){
        console.log('in help click');
        $('.help-placeholder' ).load( "help.html #container" );
        event.preventDefault();
    });
    console.log('tried set help click');
});
