const catalog = document.querySelectorAll('ul li .toggleCat')
console.log(catalog)

for (let el of catalog) {
	el.addEventListener('click', (e)=>{
		e.preventDefault()
		if (!el.parentNode.classList.contains('active')) {
			for (let elem of catalog) {
				elem.parentNode.classList.remove('active')
			}
			el.parentNode.classList.add('active')
		} else {
			el.parentNode.classList.remove('active')
		}
	})
}