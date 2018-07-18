const menu = document.querySelector('.menu-wrapper menu')
const site = document.querySelector('.site')
const menu2 = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')

const floatingMenuBtn = document.querySelector('.floatingMenuBtn')
const floatWrapper    = document.querySelector('.float_btn')

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
		floatWrapper.classList.add('showed')
	} else {
		floatWrapper.classList.remove('showed')
	}
})



//jq soft scroll
let toAbout     = document.querySelector('#about').getBoundingClientRect().top
let toSkills    = document.querySelector('#skills').getBoundingClientRect().top
let toPortfolio = document.querySelector('#portfolio').getBoundingClientRect().top
let toContacts  = document.querySelector('#contacts').getBoundingClientRect().top
$('a[href*="#"]').on('click', function(e){
    if ($(this).attr('href') == '#main') {
		$('.site').animate({
			scrollTop: 0
		},500);
	} else if ($(this).attr('href') == '#about') {
		$('.site').animate({
			scrollTop: toAbout + 20
		},500);
	} else if ($(this).attr('href') == '#skills') {
		$('.site').animate({
			scrollTop: toSkills + 20
		},500);
	} else if ($(this).attr('href') == '#portfolio') {
		$('.site').animate({
			scrollTop: toPortfolio + 20
		},500);
	} else if ($(this).attr('href') == '#contacts') {
		$('.site').animate({
			scrollTop: toContacts + 20
		},500);
	}
	closingMenu()
    e.preventDefault();
})

