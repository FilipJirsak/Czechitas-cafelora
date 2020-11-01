import './style.css'
import {Layer} from '../Layer/index.js'

export const Drink = (props) => {
    const drink = document.createElement('div');
    drink.classList.add('drink');

    // produkt
    const drinkProduct = document.createElement('div');
    drinkProduct.classList.add('drink__product');
    drink.appendChild(drinkProduct);

    const drinkCup = document.createElement('div');
    drinkCup.classList.add('drink__cup');
    drinkProduct.appendChild(drinkCup);

    const img = document.createElement('img');
    img.src = `assets/cups/${props.id}.png`;
    drinkCup.appendChild(img);

    const drinkInfo = document.createElement('div');
    drinkInfo.classList.add('drink__info');
    drinkProduct.appendChild(drinkInfo);

    const drinkInfoH3 = document.createElement('h3')
    drinkInfoH3.textContent = props.name;
    drinkInfo.appendChild(drinkInfoH3);

    props.layers.forEach(layer => drinkInfo.innerHTML += Layer(layer));
    
    // objednávka
    const drinkControls = document.createElement('div');
    drinkControls.classList.add('drink__controls');
    drink.appendChild(drinkControls);

    const orderBtn = document.createElement('button');
    orderBtn.classList.add('order-btn');
    orderBtn.textContent = 'Objednat';
    drinkControls.appendChild(orderBtn);

    orderBtn.addEventListener('click', () => {
        props.ordered = !props.ordered;
        drinkCup.classList.toggle('drink__cup--selected', props.ordered);
        orderBtn.textContent = props.ordered ? 'Zrušit' : 'Objednat'
    })
   

    return drink
}