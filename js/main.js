const btnWebDevelopment = document.querySelector('#btn-coding')
const btnMotionGraphics = document.querySelector('#btn-post')
const welcomeSection = document.querySelector('.welcome-section')
const footer = document.querySelector('.footer-show')
const navBar = document.querySelector('.main-nav-show')
const main = document.querySelector('.main-container-show')
btnWebDevelopment.addEventListener('click', function(){
    welcomeSection.style.display = 'none'
    footer.style.display = 'flex'
    navBar.style.display = 'block'
    main.style.display= 'block'
})