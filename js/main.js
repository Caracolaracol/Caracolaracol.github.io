const btnWebDevelopment = document.querySelector('#btn-coding')
const btnMotionGraphics = document.querySelector('#btn-post')
const welcomeSection = document.querySelector('.welcome-section')
const footer = document.querySelector('.footer-show')
const main = document.querySelector('.main-container-show')
const t1 = document.querySelector('.t1')
const t2 = document.querySelector('.t2')
const t3 = document.querySelector('.t3')
const t4 = document.querySelector('.t4')
const t5 = document.querySelector('.t5')
const header = document.querySelector('.header')
const headerLogo = document.querySelector('.header__logo')
const firefly = document.querySelector('.firefly-show')
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

btnWebDevelopment.addEventListener('click', function(){
    welcomeSection.style.animation = 'desaparecerWelcome 200ms ease-out'
    delay(200).then(function() {
        welcomeSection.style.display = 'none'
        firefly.style.display = 'none'
        footer.style.display = 'flex'
        header.style.display = 'flex'
        headerLogo.style.display = 'flex'
        t1.style.display = 'block'
        t2.style.display = 'block'
        t3.style.display = 'block'
        t4.style.display = 'block'
        t5.style.display = 'block'
        main.style.display= 'block'
        
    })
})