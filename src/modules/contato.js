let counter = 0;
import mail from '../assets/icons/gmail.png';
import whatsapp from '../assets/icons/whatsapp.png';
import instagram from '../assets/icons/instagram.png';


export default class contato {
  static load(content) {
    const title = document.createElement("h1");
    title.innerHTML = "Entre em contato conosco!";
    title.setAttribute("id", "title");

    //text content (whatsapp)
    const textDiv1 = document.createElement('div');
    const textContent1 = document.createElement('h2');
    textContent1.innerHTML = "(55) 95555-5555"
    textDiv1.classList.add('text-div-grid', 'text-div');
    textDiv1.appendChild(textContent1);

    //textDiv1 Image
    const whatsappIcon = document.createElement('img');
    whatsappIcon.src = whatsapp;
    whatsappIcon.alt = 'whatsapp-icon';
    whatsappIcon.style.height = '50%';
    textDiv1.appendChild(whatsappIcon);

    //text content (instagram)
    const textDiv2 = document.createElement('div');
    const textContent2 = document.createElement('h3');
    textContent2.innerHTML = "@padariacoreanaverdadeira"
    textDiv2.classList.add('text-div-grid', 'text-div');
    textDiv2.appendChild(textContent2);

    //textDiv2 Image
    const instagramIcon = document.createElement('img');
    instagramIcon.src = instagram;
    instagramIcon.alt = 'instagram-icon';
    instagramIcon.style.height = '50%';
    textDiv2.appendChild(instagramIcon);

    //text content (mail)
    const textDiv3 = document.createElement('div');
    const textContent3 = document.createElement('h3');
    textContent3.innerHTML = "emailverdadeiro@naosoufalso.com"
    textDiv3.classList.add('text-div-grid', 'text-div');
    textDiv3.appendChild(textContent3);

    //textDiv1 Image
    const mailIcon = document.createElement('img');
    mailIcon.src = mail;
    mailIcon.alt = 'mail-icon';
    mailIcon.style.height = '50%';
    textDiv3.appendChild(mailIcon);


    const box = document.createElement("div");
    box.setAttribute("id", "box");
    box.appendChild(title);
    box.appendChild(textDiv1);
    box.appendChild(textDiv2);
    box.appendChild(textDiv3);
    content.appendChild(box);
    contato.counter("add");
  }

  static remove(content) {
    const box = document.getElementById("box");
    content.removeChild(box);
    const contatoBtn = document.getElementById("contato");
    contatoBtn.classList.remove('selected');
    contato.counter("remove");
  }

  static counter(order) {
    if (order === "add") counter = 1;
    else if (order === "remove") counter = 0;
  }
}

export { counter };