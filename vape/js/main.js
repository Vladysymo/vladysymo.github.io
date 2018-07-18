//Header
document.querySelector('#menu-button')
	.addEventListener('click', function() {
		document.querySelector('#menu-button').classList.toggle('clicked');
        document.querySelector('header ul').classList.toggle('close');
});

document.querySelectorAll('header ul li a').forEach(function(el){
    el.addEventListener('click',function(){
        setTimeout(function(){
            document.querySelector('header ul').classList.toggle('close');
            document.querySelector('#menu-button').classList.toggle('clicked');
        },200);
    });
});

document.querySelector('#logo').addEventListener('click',function(){
    document.querySelector('header ul').classList.add('close');
    document.querySelector('#menu-button').classList.remove('clicked');
});


$('a[href^="product"]').on('click', function(){
    var el = $(this).attr("href");
    setTimeout(function(){
        location.href = el;
    },520);
    return false;
});

//function NextP(e){
//    setTimeout(function(){
//        location.href = this.getAttribute('href');
//    },1000);
//    return false;
//}