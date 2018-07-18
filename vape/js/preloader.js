document.body.onload = function() {
    setTimeout(function(){
        let loader = document.querySelector('.preloader');
        if (!loader.classList.contains('done')){
            loader.classList.add('done');
        }
    },500);
}

setTimeout(() => {
    document.querySelector('.breeding-rhombus-spinner').classList.add('visible');
},20);