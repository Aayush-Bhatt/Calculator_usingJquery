function insrt(num) {
	$('.calc-display').val($('.calc-display').val() + num);
}
function eql() {
	$('.calc-display').val(eval($('.calc-display').val()));
}
function c() {
	$('.calc-display').val('');
}
function del() {
	value = $('.calc-display').val();
	$('.calc-display').val(value.substring(0, value.length - 1));
}

$("h2").fadeOut(1300).fadeIn(1300).fadeOut(1300).fadeIn(1300).fadeOut(1300).fadeIn(1300).fadeOut(1300)
.fadeIn(1300).fadeOut(1300).fadeIn(1300).fadeOut(1300).fadeIn(1300).fadeOut(1300).fadeIn(1300).fadeOut(1300).fadeIn(1300).fadeOut(1300)
.fadeIn(1300).fadeOut(1300).fadeIn(1300);

$("h2").css("text-align", "center");
$("h3").slideUp(3100);
