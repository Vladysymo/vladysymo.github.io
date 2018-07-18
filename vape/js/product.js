var photos = document.querySelectorAll('.photo-block .all-photos img'),
    bigIMG = document.querySelector('.photo-block img');

photos.forEach(function(e){
    e.addEventListener('click', clickPhoto);
});

function clickPhoto(){
    let way = this.getAttribute('src');
    bigIMG.setAttribute('src', way);
    console.log('setted');
}