import './index.html';
import './style.css';

console.log('funguju!');

// navigace
const navbar = document.querySelector('nav');
const closeNavbar = () => navbar.classList.toggle('nav-closed')

document.querySelector('#nav-btn').addEventListener('click', closeNavbar)
document.querySelectorAll('nav > a').forEach(navItem => navItem.addEventListener('click', closeNavbar))

// objednávání
const drinkCup = document.querySelector('.drink__cup');
const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
    const selected = drinkCup.classList.toggle('drink__cup--selected');
    orderBtn.textContent = selected ? 'Zrušit' : 'Objednat'
})