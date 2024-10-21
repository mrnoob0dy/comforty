const mobileBtn = document.querySelector('.menu__burger')
const navList = document.querySelector('.nav__list')

mobileBtn.addEventListener('click', function() {
    mobileBtn.classList.toggle('menu__burger--active')
    navList.classList.toggle('nav__list--active')
})