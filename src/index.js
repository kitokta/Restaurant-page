var ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});

import "./styles/main.css";
import menu from "./modules/menu";
import { counter as menuCounter } from "./modules/menu";
import contato from "./modules/contato";
import { counter as contatoCounter } from "./modules/contato";
import home from "./modules/home";
import { counter as homeCounter } from "./modules/home";
import cupcakeIcon from "./assets/icons/cupcake.svg";
import lolipopIcon from "./assets/icons/lolipop.svg";
import cakeIcon from "./assets/icons/cake.svg";
import hoverDropdown from "./modules/dropdown";

//icon loader
const cupcakeLeft = document.getElementById('cupcake-left');
const cupcakeRight = document.getElementById('cupcake-right');
cupcakeLeft.src = cupcakeIcon;
cupcakeRight.src = cupcakeIcon;
const cakeLeft = document.getElementById('cake-left');
const cakeRight = document.getElementById('cake-right');
cakeLeft.src = cakeIcon;
cakeRight.src = cakeIcon;
const lolipopLeft = document.getElementById('lolipop-left');
const lolipopRight = document.getElementById('lolipop-right');
lolipopLeft.src = lolipopIcon;
lolipopRight.src = lolipopIcon;


//content element to pass to load function
const content = document.getElementById("content");


//Home button
const homeBtn = document.getElementById("home");
//First page load is in home!
homeBtn.classList.add("selected");
home.load(content);

//Home button eventListener
homeBtn.addEventListener("click", () => {
  //Só ira remover se tiver sido clicado anteriormente
  if(homeCounter === 0) {
  if (contatoCounter != 0) contato.remove(content);
  if (menuCounter != 0) menu.remove(content);
  home.load(content);
  homeBtn.classList.add("selected");
  }
});


//Menu button eventListener
const dropdown = document.getElementById("dropdown-buttons");
const menuBtn = document.getElementById("menu");
const menuDrop = document.getElementById("menu-dropdown");
const dropdownButtons = document.querySelector(".dropdown-button");
hoverDropdown(menuDrop, dropdown);
menuBtn.addEventListener("click", () => {
    if(menuCounter === 0) {
  if (homeCounter != 0) home.remove(content);
  if (contatoCounter != 0) contato.remove(content);
  menu.load(content);
  menuBtn.classList.add("selected");
  dropdownButtons.classList.add("selected");
    }
});


//Contato button eventListener

const contatoBtn = document.getElementById("contato");
contatoBtn.addEventListener("click", () => {
    if(contatoCounter === 0) {
  if (homeCounter != 0) home.remove(content);
  if (menuCounter != 0) menu.remove(content);
  contato.load(content);
  contatoBtn.classList.add("selected");
    }
});

