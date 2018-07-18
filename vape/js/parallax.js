var photo = document.querySelector('.cont.first');

window.addEventListener('scroll', function(){
    photo.style.backgroundPositionY = pageYOffset*0.5 + 'px';
});