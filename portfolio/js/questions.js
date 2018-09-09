//Получение всех элементов вопросника
const allQ = _$('section.questions')

let h4      = allQ.querySelector('h4'),
    p       = allQ.querySelector('p.title'),
    answers = allQ.querySelector('.answers'),
    radio   = allQ.querySelectorAll('input[type=radio]')

let next = allQ.querySelector('a.btn.next')

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
	hide([allQ])
	setTimeout(()=>{
		allQ.innerHTML = `<h4>Ваш сайт будет стоить <span class="price">${Data.price}$</span></h4><p class="description bugs">+ - 30$ (За недоработки или недочеты как со стороны разработчика, так и заказчика)</p> <p class="note">*Это стоимость за создание сайта под ключ с миоим дизайном и установкой его на хостинг. Если вы хотите хорший дизайн, то закажите его у <a href="https://vk.com/uctamtangirov.official">дизайнера</a></p><h4 class="contact">Оставьте свои контактные данные, чтобы я смог с вами связаться</h4><div class="container feedback"><div class="row"><div class="col-md-6 feedback__field"><div class="icon skype"></div><input type="text" placeholder="alexya371"></div><div class="col-md-6 feedback__field"><div class="icon discord"></div><input type="text" placeholder="Vladysymo#0826"></div><div class="col-md-6 feedback__field"><div class="icon viber"></div><input type="text" placeholder="+37377823062"></div><div class="col-md-6 feedback__field"><div class="icon telegram"></div><input type="text" placeholder="@vladysymo"></div><div class="col-md-6 feedback__field"><div class="icon mailru"></div><input type="text" placeholder="vladysymo@mail.ru"></div><div class="col-md-6 feedback__field"><div class="icon vk"></div><input type="text" placeholder="vk.com/id2451354564"></div></div></div><a href="#" class="btn send-feedback">Отправить</a>`
		unhide([allQ])
		FINISH()
	}, 300)
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

hide = (elems)=>{
	for (let elem of elems) {
		elem.classList.add('hide')
	}
},

unhide = (elems)=>{
	for (let elem of elems) {
		elem.classList.remove('hide')
	}
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
			hide([answers, p, h4])
			setTimeout(()=>{
				changeQuestion(questionsWhat[numberQ-1])
				unhide([answers, p, h4])
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