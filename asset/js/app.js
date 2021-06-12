const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');

    burger.addEventListener('click', () => {
        // toggle
        nav.classList.toggle('nav-active');

        // // animation
        // navLinks.forEach((link, index ) => {
        // 	if (link.style.animation){
        // 		link.style.animation = '';
        // 	} else {
        // 		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        // 	}
        // });
        // burger animation
        burger.classList.toggle('toggle');
    });
}

navslide();

// slide effect 

$(window).on('load', function() {
    $('.lastpop').addClass('popup');
});
$(window).on('load', function() {
    $('.poppp').addClass('firstpop');
});
$(window).on('load', function() {
    $('.poppp2').addClass('secondpop');
});

// for about page & works page

$(window).on('load', function() {
    $('.slide').addClass('sliding');
});