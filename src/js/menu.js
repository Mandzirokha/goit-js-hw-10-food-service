import menuTemplate from '../templates/menu.hbs';
import menu from '../menu.json';

const menuList = document.querySelector('ul.js-menu');

const menuMarkup = menuTemplate(menu);
// console.log(menuMarkup);

menuList.insertAdjacentHTML('beforeend', menuMarkup);
// console.log(menuList);
