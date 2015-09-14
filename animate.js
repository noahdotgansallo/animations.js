function fade(element, time)
{
	element.fadeIn(time, function(){});
}

function move(element, time, offset)
{
	$('html, body').animate({
		scrollTop: element.offset().top - offset
	}, time)
}