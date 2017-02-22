var toasts;
var delayMillis = 1500;
$(document).ready(function() {
    $('.slider').slider({ indicators: false, interval: 2000 });
    $('ul.tabs').tabs({ swipeable: true });
    firetoasts();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }
});

var thousandPoemAudio = document.getElementById('thousandPoemAudio');
thousandPoemAudio.addEventListener('play', function(e) {
    ga('send', 'event', '1000Poem(Audio)', 'Click', 'Audio');
});
var thetale = document.getElementById('thetale');
thetale.addEventListener('play', function(e) {
    ga('send', 'event', 'specialMiraj(Audio)', 'Click', 'Audio');
});

firetoasts = function() {
    toasts = [
        /*0*/
        "Salām, O Servant of The Beloved ﷺ!",
        /*1*/
        "I’m getting some under-the-hood updates. So don't be worried if I'm broken for a few days. Sowe :<",
        /*2*/
        "💚",
        /*3*/
        "Add me to your phone's homescreen.",
        /*4*/
        ""
    ];

    for (var x = 0; x < 3; x++) {
        displaytoasts(x);
    }
}

displaytoasts = function(toastCounter) {
    setTimeout(function() {
        Materialize.toast(toasts[toastCounter], 5500, 'rounded');
    }, delayMillis * (toastCounter + 1));
}

tabSelector = function(page) {
    if (page == 'home') {
        $('ul.tabs').tabs('select_tab', 'home');
        $('ul.tabs').tabs('select_tab', 'dear');
    } else if (page == 'events') {
        $('ul.tabs').tabs('select_tab', 'info');
        $('ul.tabs').tabs('select_tab', 'youreloved');
        $('ul.tabs').tabs('select_tab', '1000lines');
        /*$('#info').trigger('click');
        $('#youreloved').trigger('click');
        $('#1000lines').trigger('click');*/
    } else if (page == 'love') {
        $('ul.tabs').tabs('select_tab', 'honesty');
        /*$('ul.tabs').tabs('select_tab', 'tab_id');
        $('#honesty').trigger('click');
        $('#honesty').addClass("active");*/
    }
}
