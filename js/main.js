$(document).ready(function() {

	// Find all hashtags in text and wrap in <a> tag with class "hashtag":
	$('#photos').find('li .text').each(function() {
		var words = $(this).html().split(' ');
		for(var i in words) {
			if(words[i][0] === '#' || words[i][0] === '@') {
				words[i] = '<a class="hashtag" target="new" href="#">' + words[i] + '</a>';
			}
		}
		$(this).html(words.join(' '));
	});

	var interval = setInterval(scroll, 4000);

});

function scroll() {
	var offset = 24,
		$active = $('#photos li.active'),
		$next = $active.next();

	if(!$next.length) {
		$next = $('#photos').find('li').first();
	}

	$active.removeClass('active');
	$next.addClass('active');

	var current_pos = parseInt($('#photos').css('margin-top'), 10);
	var next_pos = $next.offset().top;

	$('#photos').animate({'margin-top': -(-current_pos + next_pos + offset)}, 500, 'easeOutQuad');
}
