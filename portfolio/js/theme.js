//Объявление функций
const _$ = selector => document.querySelector(selector)

const setTheme = (theme, notmain = false)=>{
    let link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    if ( !notmain ) {
        link.setAttribute('href', `css/style-${theme}.css`)
    } else {
        link.setAttribute('href', `../css/style-${theme}.css`)
    }
    _$('head').appendChild(link)
},
checkTheme = (theme)=>{
    if (_$('link[href="css/style.css"]')) {
        _$('link[href="css/style.css"]').remove()
        setTheme(theme)
    } else {
        _$('link[href="../css/style.css"]').remove()
        setTheme(theme, true)
    }
},
changeTheme = (theme)=>{
    let notmain = false
    if ( _$('link[href^="../css"]') ) {
        notmain = true
    }
    if ( _$('head').querySelector('link[href*="css/style"]') ) {
        for ( let el of _$('head').querySelectorAll('link[href*="css/style"]') ) {
            el.remove()
        }
    }
    if ( theme != 'green' ) {
        setTheme(theme, notmain)
    } else {
        let link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        if ( !notmain ) {
            link.setAttribute('href', `css/style.css`)
        } else {
            link.setAttribute('href', `../css/style.css`)
        }
        _$('head').appendChild(link)
    }
}

//Смена темы при загрузке страницы
if ( !localStorage.theme ) {
	localStorage.theme = 'green'
} else {
    if ( localStorage.theme == 'orange' ) {
        checkTheme('orange')
    } else if ( localStorage.theme == 'blue' ) {
        checkTheme('blue')
    } else if ( localStorage.theme == 'red' ) {
        checkTheme('red')
    } else if ( localStorage.theme == 'purple' ) {
        checkTheme('purple')
    } else if ( localStorage.theme == 'black' ) {
        checkTheme('black')
    }
}

//Нахождение кнопок и добавление обработчиков к ним после загрузки страницы
window.addEventListener('load', ()=>{
    let colorPickers = document.querySelectorAll('.color-picker')
    for ( let colorPicker of colorPickers ) {
        colorPicker.addEventListener('click', ()=>{
            let theme = colorPicker.classList[0],
                meta = _$('meta[name="theme-color"]')
            changeTheme(theme)
            localStorage.theme = theme
            if ( theme == 'green' ) {
                meta.setAttribute('content', '#2e7d32')
            } else if ( theme == 'black' ) {
                meta.setAttribute('content', '#000000')
            } else if ( theme == 'blue' ) {
                meta.setAttribute('content', '#2736eb')
            } else if ( theme == 'orange' ) {
                meta.setAttribute('content', '#db9729')
            } else if ( theme == 'red' ) {
                meta.setAttribute('content', '#ad1212')
            } else if ( theme == 'purple' ) {
                meta.setAttribute('content', '#b419c1')
            }
        })
    }
})