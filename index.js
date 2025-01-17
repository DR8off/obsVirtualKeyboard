const keyboardKeys = ['w','a','s','d']
const keyboard = document.createElement('div')
keyboard.classList.add('keyboard')
document.body.appendChild(keyboard)

keyboardKeys.forEach(key => {
    const keyboardKey = document.createElement('div')
    keyboardKey.classList.add('keyboardKey', key)
    keyboardKey.textContent = key

    keyboard.appendChild(keyboardKey)
})

keyboard.addEventListener('keydown', (e) => {
    e.preventDefault()

    const { key } = e
    document.querySelector(`.${key}`).classList.add('active')
})
keyboard.addEventListener('keyup', (e) => {
    e.preventDefault()

    const { key } = e
    document.querySelector(`.${key}`).classList.remove('active')
})
keyboard.focus()