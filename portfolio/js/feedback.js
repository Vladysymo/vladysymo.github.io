function FINISH()
{
const button = _$('a.send-feedback')

button.addEventListener('click', (e)=>{
    e.preventDefault()
    let empty = true
    for (let inp of document.querySelectorAll('input[placeholder]')) {
        if (inp.value) {
            let what = inp.previousSibling.classList[1]
            Data[what] = inp.value
            console.log(`${what}: ${inp.value}`)
            empty = false
        }
    }
    if (empty) {
        errChoose()
    } else {
        alert('Спасибо! Перенаправление на главную через 3 секунды...')
        setTimeout(()=>{
            window.close()
        }, 3000)
    }
})
}