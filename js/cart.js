const btnCart = document.querySelector('.card__cart')
const cart = document.querySelector('[data-counter]')

window.addEventListener('click', function(event) {
    if(event.target.hasAttribute('data-cart') && !event.target.classList.contains('card__cart--active')) {
        event.target.classList.add('card__cart--active')
        cart.innerText = ++cart.innerText
    } else if(event.target.hasAttribute('data-cart') && event.target.classList.contains('card__cart--active')) {
        event.target.classList.remove('card__cart--active')
        cart.innerText = --cart.innerText
    } 
})


const favorites = document.querySelectorAll('.card__favorites')

favorites.forEach((e) => {
    e.addEventListener('click', function() {
        e.classList.toggle('card__favorites--active')
    })
})