const menu = _$('.menu-wrapper menu')
const site = _$('.site')
const menu2 = _$('.menu')
const closeMenu = _$('.close-menu')

const floatingMenuBtn = _$('.floatingMenuBtn')
const floatWrapper    = _$('.float_btn')
const themeBtn        = _$('.theme')

const skillLines = __$('.line')
const cardAbout  = _$('.site .about .row .card')

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
	themeBtn.classList.remove('open')
}

themeBtn.addEventListener('click', ()=>{
	themeBtn.classList.toggle('open')
})


site.addEventListener('scroll', ()=>{
	if (site.scrollTop >= 200) {
		floatWrapper.classList.add('showed')
	} else {
		floatWrapper.classList.remove('showed')
	}
	for (let line of skillLines) {
		if (line.getBoundingClientRect().top <= $(window).height()*0.8) 
			line.classList.add('active')
	}
	if (cardAbout.getBoundingClientRect().top <= $(window).height()*0.5) cardAbout.classList.add('active')
})



//jq soft scroll
let toAbout     = _$('#about').getBoundingClientRect().top
let toSkills    = _$('#skills').getBoundingClientRect().top
let toPortfolio = _$('#portfolio').getBoundingClientRect().top
let toContacts  = _$('#contacts').getBoundingClientRect().top
$('a[href*="#"]').on('click', function(e){
    if ($(this).attr('href') == '#main') {
		$('.site').animate({
			scrollTop: 0
		},500);
	} else if ($(this).attr('href') == '#about') {
		$('.site').animate({
			scrollTop: toAbout
		},500);
	} else if ($(this).attr('href') == '#skills') {
		$('.site').animate({
			scrollTop: toSkills
		},500);
	} else if ($(this).attr('href') == '#portfolio') {
		$('.site').animate({
			scrollTop: toPortfolio
		},500);
	} else if ($(this).attr('href') == '#contacts') {
		$('.site').animate({
			scrollTop: toContacts
		},500);
	}
	closingMenu()
    e.preventDefault();
})

window.onload = ()=>{
//	$('.site').scrollTop($(window).height()*2)
}



