const menu = document.querySelector('.menu-wrapper menu')
const site = document.querySelector('.site')
const menu2 = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')

const floatingMenuBtn = document.querySelector('.floatingMenuBtn')

menu.addEventListener('click', openMenu)
floatingMenuBtn.addEventListener('click', openMenu)
closeMenu.addEventListener('click', closingMenu)

function openMenu() {
	site.classList.add('site-open')
	menu2.classList.add('open')
}
function closingMenu() {
	setTimeout(()=>{
		site.classList.remove('site-open')
	}, 500)
	menu2.classList.remove('open')
}


site.addEventListener('scroll', ()=>{
	if (site.scrollTop >= 200) {
		floatingMenuBtn.classList.add('showed')
	} else {
		floatingMenuBtn.classList.remove('showed')
	}
})



//jq soft scroll
$('a[href*="#"]').on('click', function(e){
    if ($(this).attr('href') == '#main') {
		$('.site').animate({
			scrollTop: 0
		},500);
	} else if ($(this).attr('href') == '#about') {
		$('.site').animate({
			scrollTop: $(window).height() + 200
		},500);
	} else if ($(this).attr('href') == '#skills') {
		$('.site').animate({
			scrollTop: $(window).height()*2 + 200
		},500);
	} else if ($(this).attr('href') == '#portfolio') {
		$('.site').animate({
			scrollTop: $(window).height()*3 + 200
		},500);
	} else if ($(this).attr('href') == '#contacts') {
		$('.site').animate({
			scrollTop: $(window).height()*4 + 200
		},500);
	}
	closingMenu()
    e.preventDefault();
})

