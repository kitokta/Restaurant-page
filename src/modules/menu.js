let counter = 0;
import menuImg from '../assets/icons/menu.png';
import raspadinhaImg from '../assets/raspadinha.png';
import donutImg from '../assets/donut.jpg';

export default class menu {
  static load(content) {
    //title header with icon
    const menuIcon = document.createElement('img');
    menuIcon.src = menuImg;
    menuIcon.alt = 'menu-icon';
    menuIcon.classList.add('icon', 'menu-icon');
    const title = document.createElement("h1");
    title.innerHTML = "Menu! <br> 메뉴";
    title.setAttribute("id", "title");
    title.style.textAlign = 'center';
    const header = document.createElement('div');
    header.appendChild(menuIcon);
    header.appendChild(title);
    header.setAttribute('id', 'menu-header');

    //first item
    const items = ['Nome: Raspadinha Coreana', 'Hangul: 빙수', 'R$15,00']
    const list = document.createElement('ul');
    for(let i =0; i<items.length; i++){
      const listItems = document.createElement('li');
      listItems.innerHTML = items[i];
      list.appendChild(listItems);
    }
    const itemDiv1 = document.createElement('div');
    list.style.borderRight = '2px solid #fae6ef';
    list.style.padding = '2em';
    itemDiv1.appendChild(list);
    const raspadinha = document.createElement('img');
    raspadinha.src = raspadinhaImg;
    raspadinha.alt = '빙수';
    raspadinha.classList.add('menu-img')
    itemDiv1.appendChild(raspadinha);
    itemDiv1.classList.add('text-div', 'text-div-grid-menu');

    //Second Item
    const itemDiv2 = document.createElement('div');
    const donut = document.createElement('img');
    donut.src = donutImg;
    donut.alt = '꽈배기';
    donut.classList.add('menu-img')
    itemDiv2.appendChild(donut);
    itemDiv2.classList.add('text-div', 'text-div-grid-menu');

    const items2 = ['Nome: Donut de pão torcido', 'Hangul: 꽈배기', 'R$10,00']
    const list2 = document.createElement('ul');
    for(let i =0; i<items.length; i++){
      const listItems = document.createElement('li');
      listItems.innerHTML = items2[i];
      list2.appendChild(listItems);
    }
    list2.style.borderLeft = '2px solid #fae6ef';
    list2.style.padding = '2em';
    itemDiv2.appendChild(list2);



    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(header);
    box.appendChild(itemDiv1);
    box.appendChild(itemDiv2);
    content.appendChild(box);
    //adding 1 to menu counter
  menu.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const menuBtn = document.getElementById("menu");
    menuBtn.classList.remove('selected');
    menu.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}

export {counter};