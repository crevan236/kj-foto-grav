// put your js here :-)
window.addEventListener('load', function() {
    manageBars();

    let url = window.location.hash;
    if (url.length === 0) {
        window.location.hash = '#home';
        url = '#home';
    }
    var menu = document.querySelectorAll('.menu-item');
    
    menu.forEach(el => {
        if ('#' + el.href.split('#')[1] == url) {
            el.classList.add('active');
        }
        el.addEventListener('click', function() {
            var prevEl = document.querySelector('.active');
            prevEl.classList.remove('active');
            el.classList.add('active');
        });
    });
});

var navbar = document.querySelector('.navbar');

window.addEventListener('touchmove', function(e) {
    if (e.pageY > 10) {
        navbar.classList.add('bg-white');
    } else {
        if (navbar.classList.contains('bg-white')) {
            navbar.classList.remove('bg-white');
        }
    }
});

function manageBars () {
    const menu = document.querySelector('.menu');
    const bars = document.querySelector('.bars');
    menu.classList.add('hidden-to-right');
    bars.addEventListener('click', () => {
        if (menu.classList.contains('hidden-to-right')) {
            menu.classList.remove('hidden-to-right');
        } else {
            menu.classList.add('hidden-to-right');
        }
    });
}