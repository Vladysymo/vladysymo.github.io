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