import "./styles/main.css";
import menu from "./modules/menu";
import { counter as menuCounter } from "./modules/menu";
import contato from "./modules/contato";
import { counter as contatoCounter } from "./modules/contato";
import home from "./modules/home";
import { counter as homeCounter } from "./modules/home";

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
const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    if(menuCounter === 0) {
  if (homeCounter != 0) home.remove(content);
  if (contatoCounter != 0) contato.remove(content);
  menu.load(content);
  menuBtn.classList.add("selected");
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

