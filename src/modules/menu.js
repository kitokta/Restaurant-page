let counter = 0;
import menuImg from "../assets/icons/menu.png";
import raspadinhaImg from "../assets/raspadinha.png";
import donutImg from "../assets/donut.jpg";
import hoverDropdown from "./dropdown";

export default class menu {
  static load(content) {
    //title header with icon
    const menuIcon = document.createElement("img");
    menuIcon.src = menuImg;
    menuIcon.alt = "menu-icon";
    menuIcon.classList.add("icon", "menu-icon");
    const title = document.createElement("h1");
    title.innerHTML = "Menu! <br> 메뉴";
    title.setAttribute("id", "title");
    title.style.textAlign = "center";
    const header = document.createElement("div");
    header.appendChild(menuIcon);
    header.appendChild(title);
    header.setAttribute("id", "menu-header");
    content.appendChild(header);
    imageSlider.load(raspadinhaImg, donutImg);
    //adding 1 to menu counter
    menu.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("slider");
    const header = document.getElementById("menu-header");
    content.removeChild(box);
    content.removeChild(header);
    const menuBtn = document.getElementById("menu");
    const dropdownButtons = document.querySelector(".dropdown-button");
    menuBtn.classList.remove("selected");
    dropdownButtons.classList.remove("selected");
    menu.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}

export { counter };

class imageSlider {
  //loader
  static load() {
    //ID for each img of the slider
    for (let i = 0; i < arguments.length; i++) {
      const images = [];
      images[i] = document.createElement('img');
      images[i].src = arguments[i];
      images[i].setAttribute("id", `${i}`);
    }

    //Slider div
    const slider = document.createElement('div');
    slider.classList.add('slider-div');
    slider.setAttribute('id', 'slider');

    //Arrows
    //Backwards
    const backwards = document.createElement('div');
    backwards.classList.add('arrow');
    backwards.setAttribute('id', 'back-arrow');
    slider.appendChild(backwards);
    backwards.innerHTML = "<";

    //foward
    const foward = document.createElement('div');
    foward.classList.add('arrow');
    foward.setAttribute('id', 'foward-arrow');
    foward.innerHTML = ">";
    slider.appendChild(foward);

    //slider append on contentbox
    const content = document.getElementById("content");
    slider.style.marginTop = "5em";
    content.style.borderRadius = "0";
    content.appendChild(slider);

    imageSlider.effects(slider);
  }

  static effects(slider) {
    hoverDropdown(slider,)
  }
}
