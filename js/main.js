$(function(){
    // gotop 버튼 위치고정
    $(window).scroll(function(){
        if($('.campaign').offset().top + 400 <= $(window).scrollTop()){
            $('.gotop').css({
                bottom : '520px',
                position : 'fixed'
            })
        }else{
            $('.gotop').css({
                bottom : '30px',
                position : 'sticky',
            })
        }
    })

    // gotop 버튼
    $('.gotop').click(function(e){
        e.preventDefault()
        $('html, body').animate({
            scrollTop : 0
        },800)
    })

    // header 효과

    let lastScroll = 0;
    $(window).on("scroll", function () {

        const st = $(this).scrollTop();

        // 맨 위
        if (st === 0) {
            $('header').removeClass('on')
        }
        // 내릴때
        else if (st > lastScroll) {
            $('header').addClass('on')
            $('header').addClass('none')
        }

        // 올릴때
        else {
            $('header').addClass('on')
            $('header').removeClass('none')
        }

        lastScroll = st;
    });

    $('header').mouseenter(function(){
        $('.headerbg').stop().slideDown(200)
        $('.sub').stop().slideDown(100)
        $('header').addClass('on')
    })
    $('header').mouseleave(function(){
        $('.headerbg').stop().slideUp(200)
        $('.sub').stop().slideUp(100)
        // $('header').removeClass('on')
    })
})