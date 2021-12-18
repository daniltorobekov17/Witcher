    let burger = $('.burger');
    let nov = $ ('.header__navbar');

burger.on('click', function () {
    nov.toggleClass('active');
    burger.toggleClass('active');
});
