var buttons = document.querySelectorAll('.pulse');

buttons.forEach(function(e){
    e.addEventListener('mousedown', Mouse);
});

function Mouse(k) {
    let 
        circle = document.createElement('div'),
        rect   = this.getBoundingClientRect(),
        posX   = k.x - rect.left,
        posY   = k.y - rect.top,
        width  = rect.right - rect.left,
        height = rect.bottom - rect.top,
        hw     = Math.max(width, height);
    circle.classList.add('pulse-circle');
    circle.style.height = circle.style.width = hw * 2 + 'px';
    circle.style.top = posY - hw + 'px';
    circle.style.left = posX - hw + 'px';
    this.appendChild(circle);
    setTimeout(function(){ 
        circle.style.transform = 'scale(1)'; 
    },1);
    this.addEventListener('mouseup',function(){
        circle.style.opacity = '0';
    });
}




var prod = document.querySelectorAll('a[href^="product"]');

prod.forEach(function(product){
    product.addEventListener('mouseup', NextPage);
});

function NextPage(z) {
    let 
        posX = z.x,
        posY = z.y,
        hw   = Math.max(document.documentElement.clientHeight, document.documentElement.clientHeight),
        eff  = document.createElement('div');
    eff.classList.add('next-effect');
    eff.style.height = eff.style.width = hw * 4 + 'px';
    eff.style.top = posY - hw * 2 + 'px';
    eff.style.left = posX - hw * 2 + 'px';
    document.body.appendChild(eff);
    setTimeout(() => {
        eff.style.transform = 'scale(1)'; 
    },20);
//    setTimeout(() => {
//        eff.style.opacity = '0';
//    }, 10)
}