let counter = 0;
import menuImg from "../assets/icons/menu.png";
import raspadinhaImg from "../assets/raspadinha.png";
import donutImg from "../assets/donut.jpg";
import toastImg from "../assets/toast.jpg"
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
    imageSlider.load(toastImg, raspadinhaImg, donutImg);
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
    const images = [];
    for (let i = 0; i < arguments.length; i++) {
      images[i] = document.createElement('img');
      images[i].src = arguments[i];
      images[i].setAttribute("id", `${i}`);
    }

    //Slider div
    const slider = document.createElement('div');
    slider.classList.add('slider-div');
    slider.setAttribute('id', 'slider');
    slider.style.backgroundImage = `url('${images[0].src}')`;
    let sliderCounter = 0;

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

    const arrowClass = document.querySelectorAll('.arrow');
    imageSlider.effects(slider, arrowClass);
    imageSlider.arrowFunction(arrowClass, images, slider, sliderCounter);
  }

  static arrowFunction(arrows, images, slider, Counter) {
    let sliderCounter = Counter;
    for(const arrow of arrows) {
    arrow.addEventListener('click', () => {
      if(arrow.id==='back-arrow') {
        let findImg = false;
        for(let i =0; findImg!=true; i++) {
          if(sliderCounter === i) {
            if((i-1) < 0) {
            slider.style.backgroundImage = `url('${images[images.length-1].src}')`;
            sliderCounter = images.length-1;
            findImg = true;
            }
            else {
            slider.style.backgroundImage = `url('${images[i-1].src}')`;
            sliderCounter--;
            findImg = true;
          }
          }
        }
      }
      else if(arrow.id==='foward-arrow') {
        let findImg = false;
        for(let i =0; findImg!=true; i++) {
          if(sliderCounter === i) {
            if((i+1) > images.length-1) {
            slider.style.backgroundImage = `url('${images[0].src}')`;
            sliderCounter = 0;
            findImg = true;
            }
            else {
            slider.style.backgroundImage = `url('${images[i+1].src}')`;
            sliderCounter++;
            findImg = true;
          }
          }
        }
      }
    })}
  }

  static effects(slider, arrow) {
    hoverDropdown(slider, arrow);
  }
}
