import './index.html';
import './style.css';

console.log('funguju!');

const navbar = document.querySelector('nav');

const closeNavbar = () => navbar.classList.toggle('nav-closed')

document.querySelector('#nav-btn').addEventListener('click', closeNavbar)
document.querySelectorAll('nav > a').forEach(navItem => navItem.addEventListener('click', closeNavbar))