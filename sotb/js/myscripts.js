var toasts;
var delayMillis = 1500;
$(document).ready(function() {
    countdownTimer();
    $('ul.tabs').tabs();
    $('ul.tabs').tabs('select_tab', 'home');
    $('.slider').slider({ indicators: false, interval: 2000 });
    /*$('#home').tabs({onShow: tabSelector('home')});*/

    firetoasts();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
});

var thousandPoemAudio = document.getElementById('thousandlines');
thousandPoemAudio.addEventListener('play', function(e) {
    ga('send', 'event', '1000Lines(Audio)', 'Listen', 'Audio');
});
var thetale = document.getElementById('thetale');
thetale.addEventListener('play', function(e) {
    ga('send', 'event', 'TheTale(Audio)', 'Listen', 'Audio');
});

firetoasts = function() {
    toasts = [
        /*0*/
        "Salām, O Servant of The Beloved ﷺ!",
        /*1*/
        "Ctrl + F5 to get the latest updates.",
        /*2*/
        "Add me to your phone's homescreen.",
        /*3*/
        "💚",
        /*4*/
        ""
    ];

    for (var x = 0; x < 4; x++) {
        displaytoasts(x);
    }
}

displaytoasts = function(toastCounter) {
    setTimeout(function() {
        Materialize.toast(toasts[toastCounter], 5500, 'rounded');
    }, delayMillis * (toastCounter + 1));
}

tabSelector = function(page) {
    setTimeout(function() {
        if (page == 'home') {
            $('ul.tabs').tabs('select_tab', 'dear');
        } else if (page == 'events') {
            $('ul.tabs').tabs('select_tab', 'info');
            $('ul.tabs').tabs('select_tab', 'youreloved');
            $('ul.tabs').tabs('select_tab', 'thousandlines');
        } else if (page == 'schedule') {
            $('ul.tabs').tabs('select_tab', 'verOne');
        }
    }, 5);

    if (page == 'schedule') {
        setTimeout(function() {
            $('ul.tabs').tabs('select_tab', 'verOne');
        }, 15);
    }
}

countdownTimer = function() {
    // Set the date we're counting down to
    var countDownDate = new Date("April 15, 2017 16:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("event-countdown").innerHTML = days + "<sub><small>D</small></sub> " + hours + "<sub><small>H</small></sub> " + minutes + "<sub><small>M</small></sub> " + seconds + "<sub><small>S</small></sub>";

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("event-countdown").innerHTML = "IT'S LIVE NOW!";
        }
    }, 1000);
}

loadGoogleForm = function() {
    $('#rsvp').append("<div class='centerblock'> <iframe class='center-align hide-on-med-and-up' src='https://docs.google.com/forms/d/e/1FAIpQLScBxU2IAe4vW516IPuHKelUqSMRWOyAnexdQfluyLsBASUetA/viewform?embedded=true' width='250' height='1300' frameborder='0' marginheight='0' marginwidth='0'>Loading...</iframe> <iframe class='center-align show-on-medium hide-on-small-and-down' src='https://docs.google.com/forms/d/e/1FAIpQLScBxU2IAe4vW516IPuHKelUqSMRWOyAnexdQfluyLsBASUetA/viewform?embedded=true' width='600' height='1020' frameborder='0' marginheight='0' marginwidth='0'>Loading...</iframe> </div>");
    window.onbeforeunload = null;
}
