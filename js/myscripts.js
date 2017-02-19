var toasts;
var delayMillis;
$(document).ready(function() {
    $('.slider').slider({ indicators: false, interval: 2000 });
    firetoasts();
    /*starttabs();*/
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
        /*0*/"Salām, O Servant of The Beloved ﷺ!",
        /*1*/"I’m here to help and give updates.",
        /*2*/"Add me to your phone's homescreen.",
        /*3*/"💚",
        /*4*/""];

    for (var x = 0; x < 4; x++) {
        displaytoasts(x);
    }
}

displaytoasts = function(toastCounter) {
	delayMillis = 1500;
    setTimeout(function() {
        Materialize.toast(toasts[toastCounter], 5500, 'rounded');
    }, delayMillis * (toastCounter + 1));
}

/*starttabs = function() {
	$('#home').trigger('click');
	$('#dear').trigger('click');
	$('#info').trigger('click');
	$('#youreloved').trigger('click');
	$('#1000lines').trigger('click');
	$('#honesty').trigger('click');
}*/
