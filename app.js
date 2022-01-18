//Получение кнопок.
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
//Задание стиля sidebar.
const container = document.querySelector('.container')
//Выбор слайдов правой части.
const mainSlide = document.querySelector('.main-slide')
//Получаем все div. lenght - помогает получить число.
const slidesCount = mainSlide.querySelectorAll('div').length
//Создаем переменную которая следит за активным слайдом. 

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => 
{changeSlide('up')});

downBtn.addEventListener('click', () => 
{changeSlide('down')});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) 
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

const height = container.clientHeight

mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}