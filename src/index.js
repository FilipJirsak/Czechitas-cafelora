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
const drinks = [
    {
        id: 'cappuccino',
        name: 'Cappuccino',
        ordered: false,
        layers: [
            {
                color: '#feeeca',
                label: 'mléčná pěna',
            },
            {
                color: '#fed7b0',
                label: 'teplé mléko',
            },
            {
                color: '#613916',
                label: 'espresso',
            },]
    },
    {
        id: 'romano',
        name: 'Romano',
        ordered: false,
        layers: [
            {
                color: '#fbdf5b',
                label: 'citrón',
            },
            {
                color: '#613916',
                label: 'espresso',
            },
        ],
    },
];
drinks.forEach(drink => document.querySelector('.drinks-list').append(Drink(drink)));