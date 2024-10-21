const categoryBtn = document.querySelector('.dropdown__btn')
const dropdownMenu = document.querySelector('.dropdown')
const dropdownBurger = document.querySelector('.dropwdown__burger')

categoryBtn.addEventListener('click', function() {
    categoryBtn.classList.toggle('dropdown__btn--active')
    dropdownMenu.classList.toggle('dropdown--active')
    dropdownBurger.classList.toggle('dropwdown__burger--active')
})


const productCards = document.querySelectorAll('.all')
const productBtns = document.querySelectorAll('.products__tabs-btn')

const filterProducts = productBtn => {
    productBtns.forEach(btn => {
        btn.classList.remove('products__tabs-btn--active')
    })
    const active = document.querySelector(`[data-f="${productBtn}"]`)
    if(active) active.classList.add('products__tabs-btn--active')

    productCards.forEach(el => {
        el.classList.remove('none')
        if(!el.classList.contains(productBtn)) {
            el.classList.add('none')
        }
    })
}

document.querySelector('.products__tabs').addEventListener('click', event => {
    if(event.target.tagName !== 'BUTTON') return

    const productBtn = event.target.dataset['f']
    filterProducts(productBtn)
    // window.location.hash = event.target.dataset['f']
})

// if(window.location.hash) {   
//     filterProducts(window.location.hash.slice(1))
// }