$('a').on('click', function (e) {
    e.preventDefault();
})


$(".link_mnu").each(function (i) {
    $(this).attr("href", "#tab" + i);
});

$(".categories-description").each(function (i) {
    $(this).attr("id", "tab" + i);
});
$(".tab_mnu li").click(function (e) {
    e.preventDefault();
    $(".tab_mnu .active").removeClass("active");
    $(this).addClass("active");
    let tab = $(this).find("a").attr("href");
    $(".categories-description").not(tab).css({"display":"none"});
    $(tab).fadeIn(700);
});



$(".li-artist").click(function () {
    if ($(".li-artist").hasClass('active-artist')) {
        $(".li-artist").removeClass('active-artist');
    }
    $(this).addClass('active-artist');

    let dataItems = $(this).data("artistItems");
    let itemsImage = Array.from($('.items-image'));
    let dataItemImage = itemsImage.filter((value) => {
        return value.getAttribute('data-artist-items') === dataItems;
    });
    $(itemsImage).hide();

    $(dataItemImage).fadeIn(700);
    $(".load-more").hide();

});


$(".left").click( function () {
    let currenImage = $('.mini-circle-photo.mini-circle-border');
    let currentImageIndex = currenImage.index();
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = $('.mini-circle-photo').eq(prevImageIndex);
    let bigPeopleBlock = $('.artists-main-block');
    $(bigPeopleBlock).hide();
    if (currentImageIndex === ($('.mini-circle-photo:visible:first').index())) {
        $('.mini-circle-photo').eq(prevImageIndex).show();
        $('.mini-circle-photo').eq(currentImageIndex + 3).hide()
    }
    if ((currentImageIndex) === ($('.mini-circle-photo:first').index())) {
        $('.mini-circle-photo:hidden').show();
        prevImage = $(".mini-circle-photo:last");
    }
    currenImage.removeClass('mini-circle-border');
    prevImage.addClass('mini-circle-border');
    for (let input of bigPeopleBlock) {
        if ($(input).data('artist') === $('.mini-circle-photo.mini-circle-border').data('artist')) {
            $(input).fadeIn(700);
        }
    }
})

$(".right").click( function () {
    let currenImage = $('.mini-circle-photo.mini-circle-border');
    let currentImageIndex = currenImage.index();
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = $('.mini-circle-photo').eq(nextImageIndex);
    let bigPeopleBlock = $('.artists-main-block');
    $(bigPeopleBlock).hide();
    if (currentImageIndex === ($('.mini-circle-photo:visible:last').index())) {
        $('.mini-circle-photo:hidden').show();
        nextImage = $('.mini-circle-photo').eq(0);
    }
    currenImage.removeClass('mini-circle-border');
    nextImage.addClass('mini-circle-border');
    for (let input of bigPeopleBlock) {
        if ($(input).data('artist') === $('.mini-circle-photo.mini-circle-border').data('artist')) {
            $(input).fadeIn(700)

        }
    }
})

$('.hide-artists').hide();

$('.mini-circle-photo').click( function () {
    let people = $(this).data('artist');
    let bigPeopleBlock = $ ('.artists-main-block');
    $(bigPeopleBlock).hide();
    for (let input of bigPeopleBlock) {
        if ($(input).data('artist') === people) {
            $(input).fadeIn(700);
        }
    }

    $(".mini-circle-photo").removeClass("mini-circle-border");
    $(this).addClass("mini-circle-border");
})

