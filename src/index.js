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
fetch('http://cafelora.kodim.cz/api/drinks')
    .then(response => response.json())
    .then(drinks => drinks.forEach(drink => document.querySelector('.drinks-list').append(Drink(drink))));
