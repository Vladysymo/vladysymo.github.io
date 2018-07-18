window.addEventListener('scroll', function(){
    pageYOffset>=100? document.querySelector('header').classList.add('shadow') : document.querySelector('header').classList.remove('shadow');
});

var sectors = document.querySelectorAll('.cont');

sectors.forEach(function(sector, number){
    window.addEventListener('scroll', function(){
        if (number > 0) {
            if (sector.getBoundingClientRect().top <= 100){
                document.querySelector('header').style.backgroundColor = getComputedStyle(sector).backgroundColor;
            }
        } else {
            document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    });
});