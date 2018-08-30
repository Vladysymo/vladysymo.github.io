if (localStorage.theme) {
	if (localStorage.theme == 'red')
		document.write('<link rel="stylesheet" href="css/theme-red.css">')
	if (localStorage.theme == 'black')
		document.write('<link rel="stylesheet" href="css/theme-black.css">')
	//if (localStorage.theme == 'default')
	//	if (document.querySelector('link[href="css/theme-black.css"]'))
	//		document.querySelector('link[href="css/theme-black.css"]').remove()
}