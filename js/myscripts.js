$(document).ready(function() {
    $('.slider').slider({indicators: false, interval: 2000});
    firetoasts();
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
	delayMillis = 1000;
	var toasts = [
		/*0*/"Salām, O Servant of The Beloved ﷺ!",
		/*1*/"I’m here to help and give updates.",
		/*2*/"Add me to your phone's homescreen.",
		/*3*/"💚",
		/*4*/"",
		/*5*/"",
		/*6*/"",
		/*7*/""];
	Materialize.toast(toasts[0], 4000, 'rounded');
	setTimeout(function() {Materialize.toast(toasts[1], 4000, 'rounded');}, delayMillis);
	setTimeout(function() {Materialize.toast(toasts[2], 4000, 'rounded');}, delayMillis*2);
	setTimeout(function() {Materialize.toast(toasts[3], 4000, 'rounded');}, delayMillis*3);
	/*setTimeout(function() {Materialize.toast(toasts[4], 4000, 'rounded');}, delayMillis*4);*/
	/*setTimeout(function() {Materialize.toast(toasts[5], 4000, 'rounded');}, delayMillis*5);*/
	/*setTimeout(function() {Materialize.toast(toasts[6], 4000, 'rounded');}, delayMillis*6);*/
	/*setTimeout(function() {Materialize.toast(toasts[7], 4000, 'rounded');}, delayMillis*7);*/
}