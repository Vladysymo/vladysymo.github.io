let addMess = (message, my = true)=>{
    let div = document.createElement('div')
    div.classList.add('message')
    if (my) {
        div.classList.add('my')
    } else {
        div.classList.add('nmy')
    }
    div.innerHTML = message
    document.querySelector('.chat_list').appendChild(div)
    document.querySelector('.chat_list').scrollTop = document.querySelector('.chat_list').scrollHeight
}



document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    let mess = document.querySelector('input').value
    addMess(mess)
    document.querySelector('input').value = ''
})