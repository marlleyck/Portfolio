const html = document.getElementById('html')
const css = document.getElementById('css')
const sass = document.getElementById('sass')
const js = document.getElementById('js')
const ts = document.getElementById('ts')
const react = document.getElementById('react')

const percent = document.querySelector('#percent-info')
const skills = document.querySelector('.skills')
const range = document.getElementById('range')

const noneShow = () => {
    percent.innerHTML = '0%'
}

html.addEventListener('mouseenter', () => {
    percent.innerHTML = '95%'
    range.value = '95'
})

css.addEventListener('mouseenter', () => {
    percent.innerHTML = '80%'
    range.value = '80'
})

sass.addEventListener('mouseenter', () => {
    percent.innerHTML = '70%'
    range.value = '70'
})

js.addEventListener('mouseenter', () => {
    percent.innerHTML = '85%'
    range.value = '85'
})

ts.addEventListener('mouseenter', () => {
    percent.innerHTML = '70%'
    range.value = '75'
})

react.addEventListener('mouseenter', () => {
    percent.innerHTML = '80%'
    range.value = '80'
})

skills.addEventListener('mouseleave', noneShow) 

// =========================================================

const mario = document.getElementById('mario')
const financ = document.getElementById('financ')
const weather = document.getElementById('weather')
const todo = document.getElementById('todo')
const costs = document.getElementById('costs')
const gallery = document.getElementById('gallery')

const card = document.querySelectorAll('.card')
const cardHover = document.querySelectorAll('.card-hover')

const paragMario = document.getElementById('paragMario')
const paragFinanc = document.getElementById('paragFinanc')
const paragWeather = document.getElementById('paragWeather')
const paragTodo = document.getElementById('paragTodo')
const paragCosts = document.getElementById('paragCosts')
const paragGallery = document.getElementById('paragGallery')

const parag = document.querySelectorAll('.parag')


mario.addEventListener('mouseenter', () => {
    paragMario.style.display = 'block'
})

financ.addEventListener('mouseenter', () => {
    paragFinanc.style.display = 'block'
})

weather.addEventListener('mouseenter', () => {
    paragWeather.style.display = 'block'
})

todo.addEventListener('mouseenter', () => {
    paragTodo.style.display = 'block'
})

costs.addEventListener('mouseenter', () => {
    paragCosts.style.display = 'block'
})

gallery.addEventListener('mouseenter', () => {
    paragGallery.style.display = 'block'
})

card.forEach((item) => {
    item.addEventListener('mouseleave', (e) => {
        parag.forEach((paragItem) => {
            paragItem.style.display = 'none'
        })

        const child = e.target.children[0]
        child.classList.remove('card-hover')
    })

    item.addEventListener('mouseenter', (e) => {
        const child = e.target.children[0]
        child.classList.add('card-hover')
    })

})