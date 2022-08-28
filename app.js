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