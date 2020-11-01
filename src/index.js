import './index.html';
import './style.css';

console.log('funguju!');

// navigace
const navbar = document.querySelector('nav');
const closeNavbar = () => navbar.classList.toggle('nav-closed')

document.querySelector('#nav-btn').addEventListener('click', closeNavbar)
document.querySelectorAll('nav > a').forEach(navItem => navItem.addEventListener('click', closeNavbar))

// seznam nápojů
import { Drink } from './Drink/index.js'
fetch('https://run.mocky.io/v3/920f04d5-bf2e-49b3-9402-c693e6ea9499')
    .then(response => response.json())
    .then(drinks => drinks.forEach(drink => document.querySelector('.drinks-list').append(Drink(drink))));
