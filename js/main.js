$(document).ready(function() {

    $('#photos').find('li .text').each(function() {
        var words = $(this).html().split(' ');
        for(var i in words) {
            if(words[i][0] === '#' || words[i][0] === '@') {
                words[i] = '<span class="hashtag">' + words[i] + '</span>';
            }
        }
        $(this).html(words.join(' '));
    });

    var interval = setInterval(scroll, 7000);

    sprites();
    var sprites_interval = setInterval(sprites, 7000);

    $(document).click(function(){
        window.open('http://www.forvarnardagur.is/', '_blank').focus();
    });
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

function sprites() {
    $('#photos li .image')
        .animate({backgroundPosition:0}, 0).delay(2000)
        .animate({backgroundPosition:-265}, 0).delay(100)
        .animate({backgroundPosition:-530}, 0).delay(2000)
        .animate({backgroundPosition:-265}, 0).delay(100)
        .animate({backgroundPosition:0}, 0);
}
