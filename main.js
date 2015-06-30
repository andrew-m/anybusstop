$(function () {
    $('#go').click(function(){
        var number = $('#number-textbox').val();
        window.location.href = "http://m.countdown.tfl.gov.uk/arrivals/" + number;
    });
});
