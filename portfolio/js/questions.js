//Получение всех элементов вопросника
const allQ = _$('section.questions')

let h4      = allQ.querySelector('h4'),
    p       = allQ.querySelector('p.title'),
    answers = allQ.querySelector('.answers'),
    radio   = allQ.querySelectorAll('input[type=radio]')

let next = allQ.querySelector('a.btn')

//Для сохранения данных об опросе
let Data = {
	type : "",
	price : 0,
	responsive : false,
	form : false,
	slider : false, 
	manyscreens : false
}

//Номер вопроса
let numberQ = 0
//Ветка вопросов
let branchQuestions
//Функции
const loadFirst = (lending)=>{
	if (lending) {
		Data.type = "Лендинг"
		Data.price = 50
		console.log("Лендинг")
	} else {
		Data.type = "Визитка"
		Data.price = 40
		console.log("Визитка")
	}
	nextQuestion(questionsLending)
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
	if ( Data.responsive == true ) Data.price = Data.price * 1.2
	console.log(JSON.stringify(Data))
},

addAnswer = (id, text, price)=>{
	let elem = document.createElement('div')
	elem.classList.add('answer-vertical')
	elem.innerHTML = `<input type="radio" id="r${id}" name="question"><label for="r${id}"><p class="text">${text}</p><div class="price">${price}</div></label>`
	answers.appendChild(elem)
},

changeQuestion = (question)=>{
	answers.innerHTML = ''
	answers.classList.add('vertical')
	for ( let i in question.answers ) {
		addAnswer(i+1, question.answers[i].text, question.answers[i].price)
	}
	h4.innerHTML = question.h4
	p.innerHTML = question.p
},

hide = ()=>{
	answers.classList.add('hide')
	h4.classList.add('hide')
	p.classList.add('hide')
},

unhide = ()=>{
	answers.classList.remove('hide')
	h4.classList.remove('hide')
	p.classList.remove('hide')
},

nextQuestion = (questionsWhat)=>{	
	let checked = false
	for ( let el of allQ.querySelectorAll('input[type=radio]') ) {
		if ( el.checked ) {
			checked = true
		}
	}
	if ( checked ) {
		let n,
			radios = allQ.querySelectorAll('input[type=radio]') 
		for ( let i in radios ) {
			if ( radios[i].checked ) {
				n = i
			}
		}
		if ( numberQ <= questionsWhat.length && numberQ > 0 ) {
			if (questionsWhat[numberQ-1].answers[n].id) {
				console.log(questionsWhat[numberQ-1].answers[n].id)
				Data[questionsWhat[numberQ-1].answers[n].id] = true
			}
			if ( questionsWhat[numberQ-1].answers[n].price[questionsWhat[numberQ-1].answers[n].price.length - 1] == '$' )
				Data.price += parseInt(questionsWhat[numberQ-1].answers[n].price)
		}
		numberQ++
		if ( numberQ <= questionsWhat.length ) {
			hide()
			setTimeout(()=>{
				changeQuestion(questionsWhat[numberQ-1])
				unhide()
			}, 300)
		} else {
			finish()
		}
	} else {
		errChoose()
	}
}

//Вопросы
let questionsLending = [
    {
        h4 : "Мобильный дизайн",
        p : "Хотите ли вы иметь на сайте адаптивный дизайн (чтобы на мобилках было удобно)?",
        answers : [
            {
                text : "С адаптивностью",
				price : "+20%",
				id : "responsive"
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
				price : "+10$",
				id : "form"
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
				price : "+10$",
				id : "slider"
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
				price : "+35$",
				id : "manyscreens"
            }
        ]
    }
]




//Проверка
if (next) next.addEventListener('click', (e)=>{
	e.preventDefault()
	if (numberQ == 0) {
		if (radio[0].checked==true || radio[1].checked==true) {
			let lending = false
			if (radio[1].checked==true) lending = true
			loadFirst(lending)
			branchQuestions = questionsLending
		} else if (radio[2].checked==true) {
			loadSecond()
		} else if (radio[3].checked==true) {
			loadThird()
		} else {
			errChoose()
		}
	} else {
		nextQuestion(branchQuestions)
	}
})