const menuBtn = document.querySelector('.floatingMenuBtnBack')
const menuInHeader = document.querySelector('.menu-wrapper-back menu')

menuBtn.addEventListener('click', ()=>{
	window.close()
})

menuInHeader.addEventListener('click', ()=>{
	window.close()
})

const floatWrapper    = document.querySelector('.float_btn')
document.querySelector('.site').addEventListener('scroll', ()=>{
	if (document.querySelector('.site').scrollTop >= 200) {
		floatWrapper.classList.add('showed')
	} else {
		floatWrapper.classList.remove('showed')
	}
})




const workElems = document.querySelectorAll('.works .work')
const popup     = document.querySelector('.popup_wrapper')
const popupIn   = document.querySelector('.popup_wrapper .popup')

const popupData = {
	"portfol": {
		title:       'Портфолио',
		site:        'https://vladysymo.github.io/portfolio/',
		description: 'Это то, где вы сейчас находитесь. Это мой последний сайт-портфолио. Он был создан, чтобы показать мои способности в веб-разработке, а так же показать мои ранее сделанные работы. Этот сайт использует такие технологии как Node.js, Bootstrap, ES6 и выглядит в моем любимом стиле Material от Google. Сам рисовал дизайн, сам верстал на HTML5 и CSS3, сам писал фронтенд на JavaScript ES6 и сам писал бекенд на JavaScript используя Node.js',
		photos:      '<p>Фото:</p> <img src="../img/portfolio.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"lastportfolio": {
		title:       'Прошлое портфолио',
		site:        'https://vladysymo.tk',
		description: 'Сайт был мной спроектирован и сверстан. Написан на PHP7, ES6, HTML5 и CSS3. Это мой первый сайт-портфолио. Здесь я пытался сделать его для нескольких языков, что, собственно, и получилось: на сайте есть русский и английский язык. Здесь я применял самые последние технологии в CSS3, в частности, переменные. И из-за этого сайт получился не кроссбраузерным, но зато адаптивным. Сетку bootstrap не использовал, так как думал, что обойдусь. В итоге, получилось не очень.',
		photos:      '<p>Фото:</p> <img src="../img/lastportfolio.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"alliance": {
		title:       'Альянс IT',
		site:        'http://allianceit.000webhostapp.com/',
		description: '',
		photos:      '<p>Фото:</p> <img src="../img/alliance.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"bot": {
		title:       'Бот для ВК',
		site:        'https://vk.com/im?sel=-168272455',
		description: '',
		photos:      '<p>Фото:</p> <img src="../img/bot.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"shooter": {
		title:       'Онлайн игра',
		site:        'https://game-shooter.herokuapp.com/',
		description: '',
		photos:      '<p>Фото:</p> <img src="../img/shooter.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"ldoe": {
		title:       'Сайт Last Day on Earth',
		site:        'https://vladysymo.github.io/ldoe/',
		description: '',
		photos:      '<p>Фото:</p> <img src="../img/ldoe.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"vlpro": {
		title:       'Vladysymo PC',
		site:        'http://wwwvladysymopro.000webhostapp.com/',
		description: '',
		photos:      '<p>Фото:</p> <img src="../img/vlpro.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"jtc": {
		title:       'Join the colors',
		site:        'https://vladysymo.github.io/jtc/',
		description: '',
		photos:      '<p>Фото:</p> <img src="../img/jtc.png" alt=""> <img src="../img/bg.png" alt="">'
	},
	"vape": {
		title:       'Вейп в Тирасполе',
		site:        'https://vladysymo.github.io/vape/',
		description: '',
		photos:      '<p>Фото:</p> <img src="../img/vape.png" alt=""> <img src="../img/bg.png" alt="">'
	},
}

let openPopup = ()=>{
	popup.classList.add('open')
	document.querySelector('section.site').style.overflow = 'hidden'
}
let closePopup = ()=>{
	popup.classList.remove('open')
	document.querySelector('section.site').style.overflow = ''
}
let changePopup = (pattern)=>{
	document.querySelector('.popup_wrapper .popup .title span').innerHTML = popupData[pattern].title
	document.querySelector('.popup_wrapper .popup .work-link span').innerHTML = popupData[pattern].site
	document.querySelector('.popup_wrapper .popup .work-link a').setAttribute('href', popupData[pattern].site)
	document.querySelector('.popup_wrapper .popup .decription span').innerHTML = popupData[pattern].description
	document.querySelector('.popup_wrapper .popup .photos').innerHTML = popupData[pattern].photos
}

for (let el of workElems){
	el.addEventListener('click', ()=>{
		changePopup(el.classList[1])
		openPopup()
	})
}
popup.addEventListener('click', (e)=>{
	if (!(e.x > popupIn.getBoundingClientRect().left && e.x < popupIn.getBoundingClientRect().right &&
	   	e.y > popupIn.getBoundingClientRect().top  && e.y < popupIn.getBoundingClientRect().bottom)) {
		closePopup()
	}
})
		
