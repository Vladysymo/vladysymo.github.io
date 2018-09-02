//Получение всех элементов вопросника
const allQ = _$('section.questions')

let h4      = allQ.querySelector('h4'),
    p       = allQ.querySelector('p.title'),
    answers = allQ.querySelector('.answers'),
    radio   = allQ.querySelectorAll('input[type=radio]')

let next = allQ.querySelector('a.btn')

//Для сохранения данных об опросе
let Data = {
    type : ""
}

//Номер вопроса
let numberQ = 0
//Функции
const loadFirst = (lending)=>{
	if (lending) {
		Data.type = "Лендинг"
		Data.price = 50
	} else {
		Data.type = "Визитка"
		Data.price = 40
	}
	let checked = false
	for ( let el of allQ.querySelectorAll('input[type=radio]')) {
		if ( el.checked ) {
			checked = true
		}
	}
	if ( checked ) {
		if ( numberQ == 1 ) {
			if ( allQ.querySelectorAll('input[type=radio]')[0].checked ) {
				Data.responsive = true
			} else {
				Data.responsive = false
			}
		} else if ( numberQ == 2 ) {
			if ( allQ.querySelectorAll('input[type=radio]')[0].checked ) {
				Data.form = true
				Data.price += parseInt(questionsLending[numberQ-1].answers[0].price)
			} else {
				Data.form = false
				Data.price += parseInt(questionsLending[numberQ-1].answers[1].price)
			}
		} else if ( numberQ == 3 ) {
			if ( allQ.querySelectorAll('input[type=radio]')[0].checked ) {
				Data.slider = true
				Data.price += parseInt(questionsLending[numberQ-1].answers[0].price)
			} else {
				Data.slider = false
				Data.price += parseInt(questionsLending[numberQ-1].answers[1].price)
			}
		} else if ( numberQ == 4 ) {
			if ( allQ.querySelectorAll('input[type=radio]')[0].checked ) {
				Data.manyscreens = false
				Data.price += parseInt(questionsLending[numberQ-1].answers[0].price)
			} else {
				Data.manyscreens = true
				Data.price += parseInt(questionsLending[numberQ-1].answers[1].price)
			}
		}
		numberQ++
		if ( numberQ <= questionsLending.length ) {
			answers.classList.add('hide')
			h4.classList.add('hide')
			p.classList.add('hide')
			setTimeout(()=>{
				answers.innerHTML = ''
				answers.classList.add('vertical')
				for ( let i in questionsLending[numberQ-1].answers ) {
					let elem = document.createElement('div')
					elem.classList.add('answer-vertical')
					elem.innerHTML = `<input type="radio" id="r${i+1}" name="question"><label for="r${i+1}"><p class="text">${questionsLending[numberQ-1].answers[i].text}</p><div class="price">${questionsLending[numberQ-1].answers[i].price}</div></label>`
					answers.appendChild(elem)
				}
				h4.innerHTML = questionsLending[numberQ-1].h4
				p.innerHTML = questionsLending[numberQ-1].p
				answers.classList.remove('hide')
				h4.classList.remove('hide')
				p.classList.remove('hide')
			}, 300)
		} else {
			finish()
		}
	} else {
		errChoose()
	}
},
loadSecond = ()=>{
    alert('В разработке...')
},
loadThird = ()=>{
    alert('В разработке...')
},
errChoose = ()=>{
    alert('Выберите что-нибудь!')
},
finish = ()=>{
	if ( Data.responsive ) Data.price *= 1.2
	alert(JSON.stringify(Data))
}

//Вопросы
let questionsLending = [
    {
        h4 : "Мобильный дизайн",
        p : "Хотите ли вы иметь на сайте адаптивный дизайн (чтобы на мобилках было удобно)?",
        answers : [
            {
                text : "С адаптивностью",
                price : "+20%"
            },
            {
                text : "Без адаптивности",
                price : "+0%"
            }
        ]
    },
    {
        h4 : "Отправка формы на почту",
        p : "Будет ли у вас на сайте поля для ввода данных, которые нужно отправлять вам на почту?",
        answers : [
            {
                text : "Да, это ж круто)",
                price : "+10$"
            },
            {
                text : "Нет, обойдусь(",
                price : "+0$"
            }
        ]
    },
    {
        h4 : "Необычный слайдер",
        p : "Будет ли у вас на сайте специфический слайдер?",
        answers : [
            {
                text : "Будет, я его очень хочу)",
                price : "+10$"
            },
            {
                text : "Да нет, обойдусь обычным слайдером",
                price : "+0$"
            }
        ]
    },
    {
        h4 : "Количество экранов",
        p : "Большой ли вы хотите сайт?",
        answers : [
            {
                text : "Обойдусь размером в 5 экранов",
                price : "+15$"
            },
            {
                text : "Да, у меня есть очень много информации (>5 экранов)",
                price : "+35$"
            }
        ]
    }
]




//Проверка
if (next) next.addEventListener('click', ()=>{
    if (radio[0].checked==true || radio[1].checked==true) {
		let lending = false
		if (radio[1].checked==true) lending = true
        loadFirst(lending)
    } else if (radio[2].checked==true) {
        loadSecond()
    } else if (radio[3].checked==true) {
        loadThird()
    } else {
        errChoose()
    }
})