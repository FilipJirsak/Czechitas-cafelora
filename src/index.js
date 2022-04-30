import './index.html';
import './style.css';
import { Drink } from './Drink/index.js'

// navigace
const navbar = document.querySelector('nav');
const closeNavbar = () => navbar.classList.toggle('nav-closed')

document.querySelector('#nav-btn').addEventListener('click', closeNavbar)
document.querySelectorAll('nav > a').forEach(navItem => navItem.addEventListener('click', closeNavbar))

// seznam nápojů

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
    .then(response => response.json())
    .then(data => data.results.forEach(drink => document.querySelector('.drinks-list').append(Drink(drink))));
