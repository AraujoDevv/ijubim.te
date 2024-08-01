$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    var popup = $('#popup');
    var closePopup = $('.close-popup');

    envelope.click(function(){
        open();
    });
    btn_open.click(function(){
        open();
    });
    btn_reset.click(function(){
        close();
    });

    function open() {
        envelope.addClass('open').removeClass('close');
        setTimeout(showPopup, 3000); // Exibe o pop-up após 3 segundos
    }

    function close() {
        envelope.addClass('close').removeClass('open');
        popup.addClass('hidden');
    }

    function showPopup() {
        popup.removeClass('hidden');
    }

    closePopup.click(function() {
        popup.addClass('hidden');
    });
});
