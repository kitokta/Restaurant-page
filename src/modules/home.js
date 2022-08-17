let counter = 0;
import toast from '../assets/toast.jpg';
import cupcakeIcon from "../assets/icons/cupcake.svg";
import lolipopIcon from "../assets/icons/lolipop.svg";
import cakeIcon from "../assets/icons/cake.svg";

export default class home {
  static load(content) {
    //title
    const title = document.createElement("h1");
    title.innerHTML = `Padaria Coreana! <br> 한국 빵집`;
    title.setAttribute("id", "title");
    title.style.textAlign = "center";

    //text content
    const textDiv1 = document.createElement('div');
    const textContent = document.createElement('h2');
    textContent.innerHTML = "Acreditamos que a paixão pela culinária Coreana precisa ser compartilhada"
    textDiv1.classList.add('text-div');
    textDiv1.appendChild(textContent);

    //textDiv1 Image
    const toastImg = document.createElement('img');
    toastImg.src = toast;
    toastImg.alt = '딸기 샌드위치';
    toastImg.classList.add('content-img');
    textDiv1.appendChild(toastImg);

    //Hours
    const textDiv2 = document.createElement('div');
    const hourTitle = document.createElement('h1');
    hourTitle.innerHTML = 'Horário de funcionamento:';
    const list = document.createElement('ul');
    const hours = ['Domingo: 06:00 - 20:00', 'Segunda-feira: 06:00 - 19:00', 'Terça-feira: 06:00 - 19:00', 'Quarta-feira: 06:00 - 19:00', 'Quinta-Feira: 06:00 - 20:00', 'Sexta-feira: 06:00 - 21:00', 'Sábado: 06:00 - 21:00'];
    for(let i=0; i<hours.length; i++){
      const listItem = document.createElement('li');
      listItem.innerHTML = hours[i];
      list.appendChild(listItem);
    }
  
    textDiv2.classList.add('text-div');
    const hourDiv = document.createElement('div');
    hourDiv.setAttribute('id', 'hour-div');
    hourDiv.appendChild(hourTitle);
    hourDiv.appendChild(list);
    textDiv2.appendChild(hourDiv);



    //adding everything to the screen box
    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(title);
    box.appendChild(textDiv1);
    box.appendChild(textDiv2);
    content.appendChild(box);
    //adding 1 to home counter
  home.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const homeBtn = document.getElementById("home");
    homeBtn.classList.remove('selected');
    home.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}

export {counter};