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
		"<span>As-salām ʿAlaykum!</span>",
		"<span>Welcome, O Servant of The Beloved ﷺ.</span>",
		"<span>I’m just a little helper.</span>",
		"<span>I’ll tell you if anything new is added to the website.</span>",
		"<span>I’ll also tell you if there’s an event coming up.<br/>And there is! Less than 2 months away.</span>",
		"<span>Btw, I work great on small phones too.</span>",
		"<span></span>",
		"<span></span>",
		"<span></span>",
		"<span></span>"];
	Materialize.toast(toasts[0], 4000, 'rounded');
	setTimeout(function() {Materialize.toast(toasts[1], 4000, 'rounded');}, delayMillis);
	setTimeout(function() {Materialize.toast(toasts[2], 4000, 'rounded');}, delayMillis*2);
	setTimeout(function() {Materialize.toast(toasts[3], 4000, 'rounded');}, delayMillis*3);
	setTimeout(function() {Materialize.toast(toasts[4], 4000, 'rounded');}, delayMillis*4);
	setTimeout(function() {Materialize.toast(toasts[5], 4000, 'rounded');}, delayMillis*5);
}