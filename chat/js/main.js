class Message {
    constructor(message, my) {
        this.elem = document.createElement('div')
        this.elem.classList.add('message')
        my ? this.elem.classList.add('my') : this.elem.classList.add('nmy')
        this.messElem = document.createElement('div')
        this.messElem.classList.add('msg')
        this.messElem.innerHTML = message
    }

    add(elem) {
        elem = document.querySelector(elem)
        this.elem.appendChild(this.messElem)
        elem.appendChild(this.elem)
    }
}

let scr = (elem)=>{
    elem = document.querySelector(elem)
    elem.scrollTop = elem.scrollHeight
}

let addMess = (message, my = true)=>{
    if (message) {
        let msg = new Message(message, my)
        msg.add('.chat_list')
        scr('.chat_list')
    } else {
        return false
    }
}

document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let mess = document.querySelector('input').value
    addMess(mess)
    document.querySelector('input').value = ''
    document.querySelector('input').focus()
})

window.addEventListener('resize', ()=>{ 
    let h = document.querySelector('input').getBoundingClientRect().top - 70
    document.querySelector('.chat_list').style.height = h + 'px'
})