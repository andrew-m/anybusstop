$(function () {
    $('#target').submit(function(event){
        var number = $('#number-textbox').val();
        event.preventDefault();
        window.location.href = "http://m.countdown.tfl.gov.uk/arrivals/" + number;
    });
});
